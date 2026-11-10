const express = require("express");
const fs = require("fs");

const app = express();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";
const appName = process.env.APP_NAME || "my-node-app";

fs.mkdirSync("/app/logs", { recursive: true });

app.get("/", (req, res) => {
    fs.appendFileSync(
        "/app/logs/activity.log",
        `Request received at ${new Date().toISOString()}\n`
    );

    res.json({
        application: appName,
        environment: env,
        message: "Docker Compose volumes working!"
    });
});

app.get("/health", (req, res) => {
    res.json({ status: "success" });
});

app.listen(port, "0.0.0.0", () => {
    console.log(`${appName} running on port ${port}`);
});