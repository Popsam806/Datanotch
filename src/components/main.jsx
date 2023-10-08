import mongo from '../images/mongo.png'
import ai from '../images/ai.png'
import figma from '../images/figma.png'
import node from '../images/node.png'
import mysql from '../images/mysql.png'
import python from '../images/python.png'
import react from '../images/logo.svg'
import javascript from '../images/javascript.png'


export default function Main({children}) {

    const scale = 0.4
    return (
      <main className="w-full flex-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-3xl" style={{ opacity: 1, transform: 'none' }}>
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl">
              Empowering Beginners in Tech: Elevating Skillsets.
              </h1>
              <p className="mt-6 text-xl text-neutral-600">
              Join us to learn tech effortlessly. We're here to empower beginners with accessible resources and personalized guidance. Discover the world of technology with us today!
            </p>
            </div>
          </div>
        </div>
        <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="flex items-center gap-x-8" style={{ opacity: 1, transform: 'none' }}>
                <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                We provide an extensive selection of top-tier tech stacks.
                </h2>
                <div className="h-px flex-auto bg-neutral-800"></div>
              </div>
              <div>
                <ul role="list" className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 img-list-ext">
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <p>
                        Javascript
                        (Language)
                      </p>
                      <img
                        alt="Phobia"
                        loading="lazy"
                        width="184"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent', transform:`scale(${scale})` }}
                        src={javascript}
                      />
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                     <p>
                        Node.js
                        (Backend)
                      </p>
                     <img
                        alt="Family Fund"
                        loading="lazy"
                        width="184"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent',transform:`scale(${scale})` }}
                        src={node}
                      />
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <p>
                        React
                        (Library)
                      </p>
                      <img
                        alt="Unseal"
                        loading="lazy"
                        width="184"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent',transform:`scale(${scale})` }}
                        src={react}
                      />
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <p>
                        Mongodb
                        (Database)
                      </p>
                      <img
                        alt="Mail Smirk"
                        loading="lazy"
                        width="184"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent',transform:`scale(${scale})` }}
                        src={mongo}
                      />
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                       <p>
                        MySQL
                        (Database)
                      </p>
                      <img
                        alt="Home Work"
                        loading="lazy"
                        width="184"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' ,transform:`scale(${scale})`}}
                        src={mysql}
                      />
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <p>
                        UI/UX (Figma)
                      </p>
                      <img
                        alt="Green Life"
                        loading="lazy"
                        width="184"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent',transform:`scale(${scale})` }}
                        src={figma}
                      />
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <p>
                        python
                        (Language)
                    </p>
                      <img
                        alt="Bright Path"
                        loading="lazy"
                        width="184"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' ,transform:`scale(${scale})`}}
                        src={python}
                      />
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <p>
                        Graphic Design
                      </p>
                      <img
                        alt="North Adventures"
                        loading="lazy"
                        width="184"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' ,transform:`scale(${scale})` }}
                        src={ai}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Add more sections */}
        {
            children
        }
      </main>
    );
  }
  