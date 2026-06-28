import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";


export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <HomePage />
                }/>
                <Route path="/login" element={
                    <LoginPage /> 
                }/>
                <Route path="/product" element={
                    <ProductPage />  
                }/>
                {/* <Route path="/cart" element={
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                }/> */}
            </Routes>
        </BrowserRouter>
    );
}