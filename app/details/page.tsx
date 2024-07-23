'use client';

import Link from "next/link";
import Image from "next/image";
import "./style.scss"; // Ensure the path is correct
import { IoHomeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const Details = () => {

    return (
        <div className="container">
            <div className="left-image">
                <Image 
                    layout="fill"  // Ensure the layout is fill for fill to work
                    src="/profile/image/sunny-side.jpg"
                    alt="sunny side design"
                />
            </div>

            <div className="project-details">
                <div className="details">
                    <div className="headings">
                        <p className="name">
                            Project Name: <span>Sunny Lide landing Page</span>
                        </p>

                        <p className="purpose">
                            Purpose: <span>Frontend Mentor Challenge</span>
                        </p>

                        <p className="tech">
                            Tech: <span>HTML, SCSS</span>
                        </p>
                    </div>

                    <div className="desc-btn">
                        <p className="desc">
                            Description: <span>This project is a design of the sunny side agency landing page made with html & scss. the beautiful UI of this site is made by layout methods such as flex box and the grid layout. it is still under production and has not finished completely yet. with the use of css positioning properties the elements here are positioned to their respective positions. it has a eye catchy theme and a beautiful ui design that grabs attention of viewers and they can interact with the site with some cool active states like hover over navigation items.</span>
                        </p>

                        <p className="current-status">
                            Current Status: 
                            <span>
                               The Sunny Side Agency Landing Page is currently under development and has not yet reached its final form. Despite this, the existing implementation showcases the core features and design principles that will be further refined as the project progresses.
                            </span>
                        </p>

                        <p className="conclusion">
                            Conclusion: 
                            <span>
                            This project is a testament to my skills in frontend development, particularly in creating responsive and interactive web designs. It demonstrates my ability to apply advanced CSS techniques to build a modern, user-friendly interface. Once completed, the Sunny Side Agency Landing Page will serve as a compelling addition to my portfolio, highlighting my capabilities in delivering high-quality web solutions.
                            </span>
                        </p>

                        <div className="btns">
                            <a href="/">
                            <button className="home">
                            <IoHomeOutline />
                                Home
                                </button>
                            </a>

                            <a href="https://github.com/Adicoder24hr/sunnyside-design">
                            <button className="github">
                            <FaGithub />
                                GitHub
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
