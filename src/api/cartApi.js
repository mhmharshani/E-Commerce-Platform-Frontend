import axiosClient from "./AxiosClient";

export const getCartItems = async () => {
    const response = await axiosClient.get("/cart");
    console.log("getCartItems : ",response);
    
    return response.data;
}

export const addCartItem = async (request) => {
    try {
        const response = await axiosClient.post("/cart", request);

        console.log("addCartItem:", response);
        return response.data;

    } catch (error) {
        console.error("Error adding cart item:", error);
        throw error;
    }
}
