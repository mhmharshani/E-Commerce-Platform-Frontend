import axiosClient from "./AxiosClient";

export const getAllProducts = async () => {
    const response = await axiosClient.get("/admin/product/get-all");
    return response.data;
}