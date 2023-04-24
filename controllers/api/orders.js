const Order = require('../../models/order');

  
async function cart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    res.json(cart); 
  }
  catch (error){
    res.status(400).json(error)
  }
}
  
  
module.exports = {
  cart,
};
  