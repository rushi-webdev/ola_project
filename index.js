const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./Routes/payment");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors()); 

app.use(`/api/payment/`, paymentRoutes);
console.log(process.env.BASE_URL)
const port = process.env.PORT || 8080;
app.listen(port,()=>{
})
