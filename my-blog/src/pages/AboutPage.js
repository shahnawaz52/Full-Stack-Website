import GitHubButton from 'react-github-btn'

const AboutPage = () => {
    return (
        <>
        <h1>About Me</h1>
        <div className='row ml-3 d-flex'>
            <div className="column">
                <img src={window.location.origin + '/20220821_152113__01.jpg'} alt="" height="400px" width="400px"/>
            </div>
            <GitHubButton href="https://github.com/shahnawaz52">Github</GitHubButton>
        </div>
        <p>
            I am Shahnawaz Idariya, currently I am pursuing my Masters in Computer Engineering at
            San Jose State University. I have 2 years of experience in ERP Software Development and 
            with that experience I have mastered in technologies such as Javascript, Object Relational Mapping,
            PostgreSQL, Python, XML. As an Odoo developer, my responsibilities were customizing the 
            system, migrating code and data, creating business intelligence reports, designing output documents, 
            conducting functional and user acceptance testing, implementing automation and unit testing for the 
            Odoo platform
        </p>
        <p>
            Welcome to my blog! Proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.
        </p>
        <p>
            Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.,
        </p>
        <p>
            Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.,
        </p>
    </>
    )
}

export default AboutPage;