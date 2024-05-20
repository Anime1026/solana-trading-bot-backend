import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import { router } from "./router";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));
app.use("/api", router);
const port = process.env.PORT || 443;

try {
    app.listen(port, () => {
        console.log("Server is running on ", port);
    })
} catch (error) {

}