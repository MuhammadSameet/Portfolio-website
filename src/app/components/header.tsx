import Link from "next/link"


export default function Header(){
    return (
      
        <div className="header">
            <ul className="header-button">
                <Link href={"/"}>
                <li className="h-button">Home</li>
                </Link>
                <Link href={"/skill"}>
                <li className="h-button">Skills</li>
                </Link>
                <Link href={"/about"}>
                <li className="h-button">About us</li>
                </Link>
                <Link href={"/contact"}>
                <li className="h-button">Contact</li>
                </Link>
            </ul>
        </div>
    )
}