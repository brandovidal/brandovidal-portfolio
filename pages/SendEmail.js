import {useRouter} from 'next/router'

const SendEmail = () => {
  const router = useRouter()
  const handleBack = () => (router.push('/'));
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Correo enviado exitosamente
          </h1>
          <p className="mb-8 leading-relaxed">
            Su consulta será contestada en breve, puede seguir navegando por nuestra página de inicio
          </p>
          <div className="flex justify-center">
            <button onClick={handleBack} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Regresar al inicio
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-50 w-full"
            height="400px"
            style={{'height': '400px'}}
            alt="Correo enviado"
            src="/email.jpg"
          />
        </div>
      </div>
    </section>
  )
};

export default SendEmail;
