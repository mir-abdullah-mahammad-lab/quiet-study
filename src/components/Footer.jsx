import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold">
              Quiet<span className="text-gray-400">-Study</span>
            </h2>

            <p className="mt-4 text-gray-300 text-sm leading-6">
              Find your perfect study space, book instantly,
              and stay focused without interruptions.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Useful Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/rooms" className="hover:text-white transition">
                  Rooms
                </Link>
              </li>

              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📧 support@quietstudy.com</li>
              <li>📞 +880 1234-567890</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Quiet-Study. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;