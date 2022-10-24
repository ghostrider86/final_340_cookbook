const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const recipeUtil = require('../util/recipeComplexityCheck');

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('user').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createUser = async (req, res) => {
  const user = {
    given_name: req.body.given_name,
    family_name: req.body.family_name,
    nickname: req.body.nickname,
    name: req.body.name,
    picture: req.body.picture,
    locale: req.body.locale,
    updated_at: req.body.updated_at,
    email: req.body.email,
    email_verified: req.body.email_verified,
    sub: req.body.sub,
    sid: req.body.sid
  };
  const response = await mongodb.getDb().db().collection('user').insertOne(user);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the user.');
  }
};

const updateUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const user = {
    given_name: req.body.given_name,
    family_name: req.body.family_name,
    nickname: req.body.nickname,
    name: req.body.name,
    picture: req.body.picture,
    locale: req.body.locale,
    updated_at: req.body.updated_at,
    email: req.body.email,
    email_verified: req.body.email_verified,
    sub: req.body.sub,
    sid: req.body.sid
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('user')
    .replaceOne({ _id: userId }, user);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the user.');
  }
};


const deleteUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('user').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the user.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser
};
