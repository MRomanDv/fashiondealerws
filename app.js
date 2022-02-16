const express = require('express')
const app = express() 
const dotenv = require('dotenv').config({path:'./env/.env'}) 
const path = require('path')
const bcryptjs = require('bcryptjs')
const connection = require('./database/db')

//GET DATA
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//view engine 
app.set('view engine', 'ejs')

//static files
app.use('/static',express.static('public'))
app.use('/static', express.static(__dirname + 'public'))

//Variables de session
const session = require('express-session')
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
})) 

//ROUTES
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/stores',(req,res)=>{
    res.render('stores')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

//SIGNUP DATA
app.post('/signup',async(req,res)=>{
    const{name,lastname,user,pass,email} = req.body
    
    //HASH PASSWORD
    let hashedPassword =await  bcryptjs.hash(pass,8)
    
    connection.query('INSERT INTO fashion_dealer_users SET ?',{name_:name,lastname:lastname,user_:user,pass:hashedPassword,email:email},async (error,result)=>{
          if(error) {
              console.log(error)
          }else {
              res.render('signup',{
                alert:true,
                alertTitle:"Registration",
                alertMessage:"¡Successful Registration!",
                alertIcon:"success",
                showConfirmButton:false,
                timer:1500,
                ruta:''

              })
          }
    })
    
})

//CONTACT US DATA
app.post('/contactus',(req,res)=>{
    const {name,lastname,email,tel,msg} = req.body;
    connection.query('INSERT INTO fashiondealer_contact SET ?',{name_:name,lastname:lastname,email:email,tel:tel,message:msg}, async(error,result)=>{
       if(error) {
           console.log(error)
       }else {
           res.render('contact',{
            alert:true,
            alertTitle:"Contact us",
            alertMessage:"¡Thank you for your feedback!",
            alertIcon:"success",
            showConfirmButton:false,
            timer:1500,
            ruta:'/contact'

           })
       }
    })
})

//LOGIN AUTH
app.post('/login',async(req,res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
 
    let passwordHash = await bcryptjs.hash(pass,8)
    if(user && pass){
        connection.query('SELECT * FROM fashion_dealer_users WHERE user_ = ?', [user], async (error,results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(pass,results[0].pass))){
                res.render('login',{
                    alert:true,
                    alertTitle:"Error",
                    alertMessage:"invalid User/password",
                    alertIcon:"error",
                    showConfirmButton:true,
                    timer:false,
                    ruta:'login' 
                })
            }else {
                req.session.loggedin = true;
                req.session.name = results[0].name
             res.render('login',{
                 alert:true,
                 alertTitle:"Successful log in",
                 alertMessage:"¡WELCOME TO FASHION DEALER!",
                 alertIcon:"success",
                 showConfirmButton:false,
                 timer:1500,
                 ruta:'' 
             })
 
            }
        })
 
    }else {
       res.render('login',{
         alert:true,
         alertTitle:"Advertencia",
         alertMessage:"Porfavor ingrese un Usuario y password",
         alertIcon:"warning",
         showConfirmButton:true,
         timer:false,
         ruta:'login'
       })
    }
 })
 

//port 
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server active on port ' + port)
})