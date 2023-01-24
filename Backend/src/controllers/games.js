// Imports axios library
const axios = require("axios");

// Library used to read .env file ("File is not accesible however it contains API keys")
require("dotenv").config()

exports.getGames = async (req, res, next) => {
    try {
        // Calls the IGDB API with specific parameters
        // Requests the name, cover art, website, and genres of the games
        // Only requests games with a rating/aggregated rating of 85 or above, 
        // as well as games that are released past 2005, and are considered the main game (Excludes dlcs, extra content, etc...)
        // Will pull 500 games from the site
        const games = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Client-ID": process.env.IGDB_CLIENT_ID,
                "Authorization": `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
            },
            data: "fields name, cover, url, genres, rating, aggregated_rating; where aggregated_rating >= 80 & rating >= 80 & category = 0 & first_release_date > 1104555600 & themes != 42; sort rating desc; limit 500;"
            
        });

        // Stores all game ID's
        gameIDs = [];

        // Stores all cover art ID's
        coverIDs = [];

        // Puts all cover ids into coverIDs list
        games.data.forEach((game) => {
            gameIDs.push(game.id)
            coverIDs.push(game.cover)
        })

        // Pulls cover url for each game
        const covers = await axios({
            url: "https://api.igdb.com/v4/covers",
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Client-ID": process.env.IGDB_CLIENT_ID,
                "Authorization": `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
            },
            data: `fields url, game; where game = (${[...gameIDs]}); limit ${gameIDs.length};`
        })

        // Changes cover url to a larger size cover photo and changes jpg to png for better image quality
        covers.data.forEach((cover) => {
            cover.url = cover.url.replace("t_thumb", "t_cover_big");
            cover.url = cover.url.replace("jpg", "png");
        })

        // Changes cover id to cover image URL for the frontend
        games.data.forEach((game) => {
            covers.data.forEach((cover) => {
                if(cover.game === game.id) game.cover = cover.url
            })
        })
        
        // Sends response with data pulled from API and filtered
        res.send(games.data)
    } catch (error) {
        next(error);
    }
}

