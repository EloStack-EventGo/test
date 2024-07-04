import {express} from "express"
import {serverless} from "serverless-http"

const app = express();
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("root working")
})

router.get("/test", (req, res)=>{
    res.send("test is working too")
})

module.exports = app.use("/netlify/functions/api", router)
module.exports.handler = serverless(app)