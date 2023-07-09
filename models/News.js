module.exports = (sequelize, DateTypes) => {

    const News = sequelize.define("News", {
        name: {
            type: DateTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DateTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DateTypes.STRING,
            allowNull: false,
        },
    }) 

    return News;

}