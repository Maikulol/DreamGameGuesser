const { retrieveGames } = require("./games");
const axios = require("axios");

// Processes the user input from the front end and provides output
exports.computeResult = async (req, res, next) => {
    try {

        // Gets user input from API request body and list of games from games controller
        const userInput = new Map(Object.entries(req.body));
        const games = await retrieveGames();

        // Create map that links genre IDs with genres names
        const genres = new Map([
            ["Shooter", 5],
            ["Racing", 10],
            ["Adventure", 31],
            ["Hack and Slash", 25],
            ["Sport", 14],
            ["Simulator", 13],
            ["RPG", 12]
        ])

        // Creates map that links gamemode IDs with gamemodes
        const gameModes = new Map([
            ["singleplayer", 1],
            ["multiplayer", 2]
        ])

        // Assigns each user input answer to a question mapped in the genres map
        const questionToGenre = new Map([
            [3, "Shooter"],
            [4, "Adventure"],
            [5, "Simulator"],
            [6, "RPG"],
            [7, "Sport"],
            [8, "Racing"],
            [9, "Hack and Slash"]
        ])

        
        // Used to iterate through input questions to assign corresponding genres
        const questionNumbers = [...userInput.keys()];
        
        // Converts user input into a list of genre id's
        const getGenres = () => {
            const list = [];
            for(let number of questionNumbers){
                if(number == "1" || number == "2") continue;
                if(userInput.get(number) == "YES"){
                    list.push(genres.get(questionToGenre.get(parseInt(number))));
                }
            }

            list.sort((a, b) => a - b)
            return list;
        }
        
        // Function that checks if two arrays are equal
        const isEqual = (a, b) => {
            for(let i = 0; i < a.length; i++){
                if(a[i] !== b[i]) return false
            }
            return true;
        }
        
        // Stores the final filteres games
        const filteredGames = games.filter((game) => {
            
            // Filters games by singeplayer or multiplayer based on user input
            return game.game_modes.includes(gameModes.get(userInput.get("2").toLowerCase())) &&

            // Checks that the genres match the input genres by the user
            isEqual(game.genres, getGenres()) 

        })

        // Checks if the user wants the engine to be strict or lenient and reduces results accordingly
        if(userInput.get("1") == "STRICT") filteredGames.length = 3;
        else filteredGames.length = 12;

        // Sends the final list of filtered games to the frontend
        res.send(filteredGames);
    } catch (error) {
        next(error);
    }
}

