const reviews = [
  {
    customerName: 'Dan N',
    customerQuote: `I needed my hot tub moved and placed in the back yard.  Able Moving came with their team of movers, assessed the situation, and made a plan to move the hot tub safely.  They lifted the hot tub onto a dolly and moved it carefully.`
  },
  {
    customerName: 'Jenna M',
    customerQuote: 'We were beyond happy with the service we received from Able Moving Services.'
  },
  {
    customerName: 'Winifred H',
    customerQuote: 'Able Moving helped me move during the pandemic. Even without the complications of a pandemic, moving is stressful.'
  },
  {
    customerName: 'Jodi B',
    customerQuote: 'I used Able Moving to move into my new condo and I couldn\’t have been happier.'
  }
]

export default function Example() {
  return (
    <section className="  overflow-hidden ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl flex justify-center">What our customers have to say about us.</h2>

        {reviews.map((review) => (

          <div className="relative">
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;{review.customerQuote}&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1605214101860-84e51cf4c0db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhciUyMHNpbGhvdWV0dGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">{review.customerName}</div>

                    <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}

      </div>
    </section>
  )
}
