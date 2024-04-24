// import "./styles.css";

export default function App({handleShowRegistro, actualizarEstado}) {

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
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
      actualizarEstado(true);
  }
  

  const handleClick = () => {
    handleShowRegistro();
  } 
  return (
    <div className="App p-4 space-y-4 w-[400px]">
      <div className="flex flex-wrap justify-between">
        <h1 className="tracking-widest text-xl">SIGN UP TO RECEIVE</h1>
        <div
          className="bg-gray-700 px-2 text-white cursor-pointer"
          onClick={() => handleClick(true)}
        >
          x
        </div>
      </div>
      <h1 className="text-left">
        Plus, stay up to date with special offers, giveaways, and the latest
        news.
      </h1>
      <div>
        <form
          className="flex flex-wrap  space-y-2 "
          onSubmit={(e) => Submit(e)}
        >
          <input
            className="w-full border-gray-700 border-[1px] py-2 px-2 focus:outline-none focus:border-gray-700"
            placeholder="Your Name"
            name="Name"
            type="text"
          />
          <input
            className="w-[80%] border-gray-700 border-[1px] py-2 px-2 focus:outline-none focus:border-gray-700"
            placeholder="Your Email"
            name="Email"
            type="text"
          />
          <input
            name="Name"
            type="submit"
            className="w-[20%] bg-gray-700 text-white p-2 cursor-pointer"
          />
        </form>
      </div>
      <div className="w-full  flex justify-center px-12">
        <img
        className="lg:w-2/3"
          src="https://ifbeauty.com.au/cdn/shop/files/Untitled-2_5d5334ce-3bfb-45eb-a2c5-d56c3e19c8ad_540x.jpg?v=1629700430"
          alt=""
        />
      </div>
    </div>
  );
}
