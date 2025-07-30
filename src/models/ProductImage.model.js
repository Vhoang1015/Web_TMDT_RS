// ProductImage.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconnect.js';

const ProductImage = sequelize.define('ProductImage', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  product_id: { type: DataTypes.INTEGER, allowNull: false },
  image_url: { type: DataTypes.STRING, allowNull: false },
  is_main: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'product_images',
  timestamps: false
});

export default ProductImage;
