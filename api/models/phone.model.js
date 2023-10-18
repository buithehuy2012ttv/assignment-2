module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        contactId:{
            type: Sequelize.INTEGER,
        }
        // DEFINE YOUR MODEL HERE
    });
  
    return Phone;
};