const url = require("url");
const authCheck =()=>{
    
    const publicRoutes = ['/users/login','/users/register']
    return (req,res,next)=>{
        console.log(req.path);
        if(publicRoutes.includes(req.path)){
            next();
        }else{
        if(req.session.user){
            next();
        }else{
        const redirectUrl = url.format({
       pathname:"/users/login",
       query: {
          "errorMessage":"Please Login Before you proceed"
        }
     });
            res.redirect(redirectUrl)
        }
    }
    }
}

module.exports = authCheck;