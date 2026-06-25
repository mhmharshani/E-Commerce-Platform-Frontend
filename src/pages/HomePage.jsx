import AppNavbar from "../components/Navbar";

function HomePage(){

    return (
        <>
            <div>
                <AppNavbar />
                <h1>This is Home Page</h1>
            </div>
            <h1 className="text-3xl font-bold">
                Hello Tailwind
            </h1>
        </>
    );
}

export default HomePage;