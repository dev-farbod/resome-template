import React, { useState } from 'react';
import "./project.scss"
const Project = () => {

    const [sliderIndex, setSliderIndex] = useState(0)


    const slide = (op) => {
        const to_show = 3
        if (op === 1 && sliderIndex === 0) return
        if (op === -1 && Math.abs(sliderIndex) === slides.length - to_show) return
        const element = document.querySelector("#slider")
        element.style.transform = `translate(${(sliderIndex + op) * 22}rem)`
        setSliderIndex(prv => prv + op)
    }


    const slides = [
        {
            title: "Dex",
            dis: "Decentralized exchange powerd by web 3 , react js and express full socket connection and responsive",
            link: "http://greendex.exchange",
        },
        {
            title: "Hosting Manager",
            dis: "Web app for manage hosting service and support clients.Powerd by React and Express",
            link: "https://nestore.ir/",
        },
        {
            title: "Online Education",
            dis: "Platform created for webinars and online video confrans",
            link: "https://daaraanedu.ir",
        },
        {
            title: "eComers",
            dis: "full options online shop with online payment",
            link: "http://polaarisbrand.com",
        },
        {
            title: "School assitens",
            dis: "web app for schools students registion and online classes",
            link: "https://erfanschoolabhar.ir",
        },
    ]




    return (
        <div className="projects-container">

            <div className="project container">

                <div className="g-title">
                    Last Working  <span>PROJECTS</span>
                </div>
            </div>


            <div className="slider-container container">

                <div className="left"><i className="fas fa-arrow-left" onClick={() => { slide(1) }}></i></div>
                <div className="slider-body">
                    <div className="all-slides" id="slider">
                        {slides.map((each, index) => <div className="each-slider">
                            <div className="img">
                                <img src={`images/projects/${index}.png`} alt="" />
                            </div>
                            <div className="title">{each.title}</div>
                            <div className="dis">{each.dis}</div>
                            <a href={each.link} target="_blank" className="link">visite website</a>
                        </div>)}
                    </div>

                </div>
                <div className="right" onClick={() => { slide(-1) }}>
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>


        </div>
    );
}

export default Project;