import React from "react"

// components
import Layout from "../components/layout.js"
import Jumbotron from "../components/jumbotron.js"
import CourseBox from "../components/courseBox.js"

// stylesheet
import "../stylesheets/coursework.scss"

let data = [
    {
        semester: "Freshman Year (2016-2017)",
        courses: [
            "EE 302 - Intro Electrical Engineering",
            "EE 306 - Intro to Computing",
            "EE 411 - Circuit Theory",
            "EE 319K - Intro to Embedded Systems"
        ]
    },
    {
        semester: "Senior Year (2019-2020)",
        courses: [
            "EE 461P - Data Science Principles",
            "EE 364D - Intro to Engineering Design",
            "EE 374K - Biomedical Electronics Instrumentation Design",
            "EE 464R - Research Senior Design Project"
        ]
    },
    {
        semester: "Sophomore Year (2017-2018)",
        courses: [
            "EE 312 - Software Design and Impl I",
            "EE 313 - Linear Systems and Signals",
            "EE 316 - Digital Logic Design",
            "EE 422C - Software Design and Impl 2",
            "EE 325 - Electromagnetic Engineering",
            "EE 333T - Engineering Communication",
            "M 325K - Discrete Mathematics"
        ]
    },
    {
        semester: "Junior Year (2018-2019)",
        courses: [
            "EE 438 - Fundamentals of Circuit Design I Lab",
            "EE 339 - Solid State Electronics",
            "EE 360C - Algorithms",
            "EE 461L - Software Design Lab",
            "EE 445S - Real-Time Digital Signal Proc Lab",
            "EE 351K - Probability and Random Processes",
            "EE 460M - Digital Systems Design using HDL"
        ]
    }
]


class Coursework extends React.Component {
  render() {
    var semesters = []

    data.forEach(item => {
        semesters.push(
            <CourseBox
                semester={item.semester}
                courses={item.courses}
            />
        )
    })

    return (
      <Layout>
        <Jumbotron 
            title="Coursework" 
            fullscreen="" 
            subtitle="Classes I've completed at UT Austin"
        />
        <section className="section coursework">
            <div className="container">
                <div className="columns is-multiline">
                    {semesters}
                </div>
            </div>
        </section>
      </Layout>
    )
  }
}

export default Coursework