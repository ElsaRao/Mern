import express from 'express';
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
let users = [
        { id : 1, userName : "user1", email : "user1@yopmail.com", password : "user1" },
        { id : 2, userName : "user2", email : "user2@yopmail.com", password : "user2" },
        { id : 3, userName : "user3", email : "user3@yopmail.com", password : "user3" },
        { id : 4, userName : "user4", email : "user4@yopmail.com", password : "user4" },
        { id : 5, userName : "user5", email : "user5@yopmail.com", password : "user5" },
        { id : 6, userName : "user6", email : "user6@yopmail.com", password : "user6" },
        { id : 7, userName : "user7", email : "user7@yopmail.com", password : "user7" },
    ]
app.get(`/login`,(req,res) => {
    res.render('pages/login')
})
app.get(`/register`,(req,res) => {
    res.render('pages/register')
})
app.use(express.urlencoded({extended:false}));
app.post('/postform',(req,res) => {
    if (req){
        const user = users.find(({name}) => name == req.body.name);
        if (user.name == req.body.name && user.email == req.body.email && user.password == req.body.password){
        // res.send(`hello ${user.userName}`);
        res.render('pages/user',{
        "user" : user,
        })
            }
            
        else{
            res.send("invalid username, email or password")
        }
        res.end();
    }
})

app.listen(port)
        // const user = users.find(({userName}) => userName == req.body.userName);
        // if (user.userName == req.body.userName && user.email == req.body.email && user.password == req.body.password){
        //     res.send(`hello ${userName}`);
        // }
        // else{
        //     res.send("invalid username, email or password")
        // }