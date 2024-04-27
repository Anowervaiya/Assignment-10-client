import React from 'react'

function AboutUs() {
  return (
    <section className=" min-h-screen pt-16  bg-gray-100 text-gray-800">
      <div className="container p-4 mx-auto space-y-1 text-center">
        <h2 className="pb-3 text-3xl font-bold md:text-4xl">About Us</h2>
        <p>
          At Book Shop, we believe that books have the power to inspire,
          educate, and transform lives. Whether you're a seasoned reader or just
          beginning your literary journey, we offer a diverse selection of
          titles to cater to every interest and taste. From classic literature
          to contemporary bestsellers, from fiction to non-fiction, from
          thrillers to romance, we strive to curate a collection that appeals to
          readers of all ages and backgrounds.
        </p>
      </div>
      <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col px-8 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">
            Team
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-gray-600">
            Our team is comprised of avid readers, dedicated professionals, and
            lovers of literature, all united by a shared enthusiasm for books
            and a commitment to excellence.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-default-600"
            href="/components"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">
            Delivary
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-gray-600">
            Fast, reliable delivery nationwide. Get your books promptly and
            securely delivered to your doorstep. Satisfaction guaranteed.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-default-600"
            href="/sections"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">
            Why you buy our product?
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-gray-600">
            Choose us for our vast selection, personalized recommendations, fast
            delivery, exceptional service, and commitment to fostering a love
            for reading.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-default-600"
            href="/templates"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">
            Customization
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-gray-600">
            Experience tailor-made book recommendations and personalized service
            to match your unique reading preferences and interests.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-default-600"
            href="/docs"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs