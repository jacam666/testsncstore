import Image from "next/image";
import { TbSquareNumber1Filled } from "react-icons/tb";
import { TbSquareNumber2Filled } from "react-icons/tb";
import { TbSquareNumber3Filled } from "react-icons/tb";
import { TbSquareNumber4Filled } from "react-icons/tb";
import Link from "next/link";



export default function Home() {
  return (
    <div className=" ">
      {/* <Image
        width={200}
        height={200}
        src="/logo/Logo__3_-removebg-preview.png"
        alt="homepage-image"
        className="mx-auto"
      /> */}
      <div className="flex-col">
        <div className="flex flex-col lg:flex-row px-9 xl:w-full ">
          <div className="flex flex-col">
            <div className="flex">
              <h1 className=" text-5xl xl:text-8xl md:text-4xl sm:text-6xl font-bold text-[#007BFF]  whitespace-nowrap">
                Snc <span className="text-4xl xl:text-5xl">Supplements</span>
              </h1>
            </div>
            <div className=" my-4 h-2 sm:h-2 w-2/5 lg:w-2/5 md:w-2/5 bg-[#FFC107] "></div>
            <div className="my-3">
              <p className="text-2xl text-gray-800 mt-9">
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
              className="rounded-3xl my-9  homepage-main-image  xl:mr-0"
            />
          </div>
        </div>
        <div className="flex flex-col text-center lg:py-9 bg-[#FFC107] text-gray-800">
          <h1 className="text-3xl font-bold my-8 text-gray-800">WELCOME TO SNC</h1>
          <p className="text-4xl sm:text-6xl font-bold px-2 mx-auto lg:w-2/3">
            Enhance Your Training Experience with High-Quality Products That are Specifically Designed and Tested by Bodybuilders
          </p>
          <div className="flex justify-center m-auto p-9">
            <p className=" text-gray-800 text-2xl sm:text-3xl lg:w-4/5 sm:w-5/6 p-9 ">
              An extensive range of nutritional supplements, including proteins, pre-workouts, fat burners, and a variety of other products designed to support your health and fitness goals
            </p>
          </div>
        </div>
        {/* <div className="separator  my-4 h-2 w-4/5 m-auto"></div> */}
      </div>
      <div className="flex justify-center py-9 bg-[#F5F5F5]">
        <Image
          width={400}
          height={400}
          src="/images/homePageImages/snc-products_edited.jpg"
          alt="homepage-image"
          className="rounded-3xl my-9 w-4/5"
        />
      </div> 
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-1 item-container p-9">
        {[
          { icon: <TbSquareNumber1Filled />, title: "Proteins", link: "/protein", description: "Our exceptionally high-quality, nutritious, and delicious range of proteins offers a wide variety of options to cater to your health and taste preferences." },
          { icon: <TbSquareNumber2Filled />, title: "Pre-workouts", link: "/pre-workout", description: "Our pre workouts are blends of nutrients, vitamins, and ingredients to boost energy, focus, and workout performance." },
          { icon: <TbSquareNumber3Filled />, title: "Fat Loss", link: "/FatLoss", description: "Our Fat loss supplements can assist people in their weight management endeavors by offering extra support and helping them achieve their fitness objectives." },
          { icon: <TbSquareNumber4Filled />, title: "Wellbeing", link: "/wellbeing", description: "Our wellness products naturally boost testosterone levels, enhance vitality, and strengthen immune system against environmental stressors." }
        ].map((item, index) => (
          <div key={index} className="flex flex-col mx-2 rounded-xl p-2 bg-white shadow-lg">
            <div className="flex items-center">
              <div className="text-4xl text-[#007BFF]">{item.icon}</div>
              <h1 className="flex ml-4 font-bold">{item.title}</h1>
              <Link href={item.link} className=" flex rounded-lg px-4 ml-auto mr-4 bg-[#FF5722] text-white hover:bg-[#FFC107]">
                <button>Shop</button>
              </Link>
            </div>
            <div>
              <p className="px-4 py-2 text-[#666666]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// export default function Home() {
//   return (
//     <div className="mt-6 ">
//       <Image
//         width={200}
//         height={200}
//         src="/logo/Logo__3_-removebg-preview.png"
//         alt="homepage-image"
//         className="mx-auto"
//       />
//       <div className="flex-col">
//         <div className="flex flex-col lg:flex-row px-9 ">
//           <div className="flex flex-col">
//             <div className="flex">
//               <h1 className=" text-5xl md:text-4xl sm:text-6xl font-bold my-9  whitespace-nowrap">
//                 Snc <span className="text-4xl">Supplements</span>
//               </h1>
//             </div>
//             <div className="separator my-4 h-2 sm:h-2 w-2/5 lg:w-2/5 md:w-2/5 "></div>
//             <div className="my-3">
//               <p className="text-2xl text-gray-500 mt-9">
//                 SNC Supplements are a range of products designed to help you
//                 achieve your goals</p>
//             </div>
//           </div>
//           <div className="flex justify-center lg:justify-end lg:ml-6 lg:py-9">
//             <Image
//               width={400}
//               height={400}
//               src="/images/homePageImages/homepage-snc-display-image2.jpg"
//               alt="homepage-image"
//               className="rounded-3xl my-9  homepage-main-image"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col text-center lg:py-9 bg-yellow-50">
//           <h1 className="text-3xl font-bold my-8 text-gray-400">WELCOME TO SNC</h1>
//           <p className="text-4xl sm:text-6xl font-bold px-2 mx-auto lg:w-2/3">
//             Enhance Your Training Experience with High-Quality Products That are Specifically Designed and Tested by Bodybuilders
//           </p>
//           <div className="flex justify-center m-auto p-9">
//             <p className=" text-gray-500 text-2xl sm:text-3xl lg:w-4/5 sm:w-5/6 p-9 ">
//               An extensive range of nutritional supplements, including proteins, pre-workouts, fat burners, and a variety of other products designed to support your health and fitness goals
//             </p>
//           </div>
//         </div>
//         {/* <div className="separator  my-4 h-2 w-4/5 m-auto"></div> */}
//       </div>
//       <div className="flex justify-center py-9">
//         <Image
//           width={400}
//           height={400}
//           src="/images/homePageImages/snc-products_edited.jpg"
//           alt="homepage-image"
//           className="rounded-3xl my-9 w-4/5"
//         />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-1 item-container p-9">
//         <div className="flex flex-col  mx-2 rounded-xl p-2 bg-white">
//           <div className="flex items-center">
//             <div className="text-4xl icon-1 "><TbSquareNumber1Filled /></div>
//             <h1 className="flex ml-4 font-bold">Proteins</h1>
//             <Link href="/protein" className="homepage-button flex rounded-lg px-4 ml-auto mr-4 ">
//             <button>Shop</button>
//             </Link>
//           </div>
//           <div>
//             <p className="px-4 py-2">Our exceptionally high-quality, nutritious, and delicious range of proteins offers a wide variety of options to cater to your health and taste preferences.</p>
//           </div>
//         </div>
//         <div className="flex flex-col  mx-2 rounded-xl p-2 bg-white">
//           <div className="flex items-center">
//             <div className="text-4xl icon-1 "><TbSquareNumber2Filled /></div>
//             <h1 className="flex ml-4 font-bold">Pre-workouts</h1>
//             <Link href="/pre-workout" className="homepage-button flex rounded-lg px-4 ml-auto mr-4 ">
//             <button>Shop</button>
//             </Link>
//           </div>
//           <div>
//             <p className="px-4 py-2">Our pre workouts are blends of nutrients, vitamins, and ingredients to boost energy, focus, and workout performance..</p>
//           </div>
//         </div>
//         <div className="flex flex-col  mx-2 rounded-xl p-2 bg-white">
//           <div className="flex items-center">
//             <div className="text-4xl icon-1 "><TbSquareNumber3Filled /></div>
//             <h1 className="flex ml-4 font-bold">Fat Loss</h1>
//             <Link href="/FatLoss" className="homepage-button flex rounded-lg px-4 ml-auto mr-4 ">
//             <button>Shop</button>
//             </Link>
//           </div>
//           <div>
//             <p className="px-4 py-2">Our Fat loss supplements can assist people in their weight management endeavors by offering extra support and helping them achieve their fitness objectives.</p>
//           </div>
//         </div>
//         <div className="flex flex-col  mx-2 rounded-xl p-2 bg-white">
//           <div className="flex items-center">
//             <div className="text-4xl icon-1 "><TbSquareNumber4Filled /></div>
//             <h1 className="flex ml-4 font-bold">Wellbeing</h1>
//             <Link href="/wellbeing" className="homepage-button flex rounded-lg px-4 ml-auto mr-4 ">
//             <button>Shop</button>
//             </Link>
//           </div>
//           <div>
//             <p className="px-4 py-2">Our wellness products naturally boost testosterone levels, enhance vitality, and strengthen immune system against environmental stressors.</p>
//           </div>
//         </div>
//       </div>
//       {/* <div className="separator my-5 h-2 w-4/5 mx-auto "></div> */}
//       {/* <div className="separator my-9 h-2 w-4/5 mx-auto "></div> */}
//     </div>
//   );
// }
