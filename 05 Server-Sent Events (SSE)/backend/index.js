import express from "express"
import cors from "cors"

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world")
})


app.get("/currentTime", (req, res) => {
    const colorArray = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
        "gray",
        "black",
        "white",
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "rgb(255, 0, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 0, 255)",
        "hsl(0, 100%, 50%)",
        "hsl(120, 100%, 50%)",
        "hsl(240, 100%, 50%)"
    ];
    res.setHeader("content-type", "text/event-stream");
    res.setHeader("cache-control", "no-cache");
    res.setHeader("connection", "keep-alive")
    res.flushHeaders()
    // res.write("data: hello world\n\n")
    // res.write("data: hi\n\n")
    const getRandomColor = () => {
        return colorArray[Math.floor(Math.random() * colorArray.length)]
    }
    const timeInterval = setInterval(() => {
        res.write(`event:date\ndata: ${new Date().toLocaleString()}\n\n`)
        res.write(`event:color\ndata:${getRandomColor()}\n\n`)
    }, 1000);


    res.on("close", () => {
        clearInterval(timeInterval)
        res.end()
    })
})

app.listen(3001, () => {
    console.log("port is running on 3001")
})

