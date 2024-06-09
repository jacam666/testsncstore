import Products from "@/Data/Products";
import CardComponent from "@/components/Cards";
import Image from "next/image";

export default function Protein() {
    const Protein = Products.filter(product => product.category === "protein");

    return (
        <div>
            <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-200 p-6">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 p-6">
                    <div className="shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                        <Image
                            width={500}
                            height={500}
                            src="/images/protein-images/CarouselOnlyWheyPromotion.jpg"
                            alt="homepage-image"
                            className="rounded-lg transform hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col items-start text-gray-700 space-y-4">
                        <h1 className="text-5xl lg:text-7xl font-sans font-bold">Proteins</h1>
                        <div className="bg-black h-1 w-full"></div>
                        <p className="text-xl lg:text-3xl bg-white p-4 rounded-md shadow">
                            Discover the perfect blend of flavor and nutrition with Snc proteins.
                            Experience the superior taste, enhanced performance, and exceptional
                            nutritional value that sets our proteins apart.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <CardComponent Products={Protein} />
            </div>
        </div>
    );
}