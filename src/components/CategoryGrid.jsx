import CategoryCard from "./CategoryCard";

export default function CategoryGrid({categories =[]}){
    return(
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">
                Browse Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                
                {categories.map((category) => (
                    <CategoryCard category={category} />
                ))}
            </div>
        </div>
    );
}