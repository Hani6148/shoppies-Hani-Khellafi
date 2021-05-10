const db = require("../models")
const express = require("express")
const router = express.Router()


//get nominations

router.get("/api/nominations", (req, res) => {
    db.Nominations.find({})
        .then(response => {
            res.json(response)
        })

        .catch(error => {
            res.json(error)
        })
})
//post nominations
router.post("/api/nominations", (req, res) => {
    db.Nominations.create(req.body)
        .then(response => {
            res.json(response)
        })

        .catch(error => {
            res.json(error)
        })
})

//delete nominations

router.delete("/api/nominations/:id", (req, res) => {
    db.Nominations.findById(req.params.id)
        .then(dbNomination => dbNomination.remove())
        .then(rNomination => res.json(rNomination))
        .catch(err => res.json(err))
})


module.exports = router