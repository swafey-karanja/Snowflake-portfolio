/**
 * @copyright 2024 Snowflake
 * @licence Apache-2.0
 */

import ReviewCard from "./ReviewCard";

/**
 * Node Modules
 */

/**
 * Components
 */


const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: 'src/images/people/people-1.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: 'src/images/people/people-2.jpg',
    company: 'NexaWave'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: 'src/images/people/people-3.jpg',
    company: 'CodeCraft'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: 'src/images/people/people-4.jpg',
    company: 'BrightWeb'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: 'src/images/people/people-5.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: 'src/images/people/people-6.jpg',
    company: 'Skyline Digital'
  }
];

const Review = () => {
  return (
    <section
     className="section overflow-hidden"
     id="reviews" 
    >
      <div className="container">
        <h2 className="headline-2 mb-8">
          What Clients Say
        </h2>

        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
              <ReviewCard 
                key={key}
                imgSrc={imgSrc}
                name={name}
                company={company}
                content={content}
              />
           ))
          }
        </div>
      </div>
    </section>
  )
}

export default Review;