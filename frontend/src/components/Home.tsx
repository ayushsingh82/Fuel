import React from "react";

function Home() {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat h-[500px]">
        <h1 className="mt-[20px] text-3xl font-semibold text-green-500 ">
          Weclome to real state Dapp
        </h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h1 className="mt-[30px] text-2xl text-green-500">
              {" "}
              Discover Discover Most
              <br />
              Suitable Property
            </h1>
            <p className="mt-[50px]">
              Find a variety of properties that suit <br /> you very easilty
              Forget all difficulties
              <br /> in finding a residence for you{" "}
            </p>
            <div className="h-[50px] w-[400px] bg-white mt-[30px] border rounded-xl flex justify-between items-center flex-row ml-[50px]">
              {/* <h1 className="text-blue-500 mx-[5px]">Img</h1> */}
              <p className="text-gray-700 ml-[10px]">Search by title/city/country...</p>
              <div className="h-[30px] w-[60px] bg-blue-600 flex justify-center items-center border rounded-md mr-[10px]">
                {" "}
                search
              </div>
            </div>
            <div className="flex flex-row mt-[60px] gap-x-12 ml-[30px]">
              <div>
                <h1>3000+</h1>
                <p>Premium Product</p>
              </div>
              <div>
                <h1>2000+</h1>
                <p>Happy Customer</p>
              </div>
              <div>
                <h1>8+</h1>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>

          <img
            className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl border-transparent mt-[40px] mr-[40px]"
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="mt-[40px] w-screen bg-slate-600 flex justify-center flex-col items-center">
        <h1 className="text-3xl text-green-500 font-bold">Best choices</h1>
        <h2
          className="mt-[20px] text-2xl text-slate-900 font-semibold
    "
        >
          Polpular Residences
        </h2>
        <div className=" flex flex-row mt-[50px] gap-x-[200px] mb-[30px]">
          <div>
            <img
              className="h-[200px] w-[250px]"
              src="https://plus.unsplash.com/premium_photo-1678379473620-db6bc7ff8a11?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2 className="text-slate-900 mt-[15px] font-bold">
              <span className="text-yellow-500">$</span>2000K
            </h2>
            <h3 className="text-blue-600 mt-[10px] font-semibold">Lasan</h3>
          </div>
          <div>
            <img
              className="h-[200px] w-[250px]"
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2 className="text-slate-900 mt-[15px] text-xl font-bold">
              <span className="text-yellow-500">$</span>2500k
            </h2>
            <h3 className="text-blue-600 mt-[10px] font-semibold">Lasan</h3>
          </div>
          <div>
            <img
              className="h-[200px] w-[250px]"
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2 className="text-slate-900 mt-[15px] font-bold">
              <span className="text-yellow-500">$</span>3000k
            </h2>
            <h3 className="text-blue-600 mt-[10px] font-semibold">Lasan</h3>
          </div>
        </div>
      </div>

      <div className=" bg-gray-900  w-screen mt-[-22px] mb-[-93px]">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our RealEstate app </h3>
            <p> best property ,best price, best location. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              &copy; All rights reserved 2024.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
