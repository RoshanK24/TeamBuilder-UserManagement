import express from "express";
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoute.js'
import cors from 'cors'; 
import morgan from 'morgan'; 
import bodyParser from 'body-parser';
import path from "path";
import { fileURLToPath } from "url";

//esmodule6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
 

// Routes
app.use('/api/v1', userRoutes);

app.use("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const PORT = 8040;
//run listen
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server runing on ${PORT}`);
    });
})