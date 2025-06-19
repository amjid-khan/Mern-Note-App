import express from "express"
import connectionDB from './db/db.js'
import dotenv from 'dotenv'
import router from "./routes/routes.js"
const app = express()
import cors from "cors";
app.use(cors());
dotenv.config()

app.use(express.json())


app.use("/api", router)

//DB connection and server listening ............
connectionDB().then(() => {
    app.listen(process.env.PORT, () => {
        try {
            console.log("Server is ready on port : ", process.env.PORT);
        } catch (error) {
            console.log("Error while running server", error);

        }
    })
})
