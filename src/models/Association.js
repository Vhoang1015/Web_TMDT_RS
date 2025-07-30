// models/Association.model.js
import Category from './Category.model.js';
import Stock from './Stock.model.js';
import Brand from './Brand.model.js';
import Product from './Product.model.js';
import ProductImage from './ProductImage.model.js';
import CartItem from './CartItem.model.js';
import User from './User.model.js';
import Order from './Order.model.js';
import OrderItem from './OrderItem.model.js';
import Review from './Review.model.js';
import Payment from './Payment.model.js';
import Wishlist from './Wishlist.model.js';
import Notification from './Notification.model.js';

const setupAssociation = () => {
    Product.belongsTo(Category, { foreignKey: 'category_id' });
    Category.hasMany(Product, { foreignKey: 'category_id' });

    Product.belongsTo(Brand, { foreignKey: 'brand_id' });
    Brand.hasMany(Product, { foreignKey: 'brand_id' });

    Product.belongsTo(Stock, { foreignKey: 'stock_id' });
    Stock.hasMany(Product, { foreignKey: 'stock_id' });

    ProductImage.belongsTo(Product,{foreignKey:'product_id'});
    Product.hasMany(ProductImage,{foreignKey:'product_id'});

    CartItem.belongsTo(User, { foreignKey: 'user_id' });
    User.hasMany(CartItem, { foreignKey: 'user_id' });

    CartItem.belongsTo(Product, { foreignKey: 'product_id' });
    Product.hasMany(CartItem, { foreignKey: 'product_id' });

    // Order liên kết với User
    Order.belongsTo(User, { foreignKey: 'user_id' });
    User.hasMany(Order, { foreignKey: 'user_id' });

    // OrderItem liên kết với Order và Product
    OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
    Order.hasMany(OrderItem, { foreignKey: 'order_id' });

    OrderItem.belongsTo(Product, { foreignKey: 'product_id' });
    Product.hasMany(OrderItem, { foreignKey: 'product_id' });
    // Review lien ket voi User
    Review.belongsTo(User, { foreignKey: 'user_id' });
    User.hasMany(Review, { foreignKey: 'user_id' });
    // Review lien ket voi Product
    Review.belongsTo(Product, { foreignKey: 'product_id' });
    Product.hasMany(Review, { foreignKey: 'product_id' });
    // Payment lien ket voi Order
    Payment.belongsTo(Order, { foreignKey: 'order_id' });
    Order.hasMany(Payment, { foreignKey: 'order_id' });

    // Wishlist
    Wishlist.belongsTo(User, { foreignKey: 'user_id' });
    Wishlist.belongsTo(Product, { foreignKey: 'product_id' });
    User.hasMany(Wishlist, { foreignKey: 'user_id' });
    Product.hasMany(Wishlist, { foreignKey: 'product_id' });

    // Notification
    Notification.belongsTo(User, { foreignKey: 'user_id' });
    User.hasMany(Notification, { foreignKey: 'user_id' });

};

export default setupAssociation;