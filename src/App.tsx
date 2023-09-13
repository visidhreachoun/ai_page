import { useEffect, useState } from "react";

import "./App.css";
import { Category, data } from "./data";

const App = () => {
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [state, setState] = useState("1");

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 570;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const renderEachCate = (item) => {
    return (
      <div className="eachCategory">
        <div className="categoryLeft">
          <svg
            className="categoryIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#22acbf"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            ></path>
          </svg>
          <div class="ml-1 flex items-center mt-2 star_rating_display">
            <svg
              class="text-[#ffd25c] h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-[#ffd25c] h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-[#ffd25c] h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-[#ffd25c] h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-[#ffd25c] h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="buttonText" style={{ marginLeft: "8px" }}>
            {item.cate}
          </span>
        </div>
        <div className="numberContainer">{item.desc}</div>
      </div>
    );
  };
  const renderEachCard = (item) => {
    return (
      <div className="card">
        <img src={item.image} width={202} height={141} />
        <div className="iconContainer">
          <svg
            className="starIcon"
            viewBox="0 0 20 20"
            fill="#ffd25c"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="starIcon"
            viewBox="0 0 20 20"
            fill="#ffd25c"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="starIcon"
            viewBox="0 0 20 20"
            fill="#ffd25c"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="starIcon"
            viewBox="0 0 20 20"
            fill="#ffd25c"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="starIcon"
            viewBox="0 0 20 20"
            fill="#ffd25c"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="buttonText">{item.name}</div>
        <div className="descriptionText">{item.desc}</div>
      </div>
    );
  };
  console.log(window.innerWidth);

  return (
    <>
      <div className="header">
        <div className="width">
          <img
            src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
            width={115}
          />

          <div
            className="searchBar"
            style={{
              borderColor: focused ? "rgb(58 186 204)" : "#f0efef",
            }}
          >
            <svg
              className="searchIcon"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <input
              type="search"
              className="textBox"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>
        </div>
      </div>
      <div className="body">
        <div style={{ paddingBottom: "50px" }}>
          <span className="topText">TOP</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0.5L5.5 6L0.5 11.5" stroke="#999999"></path>
          </svg>
          <span className="recommendation">Recommendation</span>
        </div>
        <span className="title">List of Recommended AI Services</span>
        <div className="divider" />
        <div className="popularity">
          <button
            onClick={() => setState("1")}
            className="button buttonText"
            style={
              state === "1"
                ? { color: "#fff", backgroundColor: "#22acbf" }
                : { color: "#777777", backgroundColor: "#f3f3f3" }
            }
          >
            Popularity Order
          </button>
          <button
            onClick={() => setState("2")}
            className="button buttonText"
            style={
              state === "2"
                ? { color: "#fff", backgroundColor: "#22acbf" }
                : { color: "#777777", backgroundColor: "#f3f3f3" }
            }
          >
            New Arrival Order
          </button>
        </div>
        {/* wrapper */}
        <div className="wrapper">
          {/* left */}

          {width > breakPoint && (
            <div className="left">
              <span className="subHeader">Category</span>
              {Category.map((item) => renderEachCate(item))}
            </div>
          )}
          {/* right */}
          <div className="right">
            {data.map((item) => renderEachCard(item))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
