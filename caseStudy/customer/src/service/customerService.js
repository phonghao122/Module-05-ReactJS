import axios from "axios";

const URL = "http://localhost:3000/customers";

export const getAllCustomers = async () => {
    const response = await axios.get(URL);
    return response.data;
};

export const findById = async (id) => {
    const response = await axios.get(
        `${URL}/${id}`
    );
    return response.data;
};

export const addCustomer = async (customer) => {
    await axios.post(URL, customer);
};

export const updateCustomer = async (id, customer) => {
    await axios.put(
        `${URL}/${id}`,
        customer
    );
};

export const deleteCustomer = async (id) => {
    await axios.delete(
        `${URL}/${id}`
    );
};