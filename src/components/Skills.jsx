/**
 * @copyright 2024 Snowflake
 * @licence Apache-2.0
 */

/**
 * Node Modules
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItems = [
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        label: 'Flutter',
        desc: 'Mobile User Interface'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        label: 'VueJS',
        desc: 'Framework'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        label: 'AngularJS',
        desc: 'Framework'
    },
    {
        imgSrc: 'src/images/tailwind-css.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        label: 'Python',
        desc: 'Back End'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        label: 'Google Cloud',
        desc: 'Cloud platform'
    },
];


const Skills = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Technologies and Tools I Use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[100ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {skillItems.map(({ imgSrc, label, desc }, key)=> (
                    <SkillCard 
                      key={key}
                      imgSrc={imgSrc}
                      label={label}
                      desc={desc}
                      classes="reveal-up"
                    />
                 ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills;