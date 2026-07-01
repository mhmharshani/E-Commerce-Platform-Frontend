import axiosClient from "./AxiosClient";

export const getCartItems = async () => {
    const response = await axiosClient.get("/cart/get-all");
    console.log("getCartItems : ",response);
    
    return response.data;
}

export const addToCart = async (productId, quantity) => {
    const response = await axiosClient.post("/cart/", { productId, quantity });
    console.log("addToCart : ",response);
    
    return response.data;
}
