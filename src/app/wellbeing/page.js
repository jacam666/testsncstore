import Products from "@/Data/Products";
import CardComponent from "@/components/Cards";
import Image from "next/image";

export default function WellBeing() {
    const WellBeing = Products.filter(product => product.category === "wellBeing");

    return (
        <div className="WellBeing-page">
            <div className="bg-gradient-to-r from-pink-200 to-blue-300 p-6">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 p-6">
                    <div className="shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                        <Image
                            width={500}
                            height={500}
                            src="/images/snc images/CarouselP.C.T.jpg"
                            alt="homepage-image"
                            className="rounded-lg transform hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col items-start text-gray-700 space-y-4">
                        <h1 className="text-5xl lg:text-7xl font-sans font-bold">WellBeing</h1>
                        <div className="bg-black h-1 w-full"></div>
                        <p className="text-xl lg:text-3xl bg-white p-4 rounded-md shadow">
                            Our health products are created to boost immunity, increase testosterone levels, and lower estrogen levels are outstanding and extremely advantageous for general health and well-being.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <CardComponent Products={WellBeing} />
            </div>
        </div>
    );
}