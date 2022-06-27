import axios from 'axios'
const url = 'http://192.168.1.11:5500/api/'
const getAllProducts = async () => {
  const res =  await axios
      .get(url + "product")
      .then(function (response) {
        return response.data.data
      })
      .catch(function (error) {
        return []
      })
      return res
  };
const getProductById = async (id)=>{
    const res =  await axios
    .get(url + "product/" + id)
    .then(function (response) {
      return response.data.data
 
    })
    .catch(function (error) {
      return []
    })
    return res
}

const getProductbyDetail = async (id)=>{
    const res =  await axios
    .get(url + "productDetail/" + id)
    .then(function (response) {
      return response.data.data
  
    })
    .catch(function (error) {
      return []
    })
    return res
  }
  export const ProductService = {
      getAllProducts,
      getProductById,
      getProductbyDetail
  }