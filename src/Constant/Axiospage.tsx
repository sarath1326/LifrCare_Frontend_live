

import axios from "axios" ;

const baseUrl="http://localhost:3001/"

   const instans=axios.create({

    baseURL:baseUrl

   })



   export default instans ;
