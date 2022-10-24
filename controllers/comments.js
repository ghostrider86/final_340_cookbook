const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const recipeUtil = require('../util/recipeComplexityCheck');

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('comments').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('comments').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createComment = async (req, res) => {
  const comment = {
    Name: req.body.Name,
    Author: req.body.Author,
    comment_text: req.body.comment_text,
    recipe_id: req.body.recipe_id
  };
  const response = await mongodb.getDb().db().collection('comments').insertOne(comment);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the comment.');
  }
};

const updateComment = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const comment = {
    Name: req.body.Name,
    Author: req.body.Author,
    comment_text: req.body.comment_text,
    recipe_id: req.body.recipe_id
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('comments')
    .replaceOne({ _id: userId }, comment);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the comment.');
  }
};


const deleteComment = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('comments').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the comment.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createComment,
  updateComment,
  deleteComment
};
