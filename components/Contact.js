import React, { useState } from "react";
import { render } from "react-dom";
import {  useRouter } from 'next/router'

const Contact = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" })
  const router = useRouter()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handlePress = () => {
    const { name, email, message } = state;
    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    }).then((response) => {
      console.log("handlePress ", response);
      if (!response || !response.ok) {
        return;
      }
      router.push('/SendEmail')
    });
  };

  return (
    <>
      <section id="contact" className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contáctame
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Este es el primer paso para darte a conocer por Internet. Hagamos
              juntos esta transformación digital
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  placeholder="Correo"
                  name="email"
                  type="email"
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 w-full">
                <textarea
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                  placeholder="Mensaje"
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg shadow"
                  onClick={handlePress}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
