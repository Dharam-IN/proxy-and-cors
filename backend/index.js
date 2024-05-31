import express from 'express'

const app = express();


app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            description: "Because they make up everything!"
        },
        {
            id: 2,
            title: "What do you call parallel lines that have so much in common?",
            description: "A shame they'll never meet."
        },
        {
            id: 3,
            title: "Why did the scarecrow win an award?",
            description: "Because he was outstanding in his field!"
        },
        {
            id: 4,
            title: "What did one eyebrow say to the other eyebrow?",
            description: "I told my wife she was drawing her eyebrows too high. She looked surprised."
        }
    ];

    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})