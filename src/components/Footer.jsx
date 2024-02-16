import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
//import { IoLanguage } from "react-icons/io5";


export default function Footer() {
  return (
    <footer className="bg-[#e2e0e0] py-5 mt-10 ">
      <section className="flex flex-col md:flex-row items-center gap-x-5 lg:gap-x-20">
 <div className="bg-brown w-[90%] lg:w-[300px] py-5 px-10 rounded-b-xl md:rounded-xl -mt-5 md:-ml-5 flex flex-col items-center justify-center">
  <img src="/images/footerlogo.png" width={150} height={100} alt="ucu logo"  />
  <div className="flex items-center gap-x-2 mt-3">
    <span className="text-[1.1rem] text-white border border-white w-8 h-8 rounded-full flex items-center justify-center"><FaTwitter/></span>
    <span className="text-[1.1rem] text-white border border-white w-8 h-8 rounded-full flex items-center justify-center"><FaLinkedin/></span>
    <span className="text-[1.1rem] text-white border border-white w-8 h-8 rounded-full flex items-center justify-center"><FaInstagram/></span>
  </div>
 </div>
 <article className="flex flex-col  gap-y-3 mt-5 px-5">
  <div className="flex items-center gap-x-3">
    <h2 className="text-lg">Navigation:</h2>
    <ul className="flex items-center gap-x-3">
      <li className="text-[1rem]">
        About
      </li>
      <li className="text-[1rem]">
        Reviews
      </li>
      <li className="text-[1rem]">
        Report
      </li>
    </ul>
  </div>
  <div className="flex items-center gap-x-3 ">
    <h2 className="text-lg">Contact:</h2>
    <p >dummyemail@mail.com</p>
  </div>
  <div className="flex items-start gap-x-3">
    <h2 className="text-lg">Disclaimer:</h2>
   <p>This program is an innovation of Zoology Department of
Faculty of Science, <br  className='hidden lg:block'/> University of Lagos, Lagos State, Nigeria.</p>
  </div>

  <p className="!text-center mt-10 text-blue-800"> ©️2024,All rights reserved. </p>
 </article>
 </section>
    </footer>
  )
}
