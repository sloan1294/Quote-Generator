import React, { useState } from "react";
import axios from "axios";

function App() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const url = "https://api.quotable.io/quotes/random";

  async function getDataAxios() {
    await axios
      .get(url)
      .then((response) => {
        console.log("RESP: ", response.data[0].content);
        setContent(response.data[0].content);
        setAuthor(response.data[0].author);
      })
      .catch((err) => {
        console.log("Error: ", err);
        return err;
      });
  }

  const handleClick = () => {
    window.location.reload();
  };

  window.addEventListener("load", getDataAxios);

  return (
    <div>
      <p className="flex justify-center text-[#adb5bd] lg:text-6xl min-[350px]:text-2xl mt-[2%] font-bold">
        Random Quote Generator
      </p>
      <div className="flex justify-center">
        <div className="mx-auto mt-[6%] bg-[#adb5bd] h-[600px] w-[350px] text-[#adb5bd] rounded-xl">
          <div className="bg-[#000300] mx-[-21%] z-10 mt-[32%] h-[300px] w-[500px] text-[#adb5bd] shadow-xl shadow-[#adb5bd] rounded-lg ">
            <div className="mx-[5%] pt-[5%] text-lg font-bold text-center">
              {content}
              <div className="mt-[5%]">Author: {author}</div>
            </div>

            <div className="flex justify-center mt-[5%]">
              <button
                className="bg-[#adb5bd] text-[#000300] px-6 py-1 rounded-xl font-extrabold shadow-2xl shadow-[#adb5bd]"
                onClick={handleClick}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
