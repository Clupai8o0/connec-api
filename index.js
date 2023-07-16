const express = require("express");
const cors = require("cors")
const colors = require("colors");

const pingRouter = require("./routers/ping.js");

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use(pingRouter);

app.listen(port, () =>
	console.log(colors.blue(`Server is up on port ${port}`))
);
