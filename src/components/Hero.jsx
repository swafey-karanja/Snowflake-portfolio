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
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section 
      className="pt-28 lg:pt-40"
      id="home"
    >
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">

        <div>
          <div className="flex items-center gap-3 ">
            <figure className="img-box w-9 h-9 rounded-lg ">
              <img 
                src="src/images/home/me.png" 
                alt="Snowflake portrait"
                width={60}
                height={60}
                className="img-cover" 
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Mordern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
          <ButtonPrimary 
            label="Download CV"
            icon="download"  // Adding the 'download' icon
          />


          <ButtonOutline 
            label="Scroll down"
            icon="arrow_downward"
            href="#about"
          />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 t0-65% rounded-[60px] overflow-hidden">
            <img
             src="src/images/home/orewa.png" 
             alt="Snowflake" 
             className="w-full"
             width={656}
             height={800}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero;