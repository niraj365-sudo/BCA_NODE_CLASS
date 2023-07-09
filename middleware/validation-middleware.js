const schemaValidation = (schema,renderPage)=>{
    return (req,res,next)=>{
        const body = req.body;
        if(!body){
            next(Error("Request body is required"));
        }
            
        schema.validate(req.body,{abortEarly:false})
            .then((result)=>{
                req.body = result;
                next();
            }).catch(error=>{
                const errors = {}
                error.inner.forEach(err=>{
                  errors[err.path] = err.message;
                })
                res.render(renderPage,{errorMessage:error.message,errors})
            })
    }
}

module.exports = schemaValidation;