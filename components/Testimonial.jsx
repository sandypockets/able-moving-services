const reviews = [
  {
    customerName: 'Dan N',
    customerQuote: `I needed my hot tub moved and placed in the back yard.  Able Moving came with their team of movers, assessed the situation, and made a plan to move the hot tub safely.  They lifted the hot tub onto a dolly and moved it carefully.  They also laid down boards and plexiglass so they wouldn\'t ruin my grass and newly placed sod.  Lastly, they helped remove my gate to the backyard and place it back on afterwards so the hot tub could fit through a fence. Overall, I was extremely happy with the service they provided as they did exactly what I needed.  Their movers were efficient as well as very professional and polite.  I will use them again when needed..`},
  {
    customerName: 'Jenna M',
    customerQuote: 'We were beyond happy with the service we received from Able Moving Services. We recently moved into a new home and they had items to move from two different locations. They were on time, kind, courteous, friendly, efficient, and so fast. It took them less time than expected and only charged for the time used. We would totally recommend their services.' },
  {
    customerName: 'Winifred Haire',
    customerQuote: 'Able Moving helped me move during the pandemic. Even without the complications of a pandemic, moving is stressful. However, the guys at Able Moving helped me make my move as easy as possible. I moved from North Bay to London in November 2020 for a new job opportunity. The guys at Able took great care of my belongings, and unloaded my belongings into a storage unit in order to mitigate contact. When I opened my storage unit, everything was immaculate. Nothing was broken, damaged or even scratched - I was so thankful!! I would definitely recommend these guys - especially Wade and Mike - you guys treated my stuff as if it was your own and I am so appreciative.' },
  {
    customerName: 'Jodi Butler',
    customerQuote: 'I used Able Moving to move into my new condo and I couldn\’t have been happier. The three men that moved my belongings were very professional and kind, they showed up on time and were very efficient. I would absolutely use this company again, and will always recommend them.'
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
