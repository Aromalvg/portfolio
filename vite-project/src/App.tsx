import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./components/ui/animated-modal";

import { FloatingDock } from "./components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconBrandInstagram,
  IconBrandLinkedin,  // Import LinkedIn icon
} from "@tabler/icons-react";


function App() {
  

  const links = [
    {
      title: "Home",
      icon: 
        <IconHome className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ,
      href: "#",
    },
 
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-900 dark:text-neutral-300" />,  // LinkedIn Icon
      href: "https://www.linkedin.com",
    },
  

    { title: "Instagram", icon: <IconBrandInstagram className="h-full w-full text-neutral-900 dark:text-neutral-300"/>,
       href: "#" }, // New Instagram button

   
    {
      title: "GitHub",
      icon: 
        <IconBrandGithub className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ,
      href: "#",
    },
  ];

  return (
    <div >
      <HeroHighlight>
        <nav className="bg-navcolor p-3 fixed top-0 left-0 w-full z-10">
          <div className="container-fluid mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a href="#">
                <img
                  src="portfolio-pic.jpg"
                  alt="Navbar Logo"
                  className="h-9 w-auto rounded"
                />
              </a>
              <div className="flex flex-col items-start">
                <a className="italic text-[11px] text-gray-100" href="#">
                  Aromal V G
                </a>
                <a className="italic text-[11px] text-gray-100" href="#">
                  Web Developer
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <a className="text-gray-100 text-[12px] border pl-3 pr-3 pt-1 pb-1 border-white rounded-full" href="#" >
              <span className="text-green-600 animate-ping mr-2"><i className="fa-solid fa-circle"></i></span>Available</a>
            </div>

          </div>
        </nav>

        
         
<div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 ">
  <div className="hidden md:flex flex-col justify-center gap-5">
  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-solid fa-laptop"></i></span>
    </ModalTrigger>
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Book your trip to
        </h4>
      </ModalContent>
    </ModalBody>
  </Modal>

  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-regular fa-folder-closed"></i></span>
    </ModalTrigger>
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Book your trip to
        </h4>
      </ModalContent>
    </ModalBody>
  </Modal>

  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-regular fa-user"></i></span>
    </ModalTrigger>
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Book your trip to
        </h4>
      </ModalContent>
    </ModalBody>
  </Modal>
</div>

    <div className="col-span-1">
      <CardContainer className="inter-var mx-auto">
        <CardBody className="bg-cardcolor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-gray-500 w-auto sm:w-[30rem] h-auto rounded-xl p-5 border">
          <CardItem translateZ="50" className="text-[18px] font-bold text-neutral-100 dark:text-white">
            About
          </CardItem>

          <CardItem translateZ="100" className="w-full">
            <img
              src="portfolio-pic.jpg"
              alt="thumbnail"
              className="w-60 h-60 object-cover mx-auto rounded"
            />
          </CardItem>

          <CardItem translateZ="60" className="text-neutral-100 text-sm max-w-sm mt-2 dark:text-neutral-300">
            <h1 className="text-[18px] font-serif leading-relaxed tracking-wide">
              Revolutionizing digital experiences with cutting-edge solutions
            </h1>
          </CardItem>

          <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            <p className="italic tracking-wide text-[14px]">
              I'm Aromal, Web Developer/Fullstack Developer specializing in crafting amazing user experiences
              with a deep-rooted passion for design and a keen eye for detail. I strive to create visually stunning
              and functional digital solutions that leave a lasting impact.
            </p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>

    <div className="hidden md:flex flex-col justify-center gap-5 items-end">
  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-solid fa-gear"></i></span>
    </ModalTrigger>
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Book your trip to
        </h4>
      </ModalContent>
    </ModalBody>
  </Modal>

  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-regular fa-images"></i></span>
    </ModalTrigger>
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Book your trip to
        </h4>
      </ModalContent>
    </ModalBody>
  </Modal>

  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center "><i className="fa-solid fa-book-open"></i></span>
    </ModalTrigger>
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Book your trip to
        </h4>
      </ModalContent>
    </ModalBody>
  </Modal>
</div>

  </div>
</div>


         
         


<Router>
<div className=" flex items-center justify-center  w-full">
  <FloatingDock items={links} />
</div>
</Router>


   <div className="">
   <p className="text-white">{"\u00A9"} 2025 <span className="text-gray-500  text-start">by</span> Aromal</p>
   </div>  


      </HeroHighlight>
    </div>
  );
}

export default App;
