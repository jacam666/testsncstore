import Products from "@/Data/Products";
import CardComponent from "@/components/Cards";
import Image from "next/image";

export default function FatLoss() {
    const FatLoss = Products.filter(product => product.category === "fatBurners");

    return (
        <div className="fatLoss-page">
            <div className="bg-gradient-to-r from-yellow-100 to-red-300 p-6">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 p-6">
                    <div className="shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                        <Image
                            width={500}
                            height={500}
                            src="/images/snc images/STAGE-RIPPED-NO-HUNGER-300x300.png"
                            alt="homepage-image"
                            className="rounded-lg transform hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col items-start text-gray-700 space-y-4">
                        <h1 className="text-5xl lg:text-7xl font-sans font-bold">Fat Burners</h1>
                        <div className="bg-black h-1 w-full"></div>
                        <p className="text-xl lg:text-3xl bg-white p-4 rounded-md shadow">
                        Our effective fat loss supplements are designed to help individuals achieve their weight loss goals by boosting metabolism, suppressing appetite, and enhancing fat burning processes.                        </p>
                    </div>
                </div>
            </div>
            <div>
                <CardComponent Products={FatLoss}/>
            </div>
        </div>
    );
}