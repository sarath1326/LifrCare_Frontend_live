

import * as Yup from "yup" ;



export const validationSchema=Yup.object({

    patientname:Yup.string().min(3,"* enter more 3 chr").required("* this fild is required"),
    age:Yup.string().min(1,"* enter valid age ").max(2,"* enter valid age").required("* this filed is required"),
    address:Yup.string().required("* this filed is required"),
    mobile:Yup.string().min(10, " * enter valid mobile number").max(10, "* enter valid mobile number").required("* this filed is required"),
    email:Yup.string().required("* this filed is required "),
    bystandername:Yup.string().required("* this filed is required"),
    date:Yup.string().required("* this filed is required "),
    doctername:Yup.string().required("* this filed is required ")


})



