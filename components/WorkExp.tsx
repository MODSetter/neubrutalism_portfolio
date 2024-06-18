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
                          Built custom full-stack CRM with React.js & PostgreSQL for Fortune 500 electric utilities company, boosting sales team productivity by 35% and cutting costs by 92% over Salesforce CRM.
                        </li>
                        <li>
                          Developed a Batch Framework in SpringBoot for a banking application, reducing code implementation time for future modules by nearly 87%.
                        </li>
                        <li>
                          Re-architected legacy Java-based Backend (Apache Struts 2) to modern architectural framework (SpringBoot) for a Fortune 500 automotive company, increasing throughput, scalability, security & performance by 63%.
                        </li>
                        <li>
                          Led junior developer teams on two separate occasions to successfully deliver the MVPs of the new full-stack projects for a Fortune 500 oil industry company.
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
                          Developed REST-based microservices in a Spring Boot project to automate the initiation of instant refunds for canceled/returned products, leading to a remarkable 60% reduction in manual effort. Involved integrating APIs with dependent services.
                        </li>
                        <li>
                          Implemented highly available, fault-tolerant, and scalable event-driven architecture using Apache Kafka for analyzing and processing
                          transactions in banking application, reducing manual monitoring by 33%.
                        </li>
                        <li>
                          Created GitLab CI/CD pipelines for cloud-native containerized microservices using Docker, enabling automated builds, testing, and
                          deployments to Kubernetes, facilitating zero-downtime rolling updates.
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
