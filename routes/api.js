const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const cors = require('cors');
//======================================================
const options = {
    origin: 'http://localhost:3000'
}


router.use(cors(options));

//endpoint
router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
});

//endpoint
router.post('/new', bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title, description);

    res.sendStatus(200);
});

//Endpoint
router.delete('/del/:id', (req,res)=>{
     
     posts.deletePost(req.params.id)
res.sendStatus(200);
} 
);

router.post('/edit/:title/:newTitle', (req,res)=>{
    
    posts.editPost(req.params.title, req.params.newTitle)
res.sendStatus(200);
} 
);

module.exports=router;