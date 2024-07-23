import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./component/home/hero/hero";
import MyStory from "./component/home/myStory/MyStory";
import MyProjects from "./component/home/project/MyProjects";
import MySkills from "./component/home/MySkills/MySkills";
import Footer from "./component/home/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero/>
      <MyStory/>
      <MyProjects/>
      <MySkills/>
      <Footer/>
    </main>
  );
}
