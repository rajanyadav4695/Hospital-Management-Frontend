import axios from "axios";
const BASEURL=`http://localhost:9000/v1/api`

export const userAuthLogin=async(payload:any)=>{
    const response=await axios.post(`${BASEURL}/login`,payload);
    return response?.data
   }

   export const userAuthRegister = async (payload: any) => {
    const response = await axios.post(`${BASEURL}/v1/api/register`, payload);
    return response?.data
}

export const userForgetPassService = async (payload: any) => {
    const response = await axios.post(`${BASEURL}/v1/api/forget-password`, payload);
    return response?.data
}