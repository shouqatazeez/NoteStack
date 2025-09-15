import React from "react";
import reactlogo from "../assets/Techstackimages/react.svg";
import tailwindlogo from "../assets/Techstackimages/tailwindcss.svg";
import shadcnlogo from "../assets/Techstackimages/shadcnui.svg";
import firebaselogo from "../assets/Techstackimages/firebase.svg";

const Techstack = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl/tight center font-bold tracking-tight xl:w-2/4 lg:w-3/4 mx-auto text-black">
              Tech Stack
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-auto text-black bg-white border border-blue-600 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white border border-blue-600 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <image
                        href={reactlogo}
                        x="0"
                        y="0"
                        height="24"
                        width="24"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    React.js
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    A powerful JavaScript library for building interactive user
                    interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-auto text-black bg-white border border-blue-600 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white border border-blue-600 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <image
                        href={tailwindlogo}
                        x="0"
                        y="0"
                        height="24"
                        width="24"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    A utility-first CSS framework for building custom designs
                    quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-auto text-black bg-white border border-blue-600 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white border border-blue-600 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <image
                        href={shadcnlogo}
                        x="0"
                        y="0"
                        height="24"
                        width="24"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Shadcn/Ui
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Accessible, prebuilt Tailwind components for faster UI
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-auto text-black bg-white border border-blue-600 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white border border-blue-600 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <image
                        href={firebaselogo}
                        x="0"
                        y="0"
                        height="24"
                        width="24"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Firebase (Auth & Firestore)
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Secure authentication and real-time database for user notes.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Techstack;
