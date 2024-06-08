import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className="flex flex-col sm:flex-row justify-evenly mb-9 bg-[#f5f5f5] p-6 rounded-lg shadow-lg">
            <div className="text-center text-xl text-gray-800">
                <h2 className="my-2 text-4xl font-bold text-[#007BFF]">Contact us:</h2>
                <p>Moorings,</p>
                <p>Watling Street,</p>
                <p>Hockliffe,</p>
                <p>Bedfordshire,</p>
                <p>LU7 9nb</p>
                <p>01525 211127</p>
            </div>
            <div className="text-center text-xl mt-5 text-gray-800">
                <h1 className="my-2 text-4xl">Socials</h1>
                <div className="flex flex-row justify-evenly mt-10 my-auto lg:justify-between text-2xl">
                    <a href="https://facebook.com/uksnc" aria-label="Facebook" className="hover:text-[#007BFF]">
                        <FaFacebookF className="text-blue-600 hover:text-[#007BFF]" />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" className="hover:text-[#FF5722]">
                        <FaInstagram className="text-pink-600 hover:text-[#FF5722]" />
                    </a>
                    <a href="https://twitter.com/SNC52678131" aria-label="Twitter" className="hover:text-[#1DA1F2]">
                        <FaXTwitter className="text-blue-400 hover:text-[#1DA1F2]" />
                    </a>
                </div>
            </div>
        </div>
    )
}