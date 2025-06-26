const express = require("express");
const router = express.Router();
const inviteForms = require("../models/inviteForm");

router.get("/", async (req, res) => {
    try{
        const details = await inviteForms.find().sort({timestamp: 1});

        res.json(details);
    } catch(err) {
        res.status(500).json({error: "Server not working"});
    }
});

module.exports = router;