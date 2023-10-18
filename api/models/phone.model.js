module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // DEFINE YOUR MODEL HERE
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        number: {
            type: Sequelize.STRING,
            allowNull: Boolean,
        },
        contactId: {
            type: Sequelize.number,
            foreignKey: true,
        }
    });
  
    return Phone;
};