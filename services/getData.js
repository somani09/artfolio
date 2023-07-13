import axios from "axios";

function isEmpty(obj) {
    if(obj==undefined)
      return true;
    if (Array.isArray(obj)) {
      return obj.length === 0;
    }
    
    if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length === 0;
    }
    
    return false;
  }

const getData = async (URL, filter) =>{
    try{
        const response = await axios.get(URL);
        const {data, status} = response;
        if (isEmpty(data))
            return {data: null, errors:'empty object received' ,status}
        return {data: filter(data), errors:null ,status }
    }
    catch(errors){
        // console.log("errors.response.status=", errors.response.status)
        return{data: null, errors:errors.message, status:errors.response.status}
    }
}

export {getData}