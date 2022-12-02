const { response } = require("express");

const getAll = async(req, res) => {
    return response.status(200).json({message: 'Controller em funcionamento!'});
};

module.exports ={
    getAll
};
