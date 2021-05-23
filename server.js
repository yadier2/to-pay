const express = require('express');

const Stripe = require("stripe"); 
require('dotenv').config()
const stripe = new Stripe(process.env.CLAVE); /* Variable de entorno*/
const cors = require("cors");
/* const port = process.env.PORT || 3001; */
const app = express();

app.use(cors({ origin: "https://guappjolotas-zsuce7k7x-yadier2.vercel.app/" }));
app.use(express.json());


app.post("/api/checkout", async (req, res) => {
  // you can get more data to find in a database, and so on
 
  const { id, amount ,description } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description,
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
}); 

app.get('/hacker', (req, res) => {
    res.send("hola...")
});

app.listen(process.env.PORT || 3001, () => {
    console.log('servidor escuchando en el puerto 3001');
})
