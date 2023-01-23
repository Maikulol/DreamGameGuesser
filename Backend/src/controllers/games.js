const axios = require("axios");
require("dotenv").config()

exports.getGames = async (req, res, next) => {
    try {
        
        // Calls the IGDB API with specific parameters
        // Requests the name, cover art, website, and genres of the games
        // Only requests games with a rating/aggregated rating of 85 or above, 
        // as well as games that are released past 2005, and are considered the main game (Excludes dlcs, extra content, etc...)
        // Will pull 500 games from the site
        const result = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Client-ID": process.env.IGDB_CLIENT_ID,
                "Authorization": `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
            },
            data: "fields name, cover, websites, genres; where aggregated_rating >= 85 & rating >= 85 & category = 0 & first_release_date > 1104555600; limit 500;"
        });

        res.send(result.data)

        //TODO: filter through games pulled from API
        // const games = result.data.filter((game) => game.genres.includes)
    } catch (error) {
        next(error);
    }
}

