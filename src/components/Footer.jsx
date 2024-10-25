/**
 * @copyright 2024 Snowflake
 * @licence Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";


const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];
  
const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/swafey-karanja'
    },
    {
        label: 'LinkedIn',
        href: 'http://www.linkedin.com/in/samuel-karanja-41abb9223'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/Swafey2'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/s.w.a.f.e.y/profilecard/?igsh=MWdpZWxmd2FibDMxZg=='
    },
    {
        label: 'CodePen',
        href: ''
    }
];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2 ">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[20ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary 
                        href="mailto:kswafeyii@gmail.com"
                        label="Start Project"
                        icon="chevron_right"
                        classes="reveal-up"
                    />

                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">
                            Sitemap
                        </p>

                        <ul>
                            {sitemap.map(({ label,href }, key) =>(
                                <li key={key}>
                                    <a
                                     href={href}
                                     className="reveal-up block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                             ))
                            }
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">
                            Socials
                        </p>

                        <ul>
                            {socials.map(({ label,href }, key) =>(
                                <li key={key}>
                                    <a
                                     href={href}
                                     target="_blank"
                                     className="reveal-up block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                             ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a
                 href="/" 
                 className="logo reveal-up"
                >
                    <img
                     src="/src/images/home/snowflake-2.svg" 
                     alt="Logo"
                     width={40}
                     height={40} 
                    />
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2024 <span className="text-zinc-200">Snowflake</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;