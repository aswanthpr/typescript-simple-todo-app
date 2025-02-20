import express from "express"
import logger from "morgan"
import path from "path"
import router from "./router/route"

const app = express()


app.set('view engine','ejs');
app.set('views',path.join(__dirname,"../viwes"));
app.set('views',"./views/page")

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"../public")));
app.use(logger('dev'))

app.use('/',router)


app.listen(4000,()=>{
    console.log("server is running on  http://localhost:4000")
}) 