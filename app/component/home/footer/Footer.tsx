'use client'
import "./style.scss";
import footerData from "./db";
import Link from "next/link";
import { MdArrowUpward } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useAnimateOnView from "../../ui/useAnimateOnView/useAnimateOnView";

const Footer = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []);

    const { ref: topRef, animate: topAnimate } = useAnimateOnView();

    return (
        <footer id="contacts">
            <motion.div
                className="footer-cont"
                ref={topRef}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: topAnimate ? 1 : 0, y: topAnimate ? 0 : 100 }}
                transition={{ duration: 1 }}
            >
                <h2 className="footer-head">contacts</h2>
                <div className="contact-links">
                    {footerData.map((eachItem, i) => (
                        <Link key={i} href={eachItem.link}>
                            {eachItem.title}
                        </Link>
                    ))}
                </div>
                <button className="footer-btn" onClick={scrollToTop}>
                    <MdArrowUpward style={{ display: visible ? 'inline' : 'none' }} />
                </button>
            </motion.div>
        </footer>
    );
};

export default Footer;
