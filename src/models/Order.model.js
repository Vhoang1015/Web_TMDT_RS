// models/Order.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconnect.js';

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'shipped', 'completed', 'cancelled'),
    defaultValue: 'pending'
  },
  payment_status:{
    type: DataTypes.ENUM('Cash', 'Credit')
  },
  payment_method: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  shipping_address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'orders',
  timestamps: false
});

export default Order;
