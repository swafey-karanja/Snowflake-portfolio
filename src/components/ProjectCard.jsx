/**
 * @copyright 2024 Snowflake
 * @licence Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";

/**
 * Components
 */



const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={`relative flex flex-col h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}>
        <figure className="img-box rounded-lg flex-1">
            <img
             src={imgSrc} 
             alt={title} 
             className="w-full h-full object-cover rounded-lg"
             loading="lazy" 
            />
        </figure>

        <div className="mt-auto pt-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="w-full sm:w-auto">
                    <h3 className="title-1 mb-3 text-base sm:text-lg lg:text-xl">
                        {title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span
                             className="h-6 sm:h-8 text-xs sm:text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-2 sm:px-3 rounded-lg"
                             key={key}
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 ml-auto sm:ml-0">
                    <span
                     className="material-symbols-rounded text-base sm:text-lg"
                     aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
            </div>
        </div>

        <a
         href={projectLink}
         target="_blank"
         className="absolute inset-0"
         rel="noopener noreferrer"
        >
            <span className="sr-only">Learn more about {title}</span>
        </a>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default ProjectCard;