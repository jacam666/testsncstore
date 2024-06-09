import Products from "@/Data/Products";
import CardComponent from "@/components/Cards";
import Image from "next/image";

export default function PreWorkout() {
    const PreWorkout = Products.filter(product => product.category === "preWorkout");

    return (
        <div className="pre-workout-page">
            <div className="bg-gradient-to-r from-green-100 via-red-50 to-purple-200 p-6">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 p-6">
                    <div className="shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                        <Image
                            width={500}
                            height={500}
                            src="/images/snc images/WhatsApp Image 2023-05-26 at 12.15.23.jpg"
                            alt="homepage-image"
                            className="rounded-lg transform hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col items-start text-gray-700 space-y-4">
                        <h1 className="text-5xl lg:text-7xl font-sans font-bold">Pre-Workouts</h1>
                        <div className="bg-black h-1 w-full"></div>
                        <p className="text-xl lg:text-3xl bg-white p-4 rounded-md shadow">
                        The effectiveness of our pre workouts is truly remarkable and sets them apart as excellent options for boosting your energy levels before workouts.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <CardComponent Products={PreWorkout} buttonColor="yellow" />
            </div>
        </div>
    );
}