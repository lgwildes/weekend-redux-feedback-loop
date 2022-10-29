const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {

    const feedback = req.body
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`
    const sqlParams = [
        feedback.feeling,
        feedback.understanding,
        feedback.support,
        feedback.comments
    ]

        pool.query(sqlText, sqlParams)
            .then((databaseResponse) => {
                console.log(`POST feedback complete`)
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log('Error in feedback.router ', error);
                res.sendStatus(500)
            })
})


module.exports = router;