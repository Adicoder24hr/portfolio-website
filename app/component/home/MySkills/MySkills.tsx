'use client'

import Image from "next/image";
import ImageSize from '@/utils/imageSizes';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import Border from "../../ui/border/Border";
import "./style.scss";
import useAnimateOnView from "../../ui/useAnimateOnView/useAnimateOnView";
import { motion } from "framer-motion";

const MySkills = () =>{

    const { ref: leftRef, animate: leftAnimate } = useAnimateOnView();
    const { ref: rightRef, animate: rightAnimate } = useAnimateOnView();

    const onButtonClick = () => {
        fetch("Aditya-resume.pdf").then((response) =>{
          response.blob().then((blob) =>{
    
            const fileURL = window.URL.createObjectURL(blob);
    
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Aditya-resume.pdf";
            alink.click();
          })
        })
      }

    return (
        <section id="experience">
            <div className="skill-container">
                <motion.div className="left"
                ref={rightRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: rightAnimate ? 1 : 0, x: rightAnimate ? 0 : -50 }}
                transition={{ duration: 0.5 }}>
                <Image sizes={ImageSize.cardSize}
                    fill
                    src="/profile/image/aditya_profile.jpg" alt='aditya bhalerao profile picture'>
                    </Image>
                </motion.div>
                <motion.div className="right"
                ref={rightRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: rightAnimate ? 1 : 0, x: rightAnimate ? 0 : 50 }}
                transition={{ duration: 0.5 }}>
                    <h2 className="skills-heading">my skills</h2>
                    <div className="skill-set">
                        <div className="skill">
                            <IoLogoJavascript /> 
                            <p className="skill-para">javascript</p>
                        </div>
                        <div className="skill">
                            <SiTypescript />
                            <p className="skill-para">typescript</p>
                        </div>
                        <div className="skill">
                            <IoLogoFirebase />
                            <p className="skill-para">firebase</p>
                        </div>
                        <div className="skill">
                            <FaReact />
                            <p className="skill-para">react js/ts</p>
                        </div>
                        <div className="skill">
                            <FaHtml5 />
                            <p className="skill-para">html</p>
                        </div>
                        <div className="skill">
                            <FaCss3Alt />
                            <p className="skill-para">css</p>
                        </div>
                        <div className="skill">
                            <FaNodeJs />
                            <p className="skill-para">node js</p>
                        </div>
                        <div className="skill">
                            <FaGitAlt />
                            <p className="skill-para">git</p>
                        </div>
                        <div className="skill RRD">
                            <SiReactrouter />
                            <p className="skill-para">react-router-dom</p>
                        </div>
                    </div>

                    <div className="ordinary-skill">
                        <h2 className="ord-heading">also some bunch of ordinary skills.</h2>
                        <p className="ord-skills">styled-components, adobe xd, figma,
                            <br /> linux, windows.
                        </p>
                    </div>
                    <button id="border" onClick={onButtonClick}>Get my resume</button>
                </motion.div>
            </div>
        </section>
    );
}

export default MySkills;