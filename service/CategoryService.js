import axios from 'axios'
const url = 'http://192.168.1.11:5500/api/'
const getAllCate = async () => {
    console.log("getAll")
  const res =  await axios
      .get(url + "category")
      .then(function (response) {
      
        return response.data.data
   
      })
      .catch(function (error) {
        return []
      })
      return res
  };
  const getAllTypes = async () => {
    console.log("getAllType")
    const res =  await axios
        .get(url + "type")
        .then(function (response) {
           
          return response.data.data
     
        })
        .catch(function (error) {
          return []
        })
        return res
    };
 
export const CateService = {
    getAllCate,
    getAllTypes
}