const User = require('./dbcon')
const express = require('express');
const app = express();

app.get('/api/getUser', async (req, res) => {
    try {
        const data =  await User.find({})
        res.send(data)
    }
    catch (error) {
        res.status(404);
    }
})
app.get('/api/getUser/:id', async (req, res) => {
    console.log(req.params.id);
    const data = await User.findById({ _id : req.params.id})
    res.send(data)
   
})

app.post('/api/addUser', async (req, res) => {
    console.log(req.body);
    console.log("hiiiiiiiiiiiiiiiiiiiiii")
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    console.log(user)
    const result = await user.save();
    res.send(result)
})


app.put('/api/updateUser/:id', async(req, res) => {
    const data =  await User.findByIdAndUpdate({_id : req.params.id });
    console.log(data)
    data.firstName =req.body.firstName;
    data.lastName = req.body.lastName;
    const result = await data.save();
    res.send(result);
})

app.delete('/api/deleteUser/:id', async(req,res) => {

    const data = await User.findByIdAndRemove( {_id : req.params.id});
    res.send(data)
})

module.exports = app;
