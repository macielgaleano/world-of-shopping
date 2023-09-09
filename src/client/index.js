import axios from "axios"
import { BASE_URL } from "../constants/client";
import { groupProductsByCategory } from "./dtos";

export const getProductList = async () => {
  const LOG_MESSAGE = 'GET PRODUCT LIST';

  try {
    console.info(LOG_MESSAGE);

    const { data } = await axios.get(BASE_URL);

    return groupProductsByCategory(data);
  } catch (error) {
    console.error(LOG_MESSAGE, error);
    throw error;
  }
}

export const getProductByID = async (id) => {
  const LOG_MESSAGE = 'GET PRODUCT BY ID';

  try {
    console.info(LOG_MESSAGE);

    const { data } = await axios.get(`${BASE_URL}/${id}`);

    return data;
  } catch (error) {
    console.error(LOG_MESSAGE, error);
    throw error;
  }
}