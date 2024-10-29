import Image from "next/image";
import image1 from "@/app/components/assets/picsart.sameet.webp"



export default function Home() {
  return (
    <>
    <div className="portfolio">
      <div className="paragraph">
      
      <p className="para"><span>My name is Muhammad Sameet.</span> I am a passionate web developer in training. Currently, I am honing my skills in HTML, CSS, TypeScript, and Next.js as part of my studies at the Governor Sindh IT Initiative, Karachi. With a dedication to mastering modern web technologies, I am excited to create dynamic, user-friendly web experiences.
      </p>
      <button className="home-contact-button">Contact ME</button></div>
      
      
      <div className="boy-img"><Image src={image1} alt="office boy image" /></div>
      
      </div>
      
   </>
  );
}
