
import "@/app/header/header.css";

export default function Header(){
    return(
        <div className="outterDiv">
            <div className="logo">
                <img src="/Group 11.png" alt="logo" className="logoImg" />
            </div>
            <div className="menu">
                <ul className="menuList">
                    <li className="menu_Li">MAIN</li>
                    <li className="menu_Li">GALLERY</li>
                    <li className="menu_Li">PROJECTS</li>
                    <li className="menu_Li">CERTIFICATIONS</li>
                    <li className="menu_Li">CONTACTS</li>
                </ul>
            </div>
        </div>
    );
};