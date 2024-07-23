'use client'
import "./style.scss";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import headerData from "./db";
import {AnimatePresence, motion} from "framer-motion";
import {Element, Link} from "react-scroll";

const Header = () => {
  //console.log("headerData->", headerData);

  const isSSR = typeof window === "undefined"
  const [width, setwidth] = useState<number>(isSSR ? 0: window.innerWidth)
  const [isMounted, setMounted] = useState<boolean>(false);

  console.log("window width:-",width)

  useEffect(()=>{
    setMounted(true);

    const handleResize = ()=>{
        setwidth(window.innerWidth);
    };

    window.addEventListener('resize',handleResize);

    return ()=>{
        window.removeEventListener('resize',handleResize);
    };
  }, []);

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  console.log("isMenuOpen->",isMenuOpen);

  const handleOpen = ()=>{
    setMenuOpen(true);
  }

  const handleClose = ()=>{
    setMenuOpen(false);
  }

  const variants = {
    initial:{
      x: "100%"
    },
    enter:{
      x: "0%",
      transition: {
        duration: 0.4,
        ease: [0.45,0,0.55,1]
      }
    },
    exit:{
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.45,0,0.55,1]
      }
    }
  };

  const maxMobile = 800;

  if(isMounted)
  return (
<Element name="header">
    <header id="header">
      <Link to="header" smooth={true}>
        <h1>
          Aditya
          <br />
          Bhalerao
        </h1>
      </Link>
      {width < maxMobile ?(
        <>
       <button className="btnOpen" onClick={handleOpen}>
       <IoMenu />
       </button>
       <AnimatePresence initial={false}>
        {isMenuOpen && (
            <motion.div className="Menu" variants={variants} initial="initial"
            animate="enter"
            exit= "exit">
                <button className="btnClose" onClick={handleClose}>
                <IoClose />
                </button>
            <nav>
            {headerData.map((eachItem, i) => (
              <Link
              to={eachItem.link}
               key={i} 
               onClick={()=>{
                setMenuOpen(false);

                document.querySelector(`${eachItem.link}`);
              }}
              smooth={true}>
                {eachItem.title}
              </Link>
            ))}
          </nav>
            </motion.div>
        )}
        </AnimatePresence>
        
       </>
      )
       :(<nav>
        {headerData.map((eachItem, i) => (
          <Link key={i} to={eachItem.link} smooth={true}>
            {eachItem.title}
          </Link>
        ))}
      </nav>)}
      {/* <nav>
        {headerData.map((eachItem, i) => (
          <Link key={i} href={eachItem.link}>
            {eachItem.title}
          </Link>
        ))}
      </nav> */}
    </header>
    </Element>
  );
  else return null;
};

export default Header;