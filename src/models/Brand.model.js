// models/Brand.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconnect.js';

const Brand = sequelize.define('Brand', {
  brand_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  brand_name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'brands',
  timestamps: false,
});

export default Brand;
