module.exports = (sequelize, DateTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DateTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DateTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DateTypes.STRING,
            allowNull: false,
        },
    })

    return Posts;

}