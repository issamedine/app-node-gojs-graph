const Data = require("../models/Event-model-data");

module.exports = listController = {

    listData: async (req, res) => {
        console.log('req.body', req.body)
        try {
            req.body.payload.map(el => {

                let newData = new Data({
                    text: el.text,
                    color: el.color,
                    loc: el.loc
                });

                newData.save()
            })

            res.send("Data saved with sucess")
        } catch (err) {
            res.status(500).send("Server error !!!");
        }
    }
}

   