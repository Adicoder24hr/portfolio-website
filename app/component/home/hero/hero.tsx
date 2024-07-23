'use client'

import React from 'react';
import Border from '../../ui/border/Border';
import "./style.scss";
import Image from 'next/image';
import ImageSize from '@/utils/imageSizes';
import { ReactTyped } from 'react-typed';

const Hero = ()=>{

    return <section id='homehero'>
        <div className="left">
        <Border>
            Junior
        </Border>
        <h1>{" "} <ReactTyped strings={["front-end \n developer"]} typeSpeed={150}/></h1>
        <div className="desc">
            <p>Hi there! <br/>My name is aditya and i am 20 years old ambitious junior front-end developer. Now i am looking for a new position and new challenges.</p>

            <p>My goal is to learn something new every day. improve my skills and solve users and buisness issues. i can quickly analyze problems and solve them both independently and in a team.</p>
        </div>
        </div>
        <div className="right">
            <div className="img-cont">
            <Image
            sizes={ImageSize.cardSize}
            fill 
            src="/profile/image/aditya_profile.jpg" alt='aditya bhalerao profile picture'></Image>
            </div>
        </div>
    </section>
}

export default Hero;