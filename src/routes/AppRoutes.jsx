import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";


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
                    <ProtectedRoute>
                        <ProductList />
                    </ProtectedRoute>   
                }/>
            </Routes>
        </BrowserRouter>
    );
}