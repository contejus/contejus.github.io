import React from "react";
import "../stylesheets/footer.scss";

class CourseBox extends React.Component {
    render() {
        var courseList = []

        this.props.courses.forEach(course => {
            courseList.push(
                <a class="panel-block">
                    {course}
                </a>
            )
        })

        return (
            <div className="column is-6">
                <article class="panel is-primary courses">
                    <p class="panel-heading">
                        {this.props.semester}
                    </p>
                    {courseList}
                </article>
            </div>
        )
    }
}

export default CourseBox