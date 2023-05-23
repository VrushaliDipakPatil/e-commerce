import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

import { logoLight, paymentLogo } from "../assets/index";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">© ReactBD.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Chandrapur, Maharashtra, India </p>
            <p>Mobile: 07172 258966</p>
            <p>Phone: 9852174635</p>
            <p>e-mail: bazar@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            my account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPaypal />
            </span>
            checkout
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaHome />
            </span>
            order tracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <MdLocationOn />
            </span>
            help & support
          </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
            <input className="bg-transparent border px-4 py-2 text-sm border-b-0"
            placeholder="e-mail"
            type="text"/>
            <button className="text-sm border text-white   hover:bg-gray-900
            active:bg-white active:text-black">
                Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
