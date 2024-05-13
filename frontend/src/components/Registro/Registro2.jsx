import React, { useState } from 'react';

const Registro2 = ({ handleShowRegistro, actualizarEstado }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si se han proporcionado tanto el nombre como el correo electrónico
    if (formData.Name && formData.Email) {
      // Llamar a la función Submit solo si se han proporcionado ambos datos
      Submit();
    } else {
      // Mostrar un mensaje de error o realizar alguna acción adicional si falta algún dato
      alert('Complete the fields or quit the form.');
    }
  };

  const Submit = () => {
    const formDatab = new FormData();
    for (const key in formData) {
      formDatab.append(key, formData[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwVvIFlBkWy5lq9jfAyzzLfBbPVnyebOFGQ-e31nGecLQG3ywWur8zl5d_ksp3PJ16S/exec",
      {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    window.fbq("trackCustom", "FormSubmitted");
    actualizarEstado(true);
  };

  const handleClick = () => {
    handleShowRegistro();
  };

  return (
    <div className="App p-4 space-y-4 w-[400px]">
      <div className="flex flex-wrap justify-between">
        <h1 className="tracking-widest text-xl">SIGN UP TO RECEIVE</h1>
        <div
          className="bg-gray-700 px-2 text-white cursor-pointer"
          onClick={handleClick}
        >
          x
        </div>
      </div>
      <h1 className="text-left">
      Subscribe to receive more educational content and skincare routines.
      </h1>
      <div>
        <form
          className="flex flex-wrap space-y-2 "
          onSubmit={handleSubmit}
        >
          <input
            className="w-full border-gray-700 border-[1px] py-2 px-2 focus:outline-none focus:border-gray-700"
            placeholder="Your Name"
            name="Name"
            type="text"
            value={formData.Name}
            onChange={handleChange}
          />
          <input
            className="w-[80%] border-gray-700 border-[1px] py-2 px-2 focus:outline-none focus:border-gray-700"
            placeholder="Your Email"
            name="Email"
            type="text"
            value={formData.Email}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="w-[20%] bg-gray-700 text-white p-2 cursor-pointer"
            value="Submit"
          />
        </form>
      </div>
      <div className="w-full flex justify-center px-12">
        <img
          className="lg:w-2/3"
          src="https://ifbeauty.com.au/cdn/shop/files/Untitled-2_5d5334ce-3bfb-45eb-a2c5-d56c3e19c8ad_540x.jpg?v=1629700430"
          alt=""
        />
      </div>
    </div>
  );
};

export default Registro2;
