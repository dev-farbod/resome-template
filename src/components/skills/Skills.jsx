import React, { useEffect } from 'react';
import "./skills.scss"
import * as EasyPieChart from "easy-pie-chart"


const Skills = () => {


    const skills = [
        {
            name: "HTML/CSS",
            persent: 90
        },
        {
            name: "JavaScript",
            persent: 85
        },
        {
            name: "React .js",
            persent: 85
        },
        {
            name: "Node .js",
            persent: 80
        },
        {
            name: "Express",
            persent: 90
        },
        {
            name: "Mongo DB",
            persent: 75
        },
        {
            name: "Socket Programing",
            persent: 70
        },
        {
            name: "REST API",
            persent: 75
        },
    ]


    useEffect(() => {

        skills.forEach((each, index) => {

            var element = document.querySelector(`.chart-${index}`);
            new EasyPieChart(element, {
                scaleColor: "#000",
                barColor: "#0ad663",
                size: "200",
                lineWidth: "10"
            });

        })
    }, [])


    return (
        <div className="skills-container">
            <div className="skills container">
                <div className="g-title">
                    experience And <span>SKILS</span>
                </div>

                <div className="skills-container">
                    {skills.map((skill, index) =>
                        <div className="each-chart">
                            <div class={`chart chart-${index}`} data-percent={skill.persent}><span>{skill.persent}%</span></div>
                            <div className="label">
                                {skill.name}
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}

export default Skills;