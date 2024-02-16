import { AnimatePresence,motion} from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 1.5,
      },
    },
  };

  // console.log(user)
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
    return (
       <header className="sticky bg-menu w-full text-white h-[80px] inset-x-0 -top-1 z-30 mx-auto">
  <div className="px-5 lg:px-10 py-5">
    <div className="hidden lg:flex items-center justify-between">
    <div className=" md:flex md:items-center md:justify-center md:gap-5 nav-list">
        <li className="inline-block  px-2 py-1 text-sm font-medium  transition-all duration-200   ">
         <Link to='/about'> Home</Link></li>
       
        <li className="inline-block  px-2 py-1 text-sm font-medium  transition-all duration-200">
         <a href="#about"> About</a></li>
         <li className="inline-block  px-2 py-1 text-sm font-medium  transition-all duration-200">
         <a href="#about"> Reviews</a></li>
         <li className="inline-block  px-2 py-1 text-sm font-medium  transition-all duration-200">
         <a href="#works"> Works</a></li>
         <li className="inline-block  px-2 py-1 text-sm font-medium  transition-all duration-200">
         <a href="#community"> Community</a></li>
         
      </div>
      <div className="hidden lg:flex shrink-0">

        <a href="#home">
        
        <img
          className="relative "
          src="/images/ucu.svg"
          alt="Slum Art Logo"
          width={100}
          height={37}
        
        />
      
         
        </a>
      </div>
      
      <a href="#report">
                          <button className="rounded-lg border border-white text-white w-[125px] h-[50px] font-medium text-small">
                           Make Report
                          </button>
                        </a>    
              
              
        
    </div>
     {/*-------------- MOBILE NAVIGATION --------------- */}
     <div className="lg:hidden flex items-center justify-between"></div>
     <AnimatePresence key={location}>
      
     
     <div className="flex shrink-0">

<a aria-current="page" className="flex  lg:hidden items-center" href="/">
<div>
<img
  className="relative "
  src="/images/ucu.svg"
  alt="Slum Art Logo"
  width={100}
  height={37}

/>
</div> 
 
</a>
</div>

    {isMobileMenuOpen && (
              <motion.ul
                variants={item}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100vh", opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit="exit"
                className=" fixed top-0 w-full h-screen flex flex-col gap-3 lg:hidden items-center justify-center md:justify-between left-0   bg-orange text-black   z-[999] overflow-hidden"
              >
                <div className=" max-h-[70%] sm:max-h-[800px] flex flex-col items-center justify-center xxsm:gap-y-2 gap-y-8 sm:gap-y-8 my-auto">
                  <motion.li
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className=" text-2xl font-medium hover:text-white"
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: "easeInOut",
                        delay: 1,
                      },
                    }}
                  >
                    <a href="#home">Home</a>
                  </motion.li>
                  <motion.li
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl font-medium hover:text-white"
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.8,
                      },
                    }}
                  >
                    <a href="#about">About</a>
                  </motion.li>
                  <motion.li
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl font-medium hover:text-white"
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.8,
                      },
                    }}
                  >
                    <a href="#reviews">Reviews</a>
                  </motion.li>
                  <motion.li
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl font-medium hover:text-white"
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.8,
                      },
                    }}
                  >
                    <a href="#works">Works</a>
                  </motion.li>
                  
                  <motion.li
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl font-medium hover:text-white"
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.8,
                      },
                    }}
                  >
                    <a href="#community">Community</a>
                  </motion.li>
                  
                 
                  
                 
                 
                  
                      <motion.li
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className=""
                        exit={{
                          opacity: 0,
                          y: 90,
                          transition: {
                            ease: "easeInOut",
                            delay: 0.4,
                          },
                        }}
                      >
                        <a href="#report">
                          <button className="rounded-[30px] bg-menu text-white w-[150px] h-[55px] font-medium text-small">
                           Make Report
                          </button>
                        </a>
                      </motion.li>
                     
                  
             
                </div>
                
              </motion.ul>
            )}

            <div
              className="lg:hidden cursor-pointer "
              onClick={toggleMobileMenu}
            >
              {!isMobileMenuOpen ? (
                <FaBars className="absolute top-8 right-10 text-[1.8rem] sm:text-[2rem] text-white " />
              ) : (
                <FaTimes className="fixed top-5 z-[9999] right-10 text-[2rem] text-menu" />
              )}
            
            </div>
           
          </AnimatePresence>
         
  </div>
</header>

    )
}

 
