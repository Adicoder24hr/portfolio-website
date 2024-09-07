'use client'
import ImageSize from "@/utils/imageSizes";
import Image from 'next/image';
import "./style.scss";
import { ReactTyped } from "react-typed";
import { motion, useInView } from "framer-motion";
import useAnimateOnView from "../../ui/useAnimateOnView/useAnimateOnView";
import Link from "next/link";


const MyProjects = ()=>{

    const text = "GitHub ->";

    const card1 = useAnimateOnView({ threshold: 0.25, triggerOnce: true });
    const card2 = useAnimateOnView({ threshold: 0.25, triggerOnce: true });
    const card3 = useAnimateOnView({ threshold: 0.25, triggerOnce: true });

    const variants = {
        inView: { opacity: 1, y: 0 },
        outOfView: { opacity: 0, y: 50 },
    };

    return (
        <section id="projects">
            <div className="project-cont">
            <h1 id="project-heading"> {" "}<ReactTyped strings={["my projects"]} typeSpeed={100} startWhenVisible/></h1>
            <motion.div className="project-card1"
             ref={card1.ref}
             initial="outOfView"
             animate={card1.animate ? "inView" : "outOfView"}
             variants={variants}
             transition={{ duration: 1 }}>
                <div className="left">
                <Image sizes={ImageSize.cardSize}
                    fill
                    src="/profile/image/project-card-image-1.png" alt='aditya bhalerao profile picture'>
                    </Image>
                </div>
                <div className="right">
                    <div className="right-container">
                    <div className="content">
                    <h2 className="card-heading">sunny side landing page</h2>
                    <p className="subheading">tech: html, scss</p>
                    <div className="para-div">

                    <p className="project-desc">It was a frontend mentor challenge 
                        to design the sunny side agency landing page using html and scss
                        the layout is made using layout methods such as flexbox and grid
                    </p>

                    </div>
                    </div>

                    <div className="link-buttons">

                    <Link href="https://github.com/Adicoder24hr/sunnyside-design" className="github">
                        {text}
                    </Link>

                    <Link href="/details" className="show_more">Show more +</Link>

                    </div>
                    </div>
                </div>
            </motion.div>

            <motion.div className="project-card2"
            ref={card2.ref}
            initial="outOfView"
            animate={card2.animate ? "inView" : "outOfView"}
            variants={variants}
            transition={{ duration: 1 }}>
            <div className="left">
                <div className="right-container">
                    <div className="content">
                    <h2 className="card-heading">todo app</h2>
                    <p className="subheading">tech: html, scss, javascript</p>
                    <div className="para-div">

                    <p className="project-desc">The todo list app allows users to add, update, and delete tasks, with features including light/dark mode, drag-and-drop reordering, and filtering for active, completed, or all tasks. Users can also clear completed tasks, making it a helpful tool for daily task management and goal achievement.
                    </p>
                    </div>
                    </div>

                    <div className="link-buttons">

                    <a href="https://github.com/Adicoder24hr/todo-list-app" className="github">
                        {text}
                    </a>

                    </div>
                </div>
            </div>
                <div className="right">
                <Image sizes={ImageSize.cardSize}
                    fill
                    src="/profile/image/project-card-image-2.png" alt='aditya bhalerao profile picture'>
                    </Image>
                </div>
            </motion.div>

            <motion.div className="project-card3"
            ref={card3.ref}
            initial="outOfView"
            animate={card3.animate ? "inView" : "outOfView"}
            variants={variants}
            transition={{ duration: 1 }}>
                <div className="left">
                <Image sizes={ImageSize.cardSize}
                    fill
                    src="/profile/image/project-card-image-3.png" alt='aditya bhalerao profile picture'>
                    </Image>
                </div>
                <div className="right">
                    <div className="right-container">
                    <div className="content">
                    <h2 className="card-heading">weather app</h2>
                    <p className="subheading">tech: html, scss, javascript</p>
                    <div className="para-div">

                    <p className="project-desc">The main goal of the weather app is to show the weather of any place or country entered in the input field.
                    </p>

                    </div>
                    </div>

                    <div className="link-buttons">

                    <a href="https://github.com/Adicoder24hr/WheatherApp" className="github">
                        {text}
                    </a>

                    </div>
                    </div>
                </div>
            </motion.div>
        </div>
        </section>
    )

}

export default MyProjects;