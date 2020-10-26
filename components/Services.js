const Services = () => (
  <section id="services" className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">
          Servicios
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ¿Qué te puedo ofrecer?
        </h1>
      </div>
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <img
          loading="lazy"
          alt="Coding"
          className="object-cover object-center h-full w-full rounded-lg"
          src="/code.jpg"
        />
      </div>
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Landing Page
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                ¿Quieres atraer a más usuarios? ¿Buscas fidelizar a tus
                clientes? Hagamosla realidad.
              </p>
              <a
                href="#contact"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Saber Más
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Desarrollo Web
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                ¿Necesitas una página que venda? ¿Necesitas darte a conocer en
                internet? Esta es la opción indicada para ti.
              </p>
              <a
                href="#contact"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Saber Más
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                E-commerce
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                ¿Quieres crear tu tienda online? ¿Necesitas vender algo por
                internet? Consigue la mejor perfomance y velocidad del mercado.
              </p>
              <a
                href="#contact"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Saber Más
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
