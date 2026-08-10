import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import DashboardPage from "../pages/DashboardPage";
import CreateProductPage from "../pages/CreateProductPage";


export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <HomePage />
                }/>
                <Route path="/dashboard" element={
                    <ProtectedRoute allowedRole="ADMIN">
                        <DashboardPage />
                    </ProtectedRoute>
                }/>
                <Route path="/login" element={
                    <LoginPage /> 
                }/>
                <Route path="/product" element={
                    <ProductPage />  
                }/>
                <Route path="/dashboard/create-product" element={
                    <CreateProductPage/>  
                }/>
                <Route path="/cart" element={
                    <ProtectedRoute>
                        <CartPage />
                    </ProtectedRoute>
                }/>
            </Routes>
        </BrowserRouter>
    );
}