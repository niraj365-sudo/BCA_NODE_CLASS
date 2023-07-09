const schemaValidation = (schema,renderPage)=>{
    return (req,res,next)=>{
        const body = req.body;
        if(!body){
            next(Error("Request body is required"));
        }
            
        schema.validate(req.body,{abortEarly:true})
            .then((result)=>{
                req.body = result;
                next();
            }).catch(error=>{
                res.render(renderPage,{errorMessage:error.message})
            })
    }
}

module.exports = schemaValidation;