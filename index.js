const app = require('express')();
const signUp = require('./router/signup');
const mongoConnect = require('./utils/database');

app.use(signUp);

app.get('/',(req,resp)=> {
    resp.send("hello");
});

mongoConnect(() => {
    app.listen(3000,()=> console.log("App server started"));
    
});
