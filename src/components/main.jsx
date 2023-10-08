import mongo from '../images/mongo.png'
import ai from '../images/ai.png'
import figma from '../images/figma.png'
import node from '../images/node.png'
import mysql from '../images/mysql.png'
import python from '../images/python.png'
import react from '../images/logo.svg'
import javascript from '../images/javascript.png'
import {FaJs,FaNodeJs,FaReact,FaFigma,FaPython,FaGithub} from 'react-icons/fa6'
import {DiMongodb, DiMysql} from 'react-icons/di'


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
                     <div className="icon"><FaJs color='white' size={50}/></div>  <p>
                        Javascript
                        (Language)
                      </p>
                     
                     
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="icon">
                      <FaNodeJs color='white' size={50}/>
                      </div> <p>
                        Node.js
                        (Backend)
                      </p>
                    
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="icon"><FaReact color='white' size={50}/></div>   <p>
                        React
                        (Library)
                      </p>
                      
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="icon"><DiMongodb color='white' size={50} /></div>  <p>
                        Mongodb
                        (Database)
                      </p>
                     
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="icon"><DiMysql color='white' size={50}/></div>    <p>
                        MySQL
                        (Database)
                      </p>
                     
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="icon"><FaFigma  color='white' size={50} /></div> <p>
                        UI/UX (Figma)
                      </p>
                     
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="icon"><FaPython color='white' size={50}/></div> <p>
                        python
                        (Language)
                    </p>
                      
                    </div>
                  </li>
                  <li className='center-img'>
                    <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="icon"><FaGithub color='white' size={50} /></div>  <p>
                        Github
                      </p>
    
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
  