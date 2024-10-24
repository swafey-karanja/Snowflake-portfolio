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
import Skills from "./Skills";


const aboutItems = [
    {
        label: 'Projects done',
        number: 45
    },
    {
        label: 'Years of experience',
        number: 2
    }
];

const About = () => {
  return (
    <section
     id="about"
     className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:pt-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[90ch] ">
                    Welcome! I&apos;m Sam, a professional web 
                    developer and mobile application developer 
                    with a knack for crafting visually stunning 
                    and highly functional websites. Combining 
                    creativity and technical expertise. I transform 
                    your vision into digital masterpiece that excels 
                    in both appearance and performance.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({ label, number }, key)=>(
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold text-xl md:text-2xl ml-1">+</span>
                            </div>

                            <p className="text-sm text-zinc-400 ">{label}</p>
                        </div>
                     ))
                    }

                    <img
                     src="src/images/home/snowflake-2.svg" 
                     alt="Logo"
                     height={30}
                     width={30}
                     className="ml-auto md:w-[40px] md:h-[40px]" 
                    />
                </div>
            </div>
        </div>

        <Skills />
    </section>
  )
}

export default About;