const superagent = require('superagent')
require('dotenv').config()

const getNewsByKeyword = async (req, res) => {
    try {
        const search = req.query.search
        const sinceDate = req.query.sinceDate
        var url = `https://newsapi.org/v2/everything?q=${search}&from=${sinceDate}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
        superagent
            .get(url)
            .set('accept', 'application/json')
            .then(resul => {
                res.send(resul)
            }).catch(err => {
                console.log(err)
            });
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getNewsByKeyword
}