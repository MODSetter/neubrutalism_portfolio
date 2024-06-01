import React from "react";
import Card from "./Card";
import mepic from "./images/mepic.png";
import cfc from "./images/cfct.png";
import neoui from "./images/neoproj2.png";
import lcpic from "./images/lcproj2.png";

import nextblog from "./images/nextblog.png";

const Projects = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 my-20" id="Projects">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
          <div className="flex flex-col items-center gap-4 my-8">
            <h2
              className="text-gray-800 text-4xl sm:text-5xl heading_font font-bold"
              data-svelte-h="svelte-3swl6p"
            >
              Projects
            </h2>{" "}
            <p className="text-xl lg:text-2xl text-gray-900 text-center">
              A suite of side projects which I work on weekends :){" "}
            </p>
          </div>{" "}
          <div
            className="grid grid-cols-1 place-items-center justify-between lg:grid-cols-3 gap-14 p-10"
            data-svelte-h="svelte-1swfby4"
          >
            <Card
              date={"May 2024 - Present"}
              imgsrc={nextblog}
              desc={"Next-Blog is a out-of-box fast, SEO Friendly blogging based CMS supporting multiple themes, Notion like WYSIWYG editor with AI Assistant Writer, Modern Layouts ,Admin Dashboard and Custom Components."}
              link={"https://github.com/MODSetter/next-blog"}
              title={"Next-Blog"}
              techused="Next.Js, Tailwind CSS, Tiptap, prosemirror, shadcn, zod, react-hook-forms, giscus, novel"
            />
            <Card
              date={"Oct 2018 - Dec 2019"}
              imgsrc={cfc}
              desc={"A SEO-optimized website which leveraged incentive CPA affiliate networks and BlackHat SEO techniques to generate maximum profit. Was on the first page of Google for a year on multiple search terms, generating 5K page views per day and nearly 40x ROI."}
              link={"https://web.archive.org/web/20210125225725/http://clashforacure.org/"}
              title={"ClashForACure"}
              techused="WordPress, BlackHat SEO, OnPage SEO, Off-Page SEO"
            />

            <Card
              date={"Jan 2024 - Present"}
              imgsrc={neoui}
              desc={"A simple neubrutalism-style portfolio website theme to create a visually appealing and responsive portfolio to showcases your achievements."}
              link={"https://github.com/MODSetter/neubrutalism_portfolio"}
              title={"Neubrutalism Portfolio"}
              techused="Next.Js, Tailwind.css, Animate.css, AOS.css"
            />

            <Card
              date={"Nov 2023 - Present"}
              imgsrc={lcpic}
              desc={"A recipe recommender based on the ingredients you currently have. It is just a proof of concept for my Information Retrieval course. I have plans to release a better version in the future."}
              link={"https://www.google.com"}
              title={"LazyCook"}
              techused="Flask, Scrapy, ElasticSearch, BootStrap"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
