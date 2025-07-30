// models/Stock.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Stock = sequelize.define('Stock', {
  stock_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  owners: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'stock',
  timestamps: false,
});

export default Stock;
