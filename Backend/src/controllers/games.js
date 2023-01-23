const axios = require("axios");

exports.getGames = async (req, res, next) => {
    try {
        //TODO: make API call to IGDB
        // const result = axios.get("")
    } catch (error) {
        next(error);
    }
}