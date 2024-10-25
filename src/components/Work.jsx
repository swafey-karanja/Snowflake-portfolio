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
import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: 'images/work/socialMedia.jpg',
      title: 'Full social media app',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://github.com/swafey-karanja/fullstack-social-media-App'
    },
    {
      imgSrc: 'images/work/hotelApp.jpeg',
      title: 'Hotel Management App',
      tags: ['API', 'CMS'],
      projectLink: 'https://github.com/swafey-karanja/hotelmanagementapp'
    },
    {
      imgSrc: 'images/work/AIApp.webp',
      title: 'AI Animal Husbandry Web App',
      tags: ['Development', 'AI'],
      projectLink: 'https://github.com/swafey-karanja/AI-based-Animal-Husbandry-system'
    },
    {
      imgSrc: 'images/work/ticketApp.webp',
      title: 'Ticket Website',
      tags: ['Web-design', 'Front-end Development'],
      projectLink: 'https://github.com/swafey-karanja/TicketingApp'
    },
    {
      imgSrc: 'images/work/schoolManagement.png',
      title: 'School Management website',
      tags: ['Management', 'Front-end Development'],
      projectLink: 'https://github.com/swafey-karanja/schoolManagementApp'
    },
    {
      imgSrc: 'images/work/portfolio.jpg',
      title: 'Personal portfolio',
      tags: ['Web-design', 'Front-end Development'],
      projectLink: 'https://github.com/swafey-karanja/Snowflake-portfolio'
    },
    {
      imgSrc: 'images/work/mteja.jpg',
      title: 'Mteja Website',
      tags: ['Web-design', 'Front-end Development'],
      projectLink: 'https://mteja.co.ke/'
    },
    {
      imgSrc: 'images/work/shamba.jpg',
      title: 'Shamba Solutions Website',
      tags: ['Web-design', 'Front-end Development'],
      projectLink: 'https://www.ycenterssl.com/'
    },
    {
      imgSrc: 'images/work/Piczangu.jpg',
      title: 'PicZangu Website',
      tags: ['Web-design', 'Front-end Development'],
      projectLink: 'https://piczangu.com/'
    },
  ];


const Work = () => {
  return (
    <section
     className="section"
     id="work"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key)=>(
                    <ProjectCard
                      key={key}
                      imgSrc={imgSrc}
                      title={title}
                      tags={tags}
                      projectLink={projectLink}
                      classes="reveal-up"
                    />
                 ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work;