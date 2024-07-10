const express=require('express')
// load environment file 
require('dotenv').config();

//setup db connection
require('./config/db');
// all api routes avaliable here 
const apiRoutes=require('./routes/api.routes')

const app=express();

app.use(express.json())
// api routes 
app.use('/api',apiRoutes)
const port=process.env.PORT || 3000;
app.listen(port,()=>
{
    console.log(`My server is running at http://localhost:${port}`);
});
