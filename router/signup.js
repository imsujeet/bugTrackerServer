const express=require('express');

const router = express.Router();

router.post('/signupAdmin',(req,res)=> {
    console.log(req.body);
})

module.exports = router;
