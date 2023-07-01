import axios from "axios";

const getData = async (URL, filter) =>{
    try{
        const response = await axios.get(URL);
        const {data, status} = response
        return {data: filter(data), errors:null ,status }
    }
    catch(errors){
        return{data: null, errors:errors.response.data.errors, status:errors.response.status}
    }
}

export {getData}