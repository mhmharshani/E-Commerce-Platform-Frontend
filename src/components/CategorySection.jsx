import useCategories from "../custom-hooks/useCategories";
import CategoryGrid from "./CategoryGrid";

export default function CategorySection() {

    const { categories, loading, error } = useCategories();
    console.log("Categories : ", categories);
    

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <section className="py-10">
            {/* <h2 className="text-2xl font-bold mb-6">
                Shop by Category
            </h2> */}

            <CategoryGrid categories={categories} />
        </section>
    );
}