import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

import qrCode from '@/assets/Footer/Qrcode 1.png';
import frame from '@/assets/Footer/Frame 718.png';
import facebook from '@/assets/Footer/Icon-Facebook.svg';
import linkedIn from '@/assets/Footer/Icon-Linkedin.svg';
import twitter from '@/assets/Footer/Icon-Twitter.svg';
import instagram from '@/assets/Footer/icon-instagram.svg';
import send from '@/assets/Footer/icon-send.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-[1170px] px-4 2xl:px-0   mx-auto pt-20 pb-32  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Subscribe Section */}
        <div>
          <h3 className="text-xl  mb-4">Exclusive</h3>
          <p className="mt-[48px] mb-6">Subscribe</p>
          <p className="mb-4 text-sm ">Get 10% off your first order</p>
          <div className="flex items-center border border-primaryLight rounded relative">
            {' '}
            {/* Added relative here */}
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 text-sm py-3 pl-4"
            />
            <button className="ml-2 absolute top-1/2 transform -translate-y-1/2 right-3">
              <Image
                src={send}
                width={16}
                height={16}
                alt="Send icon"
                className="w-4 h-4 "
              />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg mb-6">Support</h3>
          <div className="space-y-4">
            <p className="text-sm ">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm  mt-2">exclusive@gmail.com</p>
            <p className="text-sm  mt-2">+88015-88888-9999</p>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg mb-6">Account</h3>
          <ul className="space-y-4 text-sm ">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg  mb-6">Quick Link</h3>
          <ul className="space-y-4 text-sm ">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg mb-6">Download App</h3>
          <p className="text-sm  mb-2">Save $3 with App New User Only</p>
          <div className="flex items-center gap-2 mb-6">
            <Image src={qrCode} alt="QR Code" className="w-16 h-16" />
            <Image src={frame} alt="Google Play" className="w-24" />
            {/* <img src="/app-store.png" alt="App Store" className="w-24" /> */}
            {/* <div className="flex flex-col space-y-2">
            </div> */}
          </div>
          <div className="flex space-x-4 text-white">
            <Image src={facebook} width={24} height={24} alt="facebook" />
            <Image src={twitter} width={24} height={24} alt="facebook" />
            <Image src={linkedIn} width={24} height={24} alt="facebook" />
            <Image src={instagram} width={24} height={24} alt="facebook" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-primaryDark border-gray-800 mt-12 pt-6 text-sm text-center ">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
