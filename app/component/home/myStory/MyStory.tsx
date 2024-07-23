'use client'

import { Element } from "react-scroll";
import "./style.scss";
import Image from "next/image";
import ImageSize from '@/utils/imageSizes';
import Border from "../../ui/border/Border";
import { IoMdReturnRight } from "react-icons/io";
import { ReactTyped } from "react-typed";
import useAnimateOnView from "../../ui/useAnimateOnView/useAnimateOnView";
import { motion } from "framer-motion";
import { blob } from "stream/consumers";

const MyStory = () => {
  const { ref: sectionRef, animate: sectionAnimate } = useAnimateOnView({ threshold: 0.1 });
  const { ref: workflowLeftRef, animate: workflowLeftAnimate } = useAnimateOnView({ threshold: 0.1 });
  const { ref: workflowRightRef, animate: workflowRightAnimate } = useAnimateOnView({ threshold: 0.1 });

  const Text2 = `I'm a real team player.`;
  const Text4 = `"-</Cory House>"`;

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
    <Element name="myStory">
      <section id="myStory" ref={sectionRef}>
        <div className="left">
          <h2>
            {" "}
            <ReactTyped
              strings={[
                "I'm writing my story so that others might see fragments of themselves.",
              ]}
              typeSpeed={40}
              startWhenVisible
            />
          </h2>
          <motion.div
            className="image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: sectionAnimate ? 1 : 0, x: sectionAnimate ? 0 : -50 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              sizes={ImageSize.cardSize}
              fill
              src="/profile/image/aditya_profile.jpg"
              alt="aditya bhalerao profile picture"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
        <div className="right">
          <div className="mystory-desc">
            <h2>
              {" "}
              <ReactTyped
                strings={["my story"]}
                typeSpeed={70}
                startWhenVisible
              />
            </h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: sectionAnimate ? 1 : 0, x: sectionAnimate ? 0 : 50 }}
              transition={{ duration: 0.5 }}
            >
              Hi there, my name is Aditya, I am 20 years old.
              <br />
              Even from a young age, I liked computer technology, I was always
              interested in the news and trends of IT technologies with great
              pleasure.
              <br />
              Then I realized that I really want to develop myself in the IT
              direction because this field is developing very dynamically and I
              wanted to keep up with the times.
              <br />
              The further I went, the more inspiration and the desire to study
              programming in more depth came to me.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: sectionAnimate ? 1 : 0, x: sectionAnimate ? 0 : 50 }}
              transition={{ duration: 0.5 }}
            >
              I am an open-minded and determined person, I learn quickly, I like
              to learn new things.
              <br />
              My hobbies are computer diagnostics of cars, traveling.
              wakeboarding, and active pastime.
              <br />
              I believe that working for you, I will be able to bring something
              new and useful to your teams, in turn, I will apply all my
              knowledge so that the company becomes even more promising, and the
              team becomes even more productive and friendly, since I am a
              person who will always bring with a good mood and motivation to
              work.
            </motion.p>
          </div>
          <div className="resume">
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: sectionAnimate ? 1 : 0, x: sectionAnimate ? 0 : 10 }}
              transition={{ duration: 0.5 }}
            >
              {Text2}
            </motion.p>
            <button id="border" onClick={onButtonClick}>Get my resume</button>
          </div>
        </div>
        <div className="end-cont">
          <div className="qoute-para">
            <p id="end-para">
              {" "}
              <ReactTyped
                strings={[
                  " Code is like humor. When you have to explain it, it's bad",
                ]}
                typeSpeed={50}
                startWhenVisible
              />{" "}
              <span id="qoute">{Text4}</span>
            </p>
          </div>
        </div>

        <div className="workflow">
          <motion.div
            className="left-workflow"
            ref={workflowLeftRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: workflowLeftAnimate ? 1 : 0, y: workflowLeftAnimate ? 0 : 100 }}
            transition={{ duration: 1 }}
          >
            <p className="my-wrokflow">my workflow</p>
            <IoMdReturnRight />
          </motion.div>
          <motion.div
            className="right-workflow"
            ref={workflowRightRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: workflowRightAnimate ? 1 : 0, x: workflowRightAnimate ? 0 : 100 }}
            transition={{ duration: 1 }}
          >
            <div className="works" id="first">
              <p className="no">01</p>
              <p className="my-work">requirements analysis</p>
            </div>
            <div className="works">
              <p className="no">02</p>
              <p className="my-work">ask about deadlines and restrictions</p>
            </div>
            <div className="works">
              <p className="no">03</p>
              <p className="my-work">setting up the environment</p>
            </div>
            <div className="works">
              <p className="no">04</p>
              <p className="my-work">programming</p>
            </div>
            <div className="works">
              <p className="no">05</p>
              <p className="my-work">testing my results</p>
            </div>
            <div className="works">
              <p className="no">06</p>
              <p className="my-work">supporting and scaling my code</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
}

export default MyStory;
