import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          {/* <img src={assets.logo} className="mb-5 w-32" alt="" /> */}
          <h3 className="text-2xl text-shadow text-gray-950 font-sm uppercase pb-5">
            DripNest
          </h3>
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad
            delectus error at assumenda adipisci, alias ab optio? Architecto ea
            iusto ipsa, sint quis eos.umenda adipisci, alias ab optio?
            Architecto ea iusto ipsa, sint quis eos. alias ab optio? Architecto
            ea iusto ipsa, sint quis eos.umenda adipisci, alias ab optio?
            Architecto ea iusto ipsa, sint quis eos.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5 "> GET IN TOUCH </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+880 1309 318471</li>
            <li>mdfarhansadik76@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="">
        <hr className="text-gray-400" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ for mygadget.com - All Right Reserved .
        </p>
      </div>
    </div>
  );
};

export default Footer;
