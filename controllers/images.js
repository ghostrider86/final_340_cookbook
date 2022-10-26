const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const recipeUtil = require('../util/recipeComplexityCheck');

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('images').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('images').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createImage = async (req, res) => {
  const image = {
    Name: req.body.Name,
    url: req.body.url,
    Quality: req.body.Quality,
    Description: req.body.Description,
    Type: req.body.Type
  };
  const response = await mongodb.getDb().db().collection('images').insertOne(image);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the image.');
  }
};

const updateImage = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const image = {
    Name: req.body.Name,
    Quality: req.body.Quality,
    Description: req.body.Description,
    Type: req.body.Type
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('images')
    .replaceOne({ _id: userId }, image);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the image.');
  }
};


const deleteImage = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('images').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the image.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createImage,
  updateImage,
  deleteImage
};
