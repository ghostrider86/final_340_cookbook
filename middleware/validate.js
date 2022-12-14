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
        given_name: 'required|string',
        family_name: 'required|string',
        nickname: 'string',
        name: 'string',
        picture: 'string',
        locale: 'string',
        updated_at: 'string',
        email: 'required|string',
        email_verified: 'string',
        sub: 'string',
        sid: 'string'
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