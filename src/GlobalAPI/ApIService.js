import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.in'

export const fetchProducts = async (category) => {
  try {
    const url = category ? `${BASE_URL}/api/products/category?type=${category}`
    : `${BASE_URL}/api/products`
    const response = await axios.get(url)
    return response.data.products
  } catch (error) {
    console.error(error)
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products/${id}`)
    return response.data.product;
  } catch (error) {
    console.error(error)
  }
}
