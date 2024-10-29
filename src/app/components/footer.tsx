import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer">
        <div className="company-section">
            <h3>Company</h3>
        <ul>
            <Link href="/"><li className="f-button">Home</li></Link>
            <Link href="/about"><li  className="f-button">About us</li></Link>
            <Link href="/contact"><li  className="f-button">Contact</li></Link>
        </ul>
        </div>
        <div className="social-media-section">
        <h3 >Social Media</h3>
        <ul>
        <Link href="https://www.linkedin.com/in/muhammad-sameet-shahid/"><li className="f-button">Linkedin</li></Link>
        <Link href="#"><li className="f-button">Facebook</li></Link>
        <Link href="https://github.com/MuhammadSameet"> <li className="f-button">Github</li></Link>
        </ul>
        </div>
        </div>
       
    )
}