/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import "./App.css";
import { Category, data } from "./data";

const App = () => {
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [state, setState] = useState("1");

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 1000;
  const hideSearchBar = 380;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const renderEachCate = (item: { id?: number; cate: any; desc: any }) => {
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

          <span className="buttonText" style={{ marginLeft: "8px" }}>
            {item.cate}
          </span>
        </div>
        <div className="numberContainer">{item.desc}</div>
      </div>
    );
  };
  const renderEachCard = (item: any) => {
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

          {width > hideSearchBar && (
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
          )}
        </div>
      </div>
      <div className="body">
        <div className="flex items-center">
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
        {/* tail wind */}
        <div className="paginationContainer">
          <span className="relative z-0 inline-flex">
            <span aria-disabled="true" aria-label="pagination.previous">
              <span
                className=" bg-[#22acbf] relative inline-flex items-center mr-4 px-2 py-2 text-sm font-medium text-white bg-gray-line cursor-default rounded-full leading-5 "
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>

            <span aria-current="page">
              <span className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm border-b-2 border-primary font-medium text-gray-500 bg-white cursor-default leading-5">
                1
              </span>
            </span>
            <a
              href=""
              className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
              aria-label="Go to page 2"
            >
              2
            </a>
            <a
              href=""
              className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
              aria-label="Go to page 3"
            >
              3
            </a>
            <a
              href=""
              className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
              aria-label="Go to page 4"
            >
              4
            </a>
            <a
              href=""
              className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
              aria-label="Go to page 5"
            >
              5
            </a>
            <a
              href=""
              className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
              aria-label="Go to page 6"
            >
              6
            </a>
            <a
              href=""
              className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
              aria-label="Go to page 7"
            >
              7
            </a>
            <a
              href=""
              className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
              aria-label="Go to page 8"
            >
              8
            </a>
            <a
              href=""
              className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
              aria-label="Go to page 9"
            >
              9
            </a>

            <a
              href=""
              rel="next"
              className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-white bg-primary rounded-full leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="pagination.next"
            >
              <span
                className=" bg-[#22acbf] relative inline-flex items-center mr-4 px-2 py-2 text-sm font-medium text-white bg-gray-line cursor-default rounded-full leading-5 "
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </span>
        </div>
      </div>
      <footer
        aria-labelledby="footer-heading"
        className=" lg:mt-28 bg-gray-100 text-black max-w-full"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-10 pb-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="mb-8">
              <img
                width="1903"
                height="781"
                className="py-2 h-auto w-[124px]"
                src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
                alt="AI比較ナビ"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 col-span-2">
              <div>
                <ul role="list" className="space-y-6">
                  <li className="text-sm">
                    <a
                      href="http://nyle.co.jp/"
                      target="_blank"
                      className="md:hover:opacity-75 md:transition-opacity md:ease-in"
                    >
                      Operation Company
                    </a>
                  </li>

                  <li className="text-sm">
                    <a
                      href=""
                      target="_blank"
                      className="md:hover:opacity-75 md:transition-opacity md:ease-in"
                    >
                      Inquiry
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul role="list" className="space-y-6">
                  <li className="text-sm">
                    <a
                      href=""
                      target="_blank"
                      className="md:hover:opacity-75 md:transition-opacity md:ease-in"
                    >
                      Terms of Services
                    </a>
                  </li>

                  <li className=" text-sm">
                    <a
                      href=""
                      target="_blank"
                      className="md:hover:opacity-75 md:transition-opacity md:ease-in"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-line py-10">
            <p className="text-sm  text-gray-200">Copyright © Nyle Inc.</p>
            <p className="mt-3 text-xs text-gray-400">
              Android は Google Inc. の商標です。
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
