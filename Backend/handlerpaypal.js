// routes/paypal.js
router.post('/capture-order', async (req, res) => {
    const { orderID } = req.body;
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});
  
    try {
      const capture = await client.execute(request);
      res.json(capture);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  