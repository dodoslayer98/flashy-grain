const Order = require('../../models/order');
const Item = require('../../models/item');

  
async function cart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    res.json(cart); 
  }
  catch (error){
    res.status(400).json(error)
  }
}

async function addToCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
  }
  catch (error){
    res.status(400).json(error)
  }
}

async function setItemQtyInCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.json(cart);
  }
  catch (error){
    res.status(400).json(error)
  }

}

async function checkout(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
  }
  catch (error){
    res.status(400).json(error)
  }

}

async function forUser(req, res) {
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}
  
module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  forUser
};
  