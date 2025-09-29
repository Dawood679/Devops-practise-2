import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = client.user.create({
    data: {
      username,
      password,
    },
  });

  res.send({ message: "user created suucefully", id: user });
});

app.listen(3002, () => console.log("app is lisntinng"));
