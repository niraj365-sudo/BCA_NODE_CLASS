const yup  = require("yup");


const registrationSchema = yup.object({
    name:yup.string().required(),
    email:yup.string().required(),
    address:yup.string().required(),
    phone:yup.string().required(),
    password:yup.string().required()
})

module.exports = {registrationSchema}