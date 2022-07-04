import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
// Data imported
import { DATA } from "../data/data";

const UserProfile = () => {
  return (
    <>
      {DATA.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-full h-full px-9 md:px-20 py-5 md:py-10 "
        >
          <div className="mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold ">
              {item.heading}
            </h2>
            <h4 className="text-sm md:text-base text-gray-500 font-bold flex items-center gap-2 ">
              {item.subHeadeing} <AiOutlineQuestionCircle />
            </h4>
          </div>
          <div className="flex md:gap-3 pr-18 flex-col md:flex-row ">
            <div className="left h-[30rem]  md:mb-0">
              <p className="text-gray-600 w-[100%] md:w-[90%] mb-5 text-base md:text-lg font-medium">
                {item.description}
              </p>
              <div className="author flex items-center gap-3 mb-3">
                <img
                  src={item.avatarImage}
                  className="h-12 w-12 rounded-full "
                  alt="Author"
                />
                <p className="font-bold text-lg text-blue-800">{item.author}</p>
              </div>
              <div className="teacherReview">
                <div className="flex gap-3 items-center mb-1">
                  <p className="flex">
                    {[...Array(5)].map((_, index) => {
                      return (
                        <AiFillStar
                          className=""
                          size={25}
                          color="orange"
                          key={index}
                        />
                      );
                    })}
                  </p>{" "}
                  <span className="text-gray text-sm md:text-base">
                    {item.teacherReviews[1]} total reviews for this teacher
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="flex">
                    {[...Array(5)].map((_, index) => {
                      return (
                        <AiFillStar
                          className=""
                          size={25}
                          color="orange"
                          key={index}
                        />
                      );
                    })}
                  </p>{" "}
                  <span className="text-gray text-sm md:text-base">
                    {item.classReviews[1]} reviews for this class
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-bold mt-3 mb-8">
                Completed by {item.completed} learners
              </h2>
              <div className="buttons flex gap-2 md:gap-8">
                <button className="flex items-center gap-1 bg-blue-800 px-5 text-sm md:text-base py-3 md:px-8 text-white md:py-3 rounded-3xl font-bold">
                  See Class Schedule <MdArrowForwardIos fontSize={19} />
                </button>
                <button className="flex items-center gap-1 text-blue-800 font-bold text-lg">
                  <AiOutlineHeart fontSize={19} /> Save
                </button>
                <button className="flex items-center gap-1  text-blue-800 font-bold text-lg">
                  <RiShareForwardLine fontSize={19} />
                  Share
                </button>
              </div>
            </div>

            <div className="right grid md:grid-rows-2 md:grid-cols-2 md:h-[30rem] lg:h-[25rem] gap-3 md:min-w-[50%] ">
              <div className="row-span-2">
                {" "}
                <img
                  className="w-full h-full"
                  src={item.images[0]}
                  alt="Wallpaper"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-full h-full"
                  src={item.images[1]}
                  alt="Wallpaper"
                />
              </div>
              <div className=" col-span-1">
                <img
                  className="w-full h-full"
                  src={item.images[2]}
                  alt="Wallpaper"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserProfile;
