module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define("Genre", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nama: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: true
        }

    }, {
        tableName: "genre",
        timestamps: true
    });

    Genre.associate = (models) => {

        Genre.belongsToMany(models.Komik, {
            through: "Komik_Genre",
            foreignKey: "genre_Id",
            otherKey: "komik_Id",
            as: "komik"
        });
    };

    return Genre;
};