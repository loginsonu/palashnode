var Db  = require('./dboperations');
var Product = require('./tblPalashProduct');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

app.get("/",function(req,res){
   res.send("Working!!!")
})


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/products').get((request,response)=>{

    dboperations.getProducts().then(result => {
       response.json({'Products': result[0]});
    })

})

 var port = process.env.PORT || 5000;
app.listen(port);
console.log('Order API is runnning at ' + port);


