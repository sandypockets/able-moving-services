import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Full homes',
    description: 'No matter how many bedrooms, we can get your stuff there. Safe and sound.',
  },
  {
    name: 'Offices',
    description: 'Get your equipment to where it needs to be.',
  },
  {
    name: 'City to City',
    description: 'Across town or across the province, we\'ve got you covered.',
  },
  {
    name: 'Pack-safe',
    description: 'We\'ll get your things from A to B in one piece.',
  },
  {
    name: 'Proven Track Record',
    description: 'A dedicated team, with decades of experience.',
  },
  {
    name: 'Locally Owned',
    description: 'A familiar face you can trust.',
  },
  {
    name: 'Instruments',
    description: 'Moving a piano? We can get it there in tune.',
  },
  {
    name: 'Reasonably Priced',
    description: 'A safe move, that won\'t break the bank.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">We'll get you there.</h2>
          <p className="mt-4 text-lg text-gray-500">
            Whether you're moving your family to a new home, relocating offices, or need to get a priceless piano out of your basement, we're here.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
