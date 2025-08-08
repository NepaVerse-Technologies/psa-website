import React from "react";

const TestimonialCard = ({
  color,
  name,
  testimonialText,
  position,
  photoPath,
}: {
  color: string;
  name: string;
  testimonialText: string;
  position: string;
  photoPath: string;
}) => {
  return (
    <div className="w-full max-w-[340px] relative rounded-xl shadow-xl border mx-auto overflow-hidden">
      <div className="p-8 h-full">
        {/* quote part */}
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.75 36.75C37.5623 36.75 38.3412 36.4273 38.9156 35.853C39.4899 35.2787 39.8125 34.4997 39.8125 33.6875V26.2089C39.8125 25.3966 39.4899 24.6177 38.9156 24.0434C38.3412 23.469 37.5623 23.1464 36.75 23.1464H32.4993C32.4993 22.0714 32.5636 20.9934 32.6892 19.9185C32.879 18.7793 33.1975 17.7656 33.6385 16.8805C34.0826 15.9924 34.6522 15.2972 35.3505 14.7888C36.0457 14.2192 36.9307 13.9344 38.0087 13.9344V9.1875C36.2355 9.1875 34.6859 9.56725 33.3537 10.3267C32.0331 11.0786 30.8977 12.1166 30.0309 13.3647C29.1609 14.7408 28.5197 16.2487 28.1322 17.8299C27.7417 19.5748 27.5506 21.3584 27.5625 23.1464V33.6875C27.5625 34.4997 27.8852 35.2787 28.4595 35.853C29.0339 36.4273 29.8128 36.75 30.625 36.75H36.75ZM18.375 36.75C19.1873 36.75 19.9662 36.4273 20.5406 35.853C21.1149 35.2787 21.4375 34.4997 21.4375 33.6875V26.2089C21.4375 25.3966 21.1149 24.6177 20.5406 24.0434C19.9662 23.469 19.1873 23.1464 18.375 23.1464H14.1243C14.1243 22.0714 14.1886 20.9934 14.3142 19.9185C14.504 18.7793 14.8225 17.7656 15.2635 16.8805C15.7076 15.9924 16.2772 15.2972 16.9755 14.7888C17.6707 14.2192 18.5557 13.9344 19.6337 13.9344V9.1875C17.8605 9.1875 16.3109 9.56725 14.9787 10.3267C13.6581 11.0786 12.5227 12.1166 11.6559 13.3647C10.7859 14.7408 10.1447 16.2487 9.75717 17.8299C9.36666 19.5748 9.17556 21.3584 9.18754 23.1464V33.6875C9.18754 34.4997 9.5102 35.2787 10.0845 35.853C10.6589 36.4273 11.4378 36.75 12.25 36.75H18.375Z"
            fill={color}
          />
        </svg>
        <p className="text-base text-bolder-grey px-2 pt-3">
          {testimonialText}
        </p>
      </div>
      <div className="mt-40"></div>
      <div className="h-20 w-20 bg-slate-500 absolute bottom-[79px] rounded-full left-0 right-0 ml-auto mr-auto z-10"></div>
      {/* adding relative because z-index does not work for static positioned elements */}
      <div className="z-10 absolute bottom-3 left-0 right-0 ml-auto mr-auto">
        <p className="font-primary text-white font-bold text-lg text-center">
          {name}
        </p>
        <p className="text-center">
          <span className=" text-sm font-semibold bg-white m-2 px-3 border rounded ">
            {position}
          </span>
        </p>
      </div>
      <div className="absolute left-0 bottom-0 w-full">
        <svg
          width="100%"
          fill="none"
          viewBox="0 0 340 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* curve */}
          <path
            d="M99.5 0.613669C34.5 -5.7184 0 39.0389 0 39.0389V151H343V35.356C343 35.356 311.36 51.9887 274.601 53.7708C208.878 56.957 164.5 6.94574 99.5 0.613669Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCard;
