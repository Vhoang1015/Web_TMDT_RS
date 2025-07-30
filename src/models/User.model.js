import { DataTypes } from "sequelize";
import sequelize from "../config/dbconnect";

const User = sequelize.define('User', {
    user_id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING(100),
        allowNull: false,
        unique:true,
    },
    password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }, 
}, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
});

export default User;