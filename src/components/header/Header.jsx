import React from 'react';
import "./header.scss"

const Header = () => {
    return (
        <div className="header-container">

            <div className="header container">
                <div className="social-media">
                    <ul>
                        <li>
                            <div className="icon"><i className="fab fa-github"></i></div>
                            <div className="link">Github</div>
                        </li>
                        <li>
                            <div className="icon"><i className="fab fa-linkedin"></i></div>
                            <div className="link">Linked In</div>
                        </li>
                        <li>
                            <div className="icon"><i className="fab fa-instagram"></i></div>
                            <div className="link">Instagram</div>
                        </li>
                        <li>
                            <div className="icon"><i className="fab fa-whatsapp"></i></div>
                            <div className="link">Whats App</div>
                        </li>
                       
                    </ul>
                </div>
                <div className="img">
                    <img src="/images/header-img.png" alt="" />
                </div>
                <div className="info">
                    hi, i'm
                    <div className="title">
                        Farbod Aliakbari
                    </div>
                    <div className="sub-title">
                        25 years old / Iran / Zanjan
                    </div>

                    <div className="dis">
                        full stack web developer<br />
                        with 4 year experience
                    </div>
                    <div className="services">
                        My services
                    </div>
                    <ul className="services">
                        <li>
                            <div className="icon">
                                <img src="/images/1.png" alt="" />
                            </div>
                            <div className="text">
                                Front-end Developer
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src="/images/2.png" alt="" />

                            </div>
                            <div className="text">
                                Back-end developer
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src="/images/3.png" alt="" />

                            </div>
                            <div className="text">
                            Data base Administrator
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;