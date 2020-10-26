import Link from "next/link";

const Header = ({ name }) => (
  <header className="body-font fixed w-screen bg-gray-100 text-gray-900 z-10">
    <div className="container mx-auto flex flex-wrap px-3 py-3 flex-col md:flex-row items-center ">
      <Link href="/">
        <a className="flex title-font font-medium items-center text-gray-900 mr-3 mb-4 md:mb-0">
          <span className="ml-3 text-xl">{name}</span>
        </a>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#services" className="mr-5 py-2 hover:text-gray-700">
          Servicios
        </a>
        <a href="#features" className="mr-5 py-2hover:text-gray-700">
          Beneficios
        </a>
        <a href="#steps" className="mr-5 py-2hover:text-gray-700">
          Proceso
        </a>
        <a href="#contact" className="mr-5 py-2hover:text-gray-700">
          Contacto
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
