import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("Somebody is trying to go home.");

app.get("/", handleHome);

const handelListening = () => console.log(`✔ Server listening on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handelListening)