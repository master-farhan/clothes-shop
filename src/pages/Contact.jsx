import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54903 Willms Station <br /> Suite 350, Washington
          </p>
          <p className="text-gray-500">
            Tel: (415) 888-9480 <br /> Email: admin@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Threadzone
          </p>
          <p className="text-gray-500">
            Learn more our teem about job openings.
          </p>
          <button className="border border-black py-4 px-8 text-sm hover:bg-black hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
