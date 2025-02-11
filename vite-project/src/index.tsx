import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { HeroHighlight} from "./components/ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import Carousel from "@/components/ui/carousel";


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
  IconBrandLinkedin, 
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
      href: "linkedin.com/in/aromal-vijayan",
    },
  

    { title: "Instagram", icon: <IconBrandInstagram className="h-full w-full text-neutral-900 dark:text-neutral-300"/>,
       href: "https://www.instagram.com/___chekavar___/" },

   
    {
      title: "GitHub",
      icon: 
        <IconBrandGithub className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ,
      href: "https://github.com/Aromalvg",
    },
  ];

  const slideData = [
    {
      title: "laptop",
      button: "Explore Component",
      src: "laptop1.webp",
    },
    {
      title: "laptop",
      button: "Explore Component",
      src: "laptop2.jpg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "laptop3.jpg",
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
  <div className="order-3 md:order-2 flex flex-row sm:flex-row md:flex-col justify-center gap-20 md:gap-5">
  <Modal>
  <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
    <span className="text-center"><i className="fa-solid fa-laptop"></i></span>
  </ModalTrigger>
  <p className="text-white hidden md:block">Services</p>
  
  <ModalBody className="flex justify-center items-center">
    <div className="p-0 rounded-2xl  w-[450px] h-[300px] max-w-[90vw] max-h-[90vh] flex flex-row">
      <ModalContent className="w-full h-full flex flex-col justify-center px-8">
        <h4 className="text-[17px] text-neutral-100 dark:text-neutral-100 font-bold mb-3">
          Services
        </h4>

        <div className="border border-white p-4 mb-2 rounded-2xl bg-cardcolor w-full flex flex-row gap-6">
          <div className="w-1/2 border-r border-white pr-4">
            <h4 className="text-sm text-neutral-100 dark:text-neutral-100 font-bold mb-1">
              UX Designs
            </h4>
            <p className="text-sm text-neutral-400 break-words">
              Crafting seamless user experiences through research, prototyping, and user testing.
            </p>

            <hr className="mt-4" />

            <h4 className="text-sm text-neutral-100 dark:text-neutral-100 font-bold mb-1 mt-3">
              Full-Stack Development
            </h4>
            <p className="text-sm text-neutral-400 break-words">
              Complete solution from frontend to backend.
            </p>
          </div>

          <div className="w-1/2">
            <h4 className="text-sm text-neutral-100 dark:text-neutral-100 font-bold mb-1">
              UI Designs
            </h4>
            <p className="text-sm text-neutral-400 break-words">
              Combining aesthetics & functionality, we design stunning UI.
            </p>

            <hr className="mt-10" />

            <h4 className="text-sm text-neutral-100 dark:text-neutral-100 font-bold mb-1 mt-3">
              APIs & Integrations
            </h4>
            <p className="text-sm text-neutral-400 break-words">
              Develop RESTful APIs & seamless integrations.
            </p>
          </div>
        </div>
      </ModalContent>
    </div>
  </ModalBody>
</Modal>


<div className="hidden md:block">
  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-regular fa-user"></i></span>
    </ModalTrigger>
    <p className="text-white hidden md:block mt-4">About</p>

    <ModalBody>
    <div className="p-0 rounded-2xl bg-cardheading">

       <ModalContent className="p-0 m-0">
          <CardContainer className="mx-auto p-0 m-0">
            <CardBody className="bg-cardcolor dark:bg-black border-gray-500 w-full sm:w-[30rem] md:w-[25rem] lg:w-[30rem] h-auto rounded-xl p-4 border m-0">
              
              {/* Title */}
              <CardItem translateZ="50" className="text-[18px] font-bold text-neutral-100 dark:text-white">
                About
              </CardItem>

              {/* Image */}
              <CardItem translateZ="70" className="w-full">
                <img
                  src="portfolio-pic.jpg"
                  alt="thumbnail"
                  className="w-[200px] h-[170px] sm:w-[250px] sm:h-[200px] object-cover mx-auto rounded"
                />
              </CardItem>

              {/* Description */}
              <CardItem translateZ="60" className="text-neutral-100 text-sm max-w-sm mt-2 dark:text-neutral-300">
                <h1 className="text-[16px] sm:text-[18px] font-serif leading-relaxed tracking-wide">
                  Revolutionizing digital experiences with cutting-edge solutions
                </h1>
              </CardItem>

              {/* Bio */}
              <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                <p className="italic tracking-wide text-[12px] sm:text-[14px]">
                  I'm Aromal, a Web Developer/Fullstack Developer specializing in crafting amazing user experiences.
                  With a deep-rooted passion for design, I create visually stunning and functional digital solutions.
                </p>
              </CardItem>

            </CardBody>
          </CardContainer>
        </ModalContent>
      </div>
    </ModalBody>
  </Modal>
  </div>

  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-regular fa-folder-closed"></i></span>
    </ModalTrigger>
    <p className="text-white hidden md:block">Project</p>

    <ModalBody>
    <div className="p-0 rounded-2xl bg-cardheading">

      <ModalContent>
      <div className="max-w-3xl mx-auto h-96 overflow-y-auto scrollbar-hide p-4">
      <h1 className="text-[17px] text-neutral-100 dark:text-neutral-100 font-bold mb-3">My Projects</h1>
      <div className="flex flex-col space-y-4">
        
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row bg-cardcolor shadow-lg rounded-lg overflow-hidden">
          <img src="ott.png" className="w-full md:w-1/3 object-contain" />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-100 mb-2">OTT Platform</h2>
            <p className="text-gray-500 mb-4">
              An OTT platform built using Python, Django, and React.js provides seamless streaming with user authentication.
            </p>
            <a href="https://github.com/Aromalvg/Ott_platform" className="bg-gray-400 text-white px-4 py-1 rounded-lg text-center w-max hover:bg-cardheading transition duration-300">
            <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row bg-cardcolor shadow-lg rounded-lg overflow-hidden">
          <img src="dogtraining.png" className="w-full md:w-1/3 object-contain" />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-100 mb-2">Dog Training App</h2>
            <p className="text-gray-500 mb-4">
            A responsive dog training app built with HTML, CSS, and Bootstrap connects users with professional trainers and veterinary services. </p>
            <a href="https://github.com/Aromalvg/Dog-Training" className="bg-gray-400 text-white px-4 py-1 rounded-lg text-center w-max hover:bg-cardheading transition duration-300">
            <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row bg-cardcolor shadow-lg rounded-lg overflow-hidden">
          <img src="buildwellz.png" className="w-full md:w-1/3 object-contain" />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-100 mb-2">Construction App</h2>
            <p className="text-gray-500 mb-4">
            A construction site app developed using HTML, CSS, and Bootstrap connects engineers for seamless project collaboration.            </p>
            <a href="https://github.com/Aromalvg/buildvellz_construction" className="bg-gray-400 text-white px-4 py-1 rounded-lg text-center w-max hover:bg-cardheading transition duration-300">
            <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>

      </ModalContent>
      </div>
    </ModalBody>
  </Modal>

  
</div>

<div className="order-1 md:order-2    col-span-1  ">
  <CardContainer className="inter-var mx-auto">
  <CardBody className="bg-cardcolor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-gray-500 
  w-[90%] sm:w-[30rem] sm:h-[25rem] md:w-[25rem] lg:w-[30rem] h-auto rounded-xl p-4 border">

      <CardItem translateZ="50" className="text-[18px] font-bold text-neutral-100 dark:text-white ">
        About
      </CardItem>

      <CardItem translateZ="100" className="w-full">
        <img
          src="portfolio-pic.jpg"
          alt="thumbnail"
          className="w-[200px] h-[170px] sm:w-[200px] sm:h-[170px] md:w-[200px] md:h-[170px] lg:w-[250px] lg:h-[170px]   object-cover mx-auto rounded"
        />
      </CardItem>

      <CardItem translateZ="60" className="text-neutral-100 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <h1 className="text-[16px] sm:text-[18px] font-serif leading-relaxed tracking-wide">
          Revolutionizing digital experiences with cutting-edge solutions
        </h1>
      </CardItem>

      <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <p className="italic tracking-wide text-[12px] sm:text-[14px]">
          I'm Aromal, Web Developer/Fullstack Developer specializing in crafting amazing user experiences
          with a deep-rooted passion for design and a keen eye for detail. I strive to create visually stunning
          and functional digital solutions that leave a lasting impact.
        </p>
      </CardItem>
    </CardBody>
  </CardContainer>
</div>


    <div className="order-2 md:order-3 flex flex-row sm:flex-row md:flex-col  justify-center gap-5 items-end my-4">
  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-solid fa-gear"></i></span>
    </ModalTrigger>
    <p className="text-white hidden md:block">Tools</p>

    <ModalBody>
    <div className="p-0 rounded-2xl bg-cardheading">

      <ModalContent>
      <h1 className="text-[17px] text-neutral-100 dark:text-neutral-100 font-bold mb-3">Tools</h1>

    <div className="flex items-center bg-cardcolor shadow-lg rounded-t-lg p-6 w-full max-w-2xl mx-auto">
      <div className="text-gray-700 text-4xl mr-4">
      <i className="fa-brands fa-react" style={{color: "#74C0FC"}}></i>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-100">React.js</h2>
        <p className="text-gray-400">website Builder</p>
      </div>
      <a href="#" className="bg-gray-400 text-white px-4 py-2 rounded-lg ml-4 hover:bg-gray-800 transition duration-300">
      <i className="fa-solid fa-up-right-and-down-left-from-center" style={{color: "#fafafa"}}></i>
      </a>
    </div>

    <div className="flex items-center bg-cardcolor shadow-lg  p-6 w-full max-w-2xl mx-auto">
      <div className="text-gray-700 text-4xl mr-4">
      <img
          src="https://assets.aceternity.com/logo-dark.png" width={30} height={30} alt="Aceternity Logo" />      
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-100">Aceternity UI</h2>
        <p className="text-gray-400">Components</p>
      </div>
      <a href="#" className="bg-gray-400 text-white px-4 py-2 rounded-lg ml-4 hover:bg-gray-800 transition duration-300">
      <i className="fa-solid fa-up-right-and-down-left-from-center" style={{color: "#fafafa"}}></i>
      </a>
    </div>

    <div className="flex items-center bg-cardcolor shadow-lg p-6 w-full max-w-2xl mx-auto">     
      <div className="text-gray-700 text-4xl mr-4">
      <img
          src="https://cdn-icons-png.flaticon.com/512/1658/1658459.png" width={30} height={30} alt="Aceternity Logo" />      
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-100">Magic UI</h2>
        <p className="text-gray-400">Components</p>
      </div>
      <a href="#" className="bg-gray-400 text-white px-4 py-2 rounded-lg ml-4 hover:bg-gray-800 transition duration-300">
      <i className="fa-solid fa-up-right-and-down-left-from-center" style={{color: "#fafafa"}}></i>
      </a>
    </div>

    <div className="flex items-center bg-cardcolor shadow-lg rounded-b-lg p-6 w-full max-w-2xl mx-auto">     
      <div className="text-gray-700 text-4xl mr-4">
      <img
          src="https://th.bing.com/th/id/OIP.SewvyydRX-3uaDrLD7iqNgHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width={30} height={30} alt="Aceternity Logo" />      
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-100">Magic UI</h2>
        <p className="text-gray-400">Components</p>
      </div>
      <a href="#" className="bg-gray-400 text-white px-4 py-2 rounded-lg ml-4 hover:bg-gray-800 transition duration-300">
      <i className="fa-solid fa-up-right-and-down-left-from-center" style={{color: "#fafafa"}}></i>
      </a>
    </div>
      </ModalContent>
      </div>
    </ModalBody>
  </Modal>

  <Modal>
    <ModalTrigger className="bg-navcolor dark:bg-white dark:text-black text-white flex justify-center w-10 h-10 hover:border">
      <span className="text-center"><i className="fa-regular fa-images"></i></span>
    </ModalTrigger>
    <p className="hidden md:block text-white">Gallery</p>

    <ModalBody className="bg-cardheading rounded-2xl">
      <ModalContent className="px-3">
      <h1 className="text-[17px] text-neutral-100 dark:text-neutral-100 font-bold mb-3">Gallery</h1>

      <Carousel slides={slideData} />
    
      </ModalContent>
    </ModalBody>
  </Modal>

  <Modal>
  <ModalTrigger className="bg-navcolor  dark:text-black text-white flex justify-center w-10 h-10 hover:border">
    <span className="text-center "><i className="fa-solid fa-book-open"></i></span>
  </ModalTrigger>
  <p className="text-white hidden md:block">Books</p>

  <ModalBody>
  <div className=" p-0 rounded-2xl bg-cardheading">
  <ModalContent className="bg-cardheading rounded-2xl">
      <div className=" flex flex-col items-center">
        <img 
          src="book.jpg" 
          alt="Card Image" 
          className="w-40 h-auto  rounded-2xl"
        />

        <hr className="w-full my-4" />

        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <img src="https://i.pinimg.com/originals/39/61/db/3961db674b43678de7d5a06335c07d3a.png" alt="Logo" className="h-10 w-10 rounded" />
          
          {/* Text */}
          <p className="text-lg text-gray-600 ">Get it on  <span className="text-white"> Amazon</span></p>
          
          {/* Button */}
          <a href="https://www.amazon.in/s?k=the+book+thief%27&adgrpid=1312818493644272&hvadid=82051414129559&hvbmt=bp&hvdev=c&hvlocphy=144027&hvnetw=o&hvqmt=p&hvtargid=kwd-82052040663958%3Aloc-90&hydadcr=5718_1963219&msclkid=9af181000e1b140912c2e6aa1b2ce269&tag=msndeskstdin-21&ref=pd_sl_2kgoqs14xp_p" className="bg-gray-400 text-white px-4 py-2 rounded-lg ml-4 hover:bg-gray-800 transition duration-300">
      <i className="fa-solid fa-up-right-and-down-left-from-center" style={{color: "black" }}></i>
      </a>        </div>
      </div>
    </ModalContent>
    </div>
  </ModalBody>
</Modal>

</div>

  </div>
</div>

<Router>
  <div className="flex items-center justify-center w-full  mb-0 -mt-5">
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
