const express = require(`express`)
const app = express()
const PORT = 8000

let routes = [
    {prefix: `/user`, route: require(`./routes/user`)}
]

for (let i = 0; i < routes.length; i++) {
    app.use(routes[i].prefix, routes[i].route)
    
}

app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
})