const admin = require('../../firebase-service')

const getOrders = async (req, res) => {
  try {
    let query = admin.collection('orders');
    let response = [];
    await query.get().then(querySnapshot => {
    let docs = querySnapshot.docs;
    for (let doc of docs) {
        const selectedItem = {
            id: doc.id,
            item: doc.data().item
        };
        response.push(selectedItem);
    }
    });

    return res.status(200).send(response);

  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
  }
}

const getOrder = async (req, res) => {
  try {
    const document = db.collection('orders').doc(req.params.order_id);
    let order = await document.get();
    let response = order.data();
    return res.status(200).send(response);

  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
  }
}

const updateOrder = async (req, res) => {
  try {
    const document = db.collection('orders').doc(req.params.orders_id);
    await document.update({
        order: req.body.order
    });

    return res.status(200).send();
    
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
  }
}

module.exports = {
  getOrders,
  getOrder,
  updateOrder
}