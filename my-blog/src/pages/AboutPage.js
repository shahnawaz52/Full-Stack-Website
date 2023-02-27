import { GoMarkGithub } from "react-icons/go";

const AboutPage = () => {
    return (
        <>
        <h1>About Me</h1>
        <div className="row">
            <div className="column align-image">
                <img src={window.location.origin + '/20220821_152113__01.jpg'} alt="" height="400px" width="400px" className="my-image"/>
            </div>
            <div className="column align-image">
                <a href="https://github.com/shahnawaz52" target="_blank">
                    <button className="gitbtn">
                     <GoMarkGithub/> Github
                    </button>
                </a>
            </div>
        </div>
        <p className="about-me">
            I am Shahnawaz Idariya, currently I am pursuing my Masters in Computer Engineering at
            San Jose State University. I have 2 years of experience in ERP Software Development and 
            with that experience I have mastered in technologies such as Javascript, Object Relational Mapping,
            PostgreSQL, Python, XML. As an Odoo developer, my responsibilities were customizing the 
            system, migrating code and data, creating business intelligence reports, designing output documents, 
            conducting functional and user acceptance testing, implementing automation and unit testing for the 
            Odoo platform
        </p>
    </>
    )
}

export default AboutPage;