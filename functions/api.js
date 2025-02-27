import {express} from "express"
import {serverless} from "serverless-http"

const app = express();
const router = express.router();


router.get("/", (req, res)=>{
    res.send("root working")
})

router.get("/test", (req, res)=>{
    res.send("test is working too")
})

app.use("/netlify/functions/api", router)
module.exports.handler = serverless(app)