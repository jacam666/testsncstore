import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className="flex flex-col sm:flex-row justify-evenly mb-9">
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
                <div className="flex flex-row justify-evenly mt-10 my-auto lg:justify-between text-2xl">
                    <FaFacebookF className="text-blue-500" />
                    <FaInstagram className="text-red-800" />
                    <FaXTwitter />
                </div>
            </div>
        </div>
    )
}