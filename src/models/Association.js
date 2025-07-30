import sequelize from '../config/database.js';
import Product from './Product.model.js';
import Category from './Category.model.js';
import Brand from './Brand.model.js';
import Stock from './Stock.model.js';

const Association = () => {
    Product.belongsTo(Category, { foreignKey: 'category_id' });
    Category.hasMany(Product, { foreignKey: 'category_id' });

    Product.belongsTo(Brand, { foreignKey: 'brand_id' });
    Brand.hasMany(Product, { foreignKey: 'brand_id' });

    Product.belongsTo(Stock, { foreignKey: 'stock_id' });
    Stock.hasMany(Product, { foreignKey: 'stock_id' });
}
Association();

export {
    sequelize,
    Product,
    Category,
    Brand,
    Stock,
}