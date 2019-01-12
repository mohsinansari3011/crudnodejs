const express = require("express");
const router = express.Router();
const Users = require('../Model/Users');


router.get("/getAllb", () => {
    console.log("get All chal raha hai")
})


router.get("/getAlla", () => {
    console.log("get All chal raha hai")
    Users.find({})
    .then( response => { res.send(response) } )
})

router.get("/getAll", async(req, res)  => {
    try{
        console.log("get All chal raha hai")
        const user = await Users.find({})
          res.send(user);

    }catch(e){
        res.send(500,{ message : e.message});
    }
    
})


// router.get("/get/:id", (req, res) => {
//     console.log("/get/:id chal raha hai", req.params.id)
// })

router.post("/add", async(req, res) => {
    //console.log("add request chal rahi hai");
    try{
    console.log("req.body",req.body);

    const user = new Users(req.body);
    await user.save()
    res.send({ message: "user inserted successfully"})
    
    }
    catch(e){
        res.send(500,{message : e.message});
    }
})

router.post("/update", async(req, res) => {
    //console.log("add request chal rahi hai");
    try{
    console.log("req.body",req.body);

    const user = new Users(req.body);
    await user.save()
    res.send({ message: "user inserted successfully"})
    
    }
    catch(e){
        res.send(500,{message : e.message});
    }
})

module.exports = router;