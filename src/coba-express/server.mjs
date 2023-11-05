import express from 'express'
import cors from 'cors'
const app = express()

var allowlist = ['http://example1.com', 'http://example2.com', 'http://localhost:5174',
]

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.includes(req.header('Origin'))) {
        console.log('test')
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        console.log('test 2')
        corsOptions = { origin: false } // disable CORS for this request
    }
    console.log(corsOptions)
    callback(null, corsOptions) // callback expects two parameters: error and options
}

// var corsOptions = {
//     origin: 'http://localhost:5174' ,
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.get('/ganteng', cors(corsOptionsDelegate), (req, res) => res.json({ habil: "testingr" }))



app.listen(3000, () => {
    console.log('Server Started!')
})
