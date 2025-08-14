import React from "react";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    // <footer className="text-white bg-footer-blue text-lg px-5 md:px-16 py-14 pb-36 md:pb-[150px] relative">
    //   <div className="flex max-md:flex-col">
    //     <div className="md:w-[25%]">
    //       <Image src="/LOGO.png" alt="company logo" width={100} height={100} />
    //       <h1 className="mt-4">Pinnacle Sprach Akademic</h1>
    //       <p className="mt-2">Dark Unto Light | Wir machen dich Fit</p>
    //     </div>
    //     <div className="grid grid-cols-2 gap-4 md:w-[75%] md:grid-cols-4 max-md:mt-8 max-md: gap-y-8">
    //       <div>
    //         <h1 className="text-2xl">Services</h1>
    //         <div className="flex flex-col gap-2 text-faint-grey mt-4">
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-angle-right fa-xs block"></i>
    //             <p>German Language Classes</p>
    //           </a>
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-angle-right fa-xs block"></i>
    //             <p>Au Pair Student Visa</p>
    //           </a>
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-angle-right fa-xs block"></i>
    //             <p>Study Visa</p>
    //           </a>
    //         </div>
    //       </div>
    //       <div>
    //         <h1 className="text-2xl">About Us</h1>
    //         <div className="flex flex-col gap-2 text-faint-grey mt-4">
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-angle-right fa-xs block"></i>
    //             <p>Who We Are</p>
    //           </a>
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-angle-right fa-xs block"></i>
    //             <p>Our Team</p>
    //           </a>
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-angle-right fa-xs block"></i>
    //             <p>Lorem Ipsum</p>
    //           </a>
    //         </div>
    //       </div>
    //       <div>
    //         <h1 className="text-2xl">Contact</h1>
    //         <div className="flex flex-col gap-2 text-faint-grey mt-4">
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-phone fa-xs block"></i>
    //             <p>021 - 123450</p>
    //           </a>
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-envelope fa-xs block"></i>
    //             <p>example@abcd.com</p>
    //           </a>
    //           <a href="#" className="flex gap-2 items-center">
    //             <i className="fa-solid fa-location-dot fa-xs block"></i>
    //             <p>Maitighar, Kathmandu</p>
    //           </a>
    //         </div>
    //       </div>
    //       <div>
    //         <h1 className="text-2xl">Follow Us</h1>
    //         <div className="pt-2">
    //           <i className="fa-brands fa-square-facebook fa-xl mr-3"></i>
    //           <i className="fa-brands fa-instagram fa-xl"></i>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="font-accent font-normal text-base absolute bottom-4 w-full ml-auto mr-auto left-0 right-0 px-10">
    //     <div className="flex justify-between max-md:flex-col max-md:justify-center max-md:gap-3">
    //       <p className="max-md:text-center">
    //         Copyright &copy; {new Date().getFullYear()} Pinnacle Sprach Akademic
    //       </p>
    //       <p className="max-md:text-center">
    //         Powered by <span className="font-bold">NepaVerse IT Solutions</span>
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-blue-900 text-white px-8 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className=" bg-yellow-400 rounded-full flex items-center justify-center">
                <Image
                  src="/LOGO.png"
                  alt="company logo"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <div className="font-bold text-xl">Pinnacle Sprach</div>
                <div className="text-xl font-bold">Academy</div>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              Dark Unto Light | Wir machen dich Fit
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>German Language Classes</li>
              <li>Au Pair Visa Processing</li>
              <li>Study Visa Processing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-blue-200">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Success Stories</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-blue-200">
              <li>01-4500234, 9860005601</li>
              <li>pinnaclesprachacademy@gmail.com</li>
              <li>Putalisadak, Kathmandu</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Follow us</h4>
              <div className="flex space-x-2">
                <Button
                  variant="secondary"
                  className="cursor-pointer"
                  size="icon"
                >
                  <Facebook className=" text-blue-900" />
                </Button>
                <Button
                  variant="secondary"
                  className="cursor-pointer"
                  size="icon"
                >
                  <Instagram className=" text-red-900" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex justify-between items-center">
          <p className="text-blue-200">
            Copyright © {new Date().getFullYear()} Pinnacle Sprach Academy
          </p>
          <p className="text-blue-200">
            Powered by <span className="font-bold">NepaVerse Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
