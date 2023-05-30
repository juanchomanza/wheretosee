const Actor = require('../models/Actor');
const Director = require('../models/Director');
const Genre = require('../models/Genre');
const Movie = require('../models/Movie');
const sequelize = require('../utils/connection');

require('../models')


const main = async() => {
    try{
        await sequelize.sync({ force: true });
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();