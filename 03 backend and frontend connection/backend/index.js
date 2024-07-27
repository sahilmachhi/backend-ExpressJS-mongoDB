import express from "express";
import cors from "cors"
const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("hello from server")
})

const samplejson = {
    "hello": "world",
    "lol": [{
        "hello": "lol",
    },
    {
        "hello": "lol",
    },
    ]
}

app.get("/jsondata", (req, res) => {
    res.json(samplejson)
})

app.get("/jsondata/:slug", (req, res) => {
    console.log(req.params)
    res.send(req.params)
})




app.listen(8000, () => { console.log("server is running on port 8000") })