import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconnect.js';

const Wishlist = sequelize.define('Wishlist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'wishlists',
    timestamps: false,
    underscored: true,
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'product_id'],
            name: 'unique_wishlist'
        }
    ]
});

export default Wishlist;
