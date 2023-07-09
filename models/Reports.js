module.exports = (sequelize, DateTypes) => {

    const Reports = sequelize.define("Reports", {
        text: {
            type: DateTypes.STRING,
            allowNull: false,
        },
    })

    return Reports;

}