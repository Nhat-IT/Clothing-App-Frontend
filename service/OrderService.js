import axios from 'axios'
const url = 'http://192.168.1.11:5500/api/'
const getMyorder = async (token) => {
 console.log(token)
  const res =  await axios
      .get(url + "order",{headers : {"auth-token" : token}})
      .then(function (response) {
        console.log("response",response.status)
       if(response.status == 200){
        return response.data.data
       }else return []
      })
      .catch(function (error) {
     
        return []
      })
      return res
  };

export const OrderService = {
    getMyorder
}