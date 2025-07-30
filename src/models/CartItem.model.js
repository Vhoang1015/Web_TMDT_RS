import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconnect.js';

const CartItem = sequelize.define('CartItem', {
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
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'cart_items',
    timestamps: false, // vì bạn không có updated_at hoặc createdAt mặc định Sequelize
    underscored: true,
});

export default CartItem;
