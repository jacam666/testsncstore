import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-6 ">
      <div className="flex-col">
        <div className="flex flex-col lg:flex-row px-9 ">
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="md:text-8xl sm:text-6xl font-bold my-9 whitespace-nowrap">
                Snc <span className="text-4xl">Supplements</span>
              </h1>
            </div>
            <div className="separator my-4 h-4 w-3/5 sm:w-2/5"></div>
            <div className="my-3">
              <p className="text-2xl text-gray-500 mt-9">
                SNC Supplements are a range of products designed to help you
                achieve your goals</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:ml-6 py-9">
            <Image
              width={400}
              height={400}
              src="/images/homePageImages/homepage-snc-display-image2.jpg"
              className="rounded-3xl my-9  homepage-main-image"
            />
          </div>
        </div>
        <div className="flex flex-col text-center py-9">
          <h1 className="text-3xl font-bold my-8 text-gray-400">WELCOME TO SNC</h1>
          <p className="text-6xl font-bold px-2 mx-auto lg:w-2/3">
            Enhance Your Training Experience with High-Quality Products That are Specifically Designed and Tested by Bodybuilders
          </p>
          <div className="flex justify-center m-auto p-9">
            <p className=" text-gray-500 text-3xl lg:w-4/5 sm:w-5/6 p-9 ">
              An extensive range of nutritional supplements, including proteins, pre-workouts, fat burners, and a variety of other products designed to support your health and fitness goals
            </p>
          </div>
        </div>
        <div className="separator  my-4 h-4 w-4/5 m-auto"></div>
      </div>
      <div className="flex justify-center py-9">
            <Image
              width={400}
              height={400}
              src="/images/homePageImages/snc-products_edited.jpg"
              className="rounded-3xl my-9 w-4/5"
            />
          </div>
    </div>
  );
}
