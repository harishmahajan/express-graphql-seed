import Joi from 'joi';

export default {
    signup: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    },
    signin: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    }
}