import React from 'react';
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="foter-body container">
                <div className="content">
                    <div className="form">
                        <div className="f-title">
                            Have a project?
                        </div>
                        <div className="input">
                            <input type="text" placeholder="email or phone" />
                        </div>
                        <div className="input">
                            <textarea type="text" placeholder="your project" />
                        </div>
                        <div className="button">
                            <button>
                                submit
                            </button>
                        </div>
                    </div>
                    <div className="connect">
                        <div className="f-title">
                            Connect with me
                        </div>
                        <ul className="list">
                          
                            <li>
                                <div className="icon"><i class="fas fa-envelope"></i>email:</div>
                                <div className="dis">
                                    f.aliakbari302@gmail.com
                                </div>
                            </li>
                            <li>
                                <div className="icon"><i className="fas fa-phone"></i>phone: </div>
                                <div className="dis">
                                    +98-903-693-3881
                                </div>
                            </li>
                            <li>
                                <div className="icon"><i className="fab fa-github"></i>Github:</div>
                                <div className="dis">
                                    farbod-dev
                                </div>
                            </li>
                            <li>
                                <div className="icon"><i className="fab fa-instagram"></i>Instagram:</div>
                                <div className="dis">@farbod_302</div>
                            </li>
                            <li>
                                <div className="icon"><i className="fab fa-whatsapp"></i>WhatsApp:</div>
                                <div className="dis"></div>
                            </li>
                            <li>
                                <div className="icon"><i className="fab fa-linkedin"></i>LinkedIn:</div>
                                <div className="dis"></div>
                            </li>


                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;