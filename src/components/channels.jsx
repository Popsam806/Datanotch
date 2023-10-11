/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import javascript from '../images/javascript.png'

import reactimg from '../images/logo.svg'
import pythonimg from '../images/python.png'
import mongo from '../images/mongo.png'
import mysql from '../images/1.png'
import figma from '../images/figma1.png'
import node from '../images/node.png'
import css from '../images/css.png'

const products = [
    {
      id: 1,
      name: 'Javascript Channel',
      href: '#',
      price: '48k subscribers',
      imageSrc: javascript,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    
    {
      id: 3,
      name: 'Python Channel',
      href: '#',
      price: '4k subscribers',
      imageSrc: pythonimg,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Mongodb Channel',
      href: '#',
      price: '8k subscribers',
      imageSrc: mongo,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
   
      {
        id: 6,
        name: 'Figma Channel',
        href: '#',
        price: '4.3k subscribers',
        imageSrc: figma,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 7,
        name: 'Nodejs Channel',
        href: '#',
        price: '4.5k subscribers',
        imageSrc: node,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 2,
        name: 'React Channel',
        href: '#',
        price: '4.8k subscribers',
        imageSrc: reactimg,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 5,
        name: 'MySql Channel',
        href: '#',
        price: '4.3k subscribers',
        imageSrc: mysql,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 8,
        name: 'Css Channel',
        href: '#',
        price: '4.5k subscribers',
        imageSrc: css,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]
  
  export default function Channels() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {[...products].map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    style={product.name.split(' ')[0] === 'React'?{height:'250px'}:{}}
                    className="w-full h-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                {/* <div className="relative mt-6">
                    <p className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                   >Signin to channel</p>
                    <div className="absolute inset-y-1 right-1 flex justify-end">
                      <button
                        type="submit"
                        aria-label="Submit"
                        className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                      >
                        <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div> */}
                 <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  