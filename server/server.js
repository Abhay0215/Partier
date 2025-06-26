const express = require('express')
const app = express()

const formRouter = require("./routes/inviteForm")
const port = 5000

app.use(express.json());

app.use("/api/form", formRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
