import sequelize from "../config/dbconnect.js"; // Connect DB
// Associations
import setupAssociation from "./Association.js";
//Models
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

try{
    setupAssociation();
} catch(error){
    console.error('Error setting up associtions', error);
}

export {
    sequelize,
    Product,
    Category,
    Brand,
    Stock,
    ProductImage,
    CartItem,
    User,
    Order,
    OrderItem,
    Review,
    Payment,
    Wishlist,
    Notification,
}