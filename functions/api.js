import { express } from "express";
import { serverless } from "serverless-http"

const app = express();
const router = express.router();

router.get("/", (req, res)=>{
    
    res.send("Hello this is root endpoint for testing")
})

router.get("/test", (req, res)=>{

    res.send("this is the test endpoint")
})

app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app)