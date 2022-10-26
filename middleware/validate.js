const validator = require('../helpers/validate');

const createComment = (req, res, next) => {
    const validationRule = {
        Name: 'required|string',
        Author: 'required|string',
        comment_text: 'required|string',
        recipe_id: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const createImage = (req, res, next) => {
    const validationRule = {
        Name: 'required|string',
        url: 'required|string',
        Quality: 'required|string',
        Description: 'required|string',
        Type: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const createRecipe = (req, res, next) => {
    const validationRule = {
        Name: 'required|string',
        url: 'required|string',
        Description: 'required|string',
        Author: 'required|string',
        type: 'required|string',
        ngredients: 'required|string',
        Method: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const createUser = (req, res, next) => {
    const validationRule = {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    createComment,
    createImage,
    createRecipe,
    createUser
};