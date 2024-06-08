import Image from "next/image";

export default function FatLoss() {
    return (
        <div>
            <div className="bg-yellow-50 mx-4 p-6">
                <div className="flex flex-col xl:flex-row sm:px-4 py-6">
                    <Image
                        width={500}
                        height={500}
                        src="/images/protein-images/CarouselOnlyWheyPromotion.jpg"
                        alt="homepage-image"
                        className=" mx-auto md:w-3/4 lg:w-1/2 xl:w-2/4 my-auto rounded-lg"
                    />
                    <div className="flex flex-col xl:ml-8 mt-6 xl:mt-0 w-full">
                        <h1 className=" text-5xl lg:text-6xl text-gray-700 font-sans font-bold text-center xl:text-left xl:ml-9 mb-3">Proteins</h1>
                        <div className=" bg-black my-4 h-1 w-4/5 mx-auto xl:h-0 "></div>
                        <p className="my-auto sm:p-10 text-2xl text-center p-2 sm:text-4xl bg-white sm:m-9 text-gray-600 mt-3">Snc proteins offer a fantastic combination of great taste, exceptional performance benefits, and outstanding nutritional value.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}