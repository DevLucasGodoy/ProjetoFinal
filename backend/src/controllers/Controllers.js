const { response } = require("express");
const Model = require('../models/Model');

const getAll = async (require, response) => {
    const Models = await Model.getAll();

    return response.status(200).json(Models, {message: 'Controller em funcionamento!'});
};

module.exports ={
    getAll
};
