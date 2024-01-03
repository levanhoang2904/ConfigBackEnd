import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3002
configViewEngine(app)

initWebRoutes(app)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
