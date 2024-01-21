import React from "react";

const WorkExp = () => {
  return (
    <section id="Work">
      <div className="bg-[#fbffc3] text-black py-8 lg:px-20 border-4 border-black md:mx-10 rounded-3xl">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <h1
              className="text-4xl md:text-5xl font-bold text-black heading_font"
              data-svelte-h="svelte-3x10mm"
            >
              Work Experience
            </h1>{" "}
            <span className="text-gray-900 text-xl lg:text-2xl mt-4 mb-6 md:mb-8">
              Valuable experience with a <br /> variety of clients.
            </span>
          </div>{" "}
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute h-full border-green-50 border-8 opacity-0"></div>{" "}
                <div
                  className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline aos-init aos-animate"
                  data-aos="fade-up"
                  data-svelte-h="svelte-1oza2m"
                >
                  <div className="order-1 w-auto"></div>{" "}
                  <div className="order-1 w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-3xl">
                    <span className="mb-3 text-base text-blue-900">
                      Apr 2021 - Aug 2023
                    </span>{" "}
                    <h4 className="mb-1 text-2xl md:text-5xl text-blue-900 heading_font font-bold">
                      Infosys
                    </h4>{" "}
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      Specialist Programmer
                    </h5>{" "}
                    <div className="text-sm md:text-base leading-snug tetx-900 text-opacity-100 gap-4 flex flex-col p-4">
                      <ul className="list-disc">
                        <li>
                          Developed 25+ responsive React components and Resolved
                          almost 50 bugs, reducing nearly 25% of outstanding
                          JIRA tickets in one sprint.
                        </li>
                        <li>
                          Led development of two Java-based batch programs for
                          OpenText Extended ECM, resulting in a remarkable 30%
                          improvement in file processing.
                        </li>
                        <li>
                          Delivered an in-house dealer management solution,
                          achieving a 100% cost reduction by transitioning
                          customers from Salesforce to the new platform.
                        </li>
                        <li>
                          Collaborated with senior consultants to finalize a
                          comprehensive statement of work and spearheaded its
                          development as a critical migration-type deliverable
                          with my team.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-8 flex justify-between items-center w-full right-timeline aos-init"
                  data-aos="fade-up"
                  data-svelte-h="svelte-1uuoo4c"
                >
                  <div className="order-1 w-auto"></div>{" "}
                  <div className="order-1 w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-3xl">
                    <span className="mb-3 text-base text-red-900">
                      May 2019 - Mar 2021
                    </span>{" "}
                    <h4 className="mb-1 text-2xl md:text-5xl text-red-900 heading_font font-bold">
                      Infosys
                    </h4>{" "}
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      System Engineer Specialist
                    </h5>{" "}
                    <div className="text-sm md:text-base leading-snug tetx-900 text-opacity-100 gap-4 flex flex-col p-4">
                      <ul className="list-disc">
                        <li>
                          Developed and tested six robust RESTful microservices
                          in Spring Boot, along with five responsive React
                          components and 20 bugs in one sprint, reducing the
                          JIRA workload by 30–40%.
                        </li>
                        <li>
                          Contributed to two critical backend modules and
                          actively contributed in architectural team meetings.
                        </li>
                        <li>
                          Developed and delivered a Batch Framework, reducing
                          future batch code implementation time for modules by
                          nearly 80%.
                        </li>
                      </ul>
                    </div>
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

export default WorkExp;
