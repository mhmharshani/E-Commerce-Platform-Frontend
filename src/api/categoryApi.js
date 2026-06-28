import axiosClient from "./AxiosClient";

export const getAllCategories = async () => {
    const response = await axiosClient.get("/category/get-all");
    console.log("getAllCategories : ",response);
    
    return response.data;
}