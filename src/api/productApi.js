import axiosClient from "./AxiosClient";

export const getAllProducts = async () => {
    const response = await axiosClient.get("/product/get-all");
    console.log("getAllProducts : ",response);
    
    return response.data;
}