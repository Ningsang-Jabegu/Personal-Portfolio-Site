export default function Resume_Body(){
    return(
        <article className="resume active" data-page="resume">

                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">University of The People</h4>

                            <span>2023 — running</span>

                            <p className="timeline-text">
                                In Amrit Science Campus, I have completed my first year and now parallelly I have joined the University of The People, as an BS-CS (Bachelor's of Science in Computer Scinece) student. 
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Amrit Science Campus (ASCOL)</h4>

                            <span>2022 — running</span>

                            <p className="timeline-text">
                                After a year gap due to my internal problem, I again resume my academic journey. Currently, I am doing my Bachelor's degree in Computer Science and Information Technology (BSc. CSIT).
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Arniko International Academy</h4>

                            <span>2018 — 2020</span>

                            <p className="timeline-text">
                                After I have completed my grade 10 from Dharan, I came here at Kathmandu for my further studies. I did my plus two (10 + 2) from Science stream taking computer science and mathematics as an elective.
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Zenith High School</h4>

                            <span>2015 — 2018</span>

                            <p className="timeline-text">
                                I have completed my grade 8 to grade 10 (SEE) from Zenith High School located in Dharan, Sunsari. Here, I have taken optional math and account subject as an elective.
                            </p>

                        </li>
                    </ol>

                </section>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Front End Web Developer</h4>

                            <span>2022 Dec — Present</span>

                            <p className="timeline-text">
                               I am currently working as a remote front end web developer at Chobegu Sajumlung and Zenith High School.
                            </p>

                            <span className="timeline-text-skill">
                                <b>Skills:</b> HTML, CSS, JavaScript, React, Graphics Designing, Version Control, Website Hosting, CSS frameworks, JS frameworks (some)
                            </span>
                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Front End Web Development Instructor</h4>

                            <span>2023 March — 2023 June</span>

                            <p className="timeline-text">
                               I have taught three month (90 days) Front End Web Development Bootcamp at IT Enterpreneur Nepal (currently the institute name has changed to Triangle Hunt) more than 30 students. In this 90 days massive bootcamp, I have taught the basics to intermidiate level of front end web development.
                            </p>

                            <span className="timeline-text-skill">
                                <b>Skills:</b> HTML, CSS, JavaScript, researching, collabrating, leadership, coaching
                            </span>
                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Web Master</h4>

                            <span>2019 May — 2022 Apr</span>

                            <p className="timeline-text">
                                I have worked as a webmaster in KYTCS organization. Here my job was to design, code, and deploy the static front end pages.
                            </p>
                            <span className="timeline-text-skill">
                                <b>Skills:</b> HTML, CSS, Graphics Designing, Version Control, Website Hosting, Adobe Illustrator, Figma
                              </span>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Innovation Consultant</h4>

                            <span>2022 May - 2022 July</span>

                            <p className="timeline-text">
                                I have worked in GlobalShala as a Innovation Consultant 
                            </p>
                            
                            <span className="timeline-text-skill">
                              <b>Skills:</b> communication, innovative idea, creative thinking, Adobe Photoshop cs2
                            </span>
                        </li>

                    </ol>

                </section>

                <section className="skill">

                    <h3 className="h3 skills-title">My skills</h3>

                    <ul className="skills-list content-card">

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Web design & development</h5>
                                <data value="80">80%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{width: "80%"}}></div>
                            </div>

                        </li>

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Graphic design</h5>
                                <data value="70">70%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{width: "70%"}}></div>
                            </div>

                        </li>

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Teaching</h5>
                                <data value="90">90%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{width: "90%"}}></div>
                            </div>

                        </li>

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">WordPress</h5>
                                <data value="50">50%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{width: "50%"}}></div>
                            </div>

                        </li>

                    </ul>

                </section>

        </article>
    )
}