const express = require("express");
const colors = require("colors");

const pingRouter = require("./routers/ping.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(pingRouter);

app.listen(port, () =>
	console.log(colors.blue(`Server is up on port ${port}`))
);
