import { DataTypes, NOW } from "sequelize";
import sequelize from "../config/dbconnect";

const Category = sequelize.define('Category', {
    category_id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    slug:{
        type: DataTypes.STRING(100),
        unique: true,
    },
    parent_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},  {
    tableName: 'categories',
    timestamps: false,
    underscored: true,
});

export default Category;