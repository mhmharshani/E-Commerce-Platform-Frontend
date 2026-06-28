import { Card } from "flowbite-react";
 
export default function CategoryCard({category}){
    return(

        <Card key={category.id} className="max-w-sm">
            <div className="flex flex-col items-center pb-10">
                <img
                    alt="Bonnie image"
                    height="96"
                    src="src\assets\icon_category.png"
                    width="96"
                    className="mb-3 rounded-full shadow-lg"
                />
                {/* <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5> */}
                <span className="text-sm text-gray-500 dark:text-gray-400">{category.name}</span>
            </div>
        </Card>

    );
}