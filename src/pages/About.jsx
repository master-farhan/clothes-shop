import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            fugiat! Natus, iure alias animi et ipsum eum reprehenderit odio
            quasi beatae dolorem soluta, ratione quia illum suscipit ad veniam
            necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Optio distinctio voluptates reiciendis dolor delectus cumque
            ex at cum laboriosam facere, doloribus sit sequi. Numquam enim, eum
            sunt nostrum voluptatum possimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sit
            dolor adipisci natus quam quos dolorem obcaecati saepe debitis
            fugiat libero error velit quas quisquam optio autem? Eum, placeat
            ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Deleniti est dolor nihil molestias earum repellendus totam harum.
            Expedita autem iste, itaque natus adipisci ullam recusandae fuga?
            Odio perferendis fugit quo! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Cumque saepe, labore quasi ab earum illo
            reprehenderit laudantium nam suscipit, laborum aliquam
            necessitatibus odio nulla deserunt esse explicabo excepturi porro
            exercitationem?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            culpa voluptatem laborum dicta facere voluptas minus, odio
            necessitatibus quasi enim cum similique at repellendus provident
            omnis ex! Laudantium, dolorem soluta?
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos?
            Dolor temporibus a alias dicta placeat, 
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos?
            Dolor temporibus
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customar Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos?
            Dolor
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
