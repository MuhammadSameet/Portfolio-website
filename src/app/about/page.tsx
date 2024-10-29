
import Image from "next/image";
import image1 from "@/app/components/assets/picsart.sameet.webp"


export default function About() {
  return (
    <>
    <div className="about">
      <div className="about-paragraph">
        <h2>About Us</h2>
      <div className="boy-img-about"><Image src={image1} alt="office boy image" /></div>
      <p className="about-para"><span>My name is Muhammad Sameet.</span> I am a passionate web developer in training. Currently, I am honing my skills in HTML, CSS, TypeScript, and Next.js as part of my studies at the Governor Sindh IT Initiative, Karachi. With a dedication to mastering modern web technologies, I am excited to create dynamic, user-friendly web experiences.
      </p>
      </div>
      
      
      
      
      </div>
    
    
    
    
    
    
    </>
  );
}