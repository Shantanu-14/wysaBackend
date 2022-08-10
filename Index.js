const Express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const router = Express.Router();

const app = Express();
app.use(cors());


const PORT  = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Check out http://localhost:${PORT}`);
}).on("error", (err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Wysa Backend Server");
})

app.get("/getThemes",(req,res)=>{
    const themes = [
        {
            id: 1,
            name: "Theme 1",
            description: "This is theme 1",
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 1,
            name: "Theme 1",
            description: "This is theme 1",
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 1,
            name: "Theme 1",
            description: "This is theme 1",
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
    ]
    res.status(200).send(themes);
})



