
import '@/app/footer/footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="menuSec">
                <div className="logoFooter">
                    <img src="/Group 11 1.png" alt="" className="logoFI" />
                </div>
                <div className="menuDiv">
                    <div className="menuHeading">
                        <h3 className="menuTitle">
                            Information
                        </h3>
                    </div>
                    <div className="menuList">
                        <ul className="_menuL">
                            <li className="listItem">Main</li>
                            <li className="listItem">Gallery</li>
                            <li className="listItem">Projects</li>
                            <li className="listItem">Certifications</li>
                            <li className="listItem">Contacts</li>
                        </ul>
                    </div>
                </div>
                <div className="menuDiv">
                    <div className="menuHeading">
                        <h3 className="menuTitle">
                            Contacts
                        </h3>
                    </div>
                    <div className="menuList">
                        <ul className="_menuL menuLL">
                            <li className="listItem"><i className="fa-solid fa-location-dot"></i>&emsp;1234 Sample Street Austin Texas 787901</li>
                            <li className="listItem"><i className="fa-solid fa-phone"></i>&emsp;512.333.4444</li>
                            <li className="listItem"><i className="fa-regular fa-envelope"></i>&emsp;sampleemail@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="menuDiv">
                    <div className="menuHeading">
                        <h3 className="menuTitle">
                            Social Media
                        </h3>
                    </div>
                    <div className="menuList">
                        <ul className="_menuL row">
                            <li className="listItem"><i className="fa-brands fa-facebook-f"></i></li>
                            <li className="listItem"><i className="fa-brands fa-twitter"></i></li>
                            <li className="listItem"><i className="fa-brands fa-linkedin"></i></li>
                            <li className="listItem"><i className="fa-brands fa-pinterest-p"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copySec">
                <hr />
                <p>&copy;2021 All Rights Reserved</p>
            </div>
        </div>
    );
} 