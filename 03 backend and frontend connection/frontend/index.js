const urlData = async () => {
    const data = await fetch("http://localhost:8000/jsondata")
    const jsonData = await data.json()
    return console.log(jsonData)
}

urlData()