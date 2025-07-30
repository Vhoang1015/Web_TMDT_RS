// models/Product.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconnect.js';

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(255),
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  discount: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00,
  },
  brand_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  stock_id: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
  tableName: 'products',
  timestamps: false, 
});

export default Product;
