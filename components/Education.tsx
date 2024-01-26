import React from "react";

const Education = () => {
  return (
    <section id="Education">
      <div className="bg-[#c4fdff] text-black py-8 lg:px-20 border-4 border-black md:mx-10 rounded-3xl">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <h1
              className="text-4xl md:text-5xl font-bold text-black heading_font"
              data-svelte-h="svelte-3x10mm"
            >
              Education
            </h1>{" "}
          </div>{" "}
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute h-full border-green-50 border-8 opacity-0"></div>{" "}
                <div
                  className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline aos-init aos-animate"
                  data-aos="fade-down"
                  data-svelte-h="svelte-1oza2m"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="order-1 w-auto"></div>{" "}
                  <div className="order-1 w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-3xl">
                    <span className="mb-3 text-base text-red-900">
                      Sept 2023 - Present
                    </span>{" "}
                    <h4 className="mb-1 text-2xl md:text-5xl text-red-900 heading_font font-bold">
                      Northeastern University
                    </h4>{" "}
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      Master of Science in Computer Science
                    </h5>{" "}
                    <div className="text-sm md:text-base leading-snug tetx-900 text-opacity-100 gap-4 flex flex-col p-4">
                      <b>GPA: 3.8</b>
                      <ul>
                        <li>
                          <b>Courses: </b> Programming Design Paradigm,
                          Algorithms, Information Retrieval, Special Topics in
                          Data Science
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-8 flex justify-between items-center w-full right-timeline aos-init"
                  data-aos="fade-up"
                  data-svelte-h="svelte-1uuoo4c"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="order-1 w-auto"></div>{" "}
                  <div className="order-1 w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-3xl">
                    <span className="mb-3 text-base text-cyan-900">
                      May 2015 - May 2019
                    </span>{" "}
                    <h4 className="mb-1 text-2xl md:text-5xl text-cyan-900 heading_font font-bold">
                      SRM Institute of Science and Technology
                    </h4>{" "}
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      Bachelor of Technology in Computer Science and Engineering
                    </h5>{" "}
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
