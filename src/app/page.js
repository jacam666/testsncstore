import Image from "next/image";
import { TbSquareNumber1Filled } from "react-icons/tb";
import { TbSquareNumber2Filled } from "react-icons/tb";
import { TbSquareNumber3Filled } from "react-icons/tb";
import { TbSquareNumber4Filled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Home() {
  return (
    <div className="mt-6 ">
      <div className="flex-col">
        <div className="flex flex-col lg:flex-row px-9 ">
          <div className="flex flex-col">
            <div className="flex">
              <h1 className=" text-5xl md:text-4xl sm:text-6xl font-bold my-9 whitespace-nowrap">
                Snc <span className="text-4xl">Supplements</span>
              </h1>
            </div>
            <div className="separator my-4 h-3 sm:h-4 w-4/5 lg:w-3/5 md:w-3/5 "></div>
            <div className="my-3">
              <p className="text-2xl text-gray-500 mt-9">
                SNC Supplements are a range of products designed to help you
                achieve your goals</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:ml-6 lg:py-9">
            <Image
              width={400}
              height={400}
              src="/images/homePageImages/homepage-snc-display-image2.jpg"
              alt="homepage-image"
              className="rounded-3xl my-9  homepage-main-image"
            />
          </div>
        </div>
        <div className="flex flex-col text-center lg:py-9">
          <h1 className="text-3xl font-bold my-8 text-gray-400">WELCOME TO SNC</h1>
          <p className="text-4xl sm:text-6xl font-bold px-2 mx-auto lg:w-2/3">
            Enhance Your Training Experience with High-Quality Products That are Specifically Designed and Tested by Bodybuilders
          </p>
          <div className="flex justify-center m-auto p-9">
            <p className=" text-gray-500 text-2xl sm:text-3xl lg:w-4/5 sm:w-5/6 p-9 ">
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
          alt="homepage-image"
          className="rounded-3xl my-9 w-4/5"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-1 item-container p-9">
        <div className="flex flex-col  mx-2 rounded-xl p-2 bg-white">
          <div className="flex items-center">
            <div className="text-4xl icon-1 "><TbSquareNumber1Filled /></div>
            <h1 className="flex ml-4 font-bold">Proteins</h1>
            <button className="homepage-button flex   rounded-lg px-4 ml-auto mr-4 ">Shop </button>
          </div>
          <div>
            <p className="px-4 py-2">Our exceptionally high-quality, nutritious, and delicious range of proteins offers a wide variety of options to cater to your health and taste preferences.</p>
          </div>
        </div>
        <div className="flex flex-col  mx-2 rounded-xl p-2 bg-white">
          <div className="flex items-center">
            <div className="text-4xl icon-1 "><TbSquareNumber2Filled /></div>
            <h1 className="flex ml-4 font-bold">Pre-workouts</h1>
            <button className="homepage-button flex   rounded-lg px-4 ml-auto mr-4 ">Shop</button>
          </div>
          <div>
            <p className="px-4 py-2">Our pre workouts are blends of nutrients, vitamins, and ingredients to boost energy, focus, and workout performance..</p>
          </div>
        </div>
        <div className="flex flex-col  mx-2 rounded-xl p-2 bg-white">
          <div className="flex items-center">
            <div className="text-4xl icon-1 "><TbSquareNumber3Filled /></div>
            <h1 className="flex ml-4 font-bold">Fat Loss</h1>
            <button className="homepage-button flex   rounded-lg px-4 ml-auto mr-4 ">Shop</button>

          </div>
          <div>
            <p className="px-4 py-2">Our Fat loss supplements can assist people in their weight management endeavors by offering extra support and helping them achieve their fitness objectives.</p>
          </div>
        </div>
        <div className="flex flex-col  mx-2 rounded-xl p-2 bg-white">
          <div className="flex items-center">
            <div className="text-4xl icon-1 "><TbSquareNumber4Filled /></div>
            <h1 className="flex ml-4 font-bold">Wellbeing</h1>
            <button className="homepage-button flex   rounded-lg px-4 ml-auto mr-4 ">Shop</button>

          </div>
          <div>
            <p className="px-4 py-2">Our wellness products naturally boost testosterone levels, enhance vitality, and strengthen immune system against environmental stressors.</p>
          </div>
        </div>
      </div>
      <div className="separator my-5 h-1 w-4/5 mx-auto "></div>
      <h1 className="text-center text-5xl my-9 font-bold px-3">Snc Supplements</h1>

      <div className="flex flex-col sm:flex-row justify-evenly">
        <div className="text-center text-xl">
          <h2 className="my-2 text-4xl">Contact us:</h2>
          <p>Moorings,</p>
          <p>Watling Street,</p>
          <p>Hockliffe,</p>
          <p>Bedfordshire,</p>
          <p>LU7 9nb</p>
          <p>01525 211127</p>
        </div>
        <div className="text-center text-xl mt-5">
          <h1 className="my-2 text-4xl">Socials</h1>
          <div className="flex flex-row justify-evenly mt-4">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          </div>
        </div>
      </div>
      <div className="separator my-9 h-1 w-4/5 mx-auto "></div>
    </div>
  );
}
