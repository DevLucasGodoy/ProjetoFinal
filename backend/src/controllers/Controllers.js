const { response } = require("express");

const getAll = (require, response) => {
    return response.status(200).json({message: 'Controller em funcionamento!'});
};

module.exports ={
    getAll
};
