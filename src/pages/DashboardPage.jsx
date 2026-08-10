import { useNavigate } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import AppNavbar from "../components/Navbar";
import { Button, ButtonGroup } from "flowbite-react";

export default function DashboardPage(){

    const navigate = useNavigate();

    const createProduct = () => {
        navigate("/dashboard/create-product"); 
    };

    return (
        <div>
            <AppNavbar />

            <ButtonGroup>
                <Button color="alternative" onClick={createProduct}>
                    Create New Product
                </Button>
                <Button color="alternative">Create Role</Button>
            </ButtonGroup>

            <FooterSection />
            
        </div>
    );

}
