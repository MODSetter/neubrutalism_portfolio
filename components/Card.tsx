import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  imgsrc,
  date,
  title,
  desc,
  link,
  techused,
}: {
  imgsrc: StaticImageData | string;
  date: string;
  title: string;
  desc: string;
  link: string;
  techused: string;
}) => {
  return (
    <div className="w-80 h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white" data-aos="flip-left">
      <div className="block cursor-pointer">
        <article className="w-full h-full flex flex-col justify-between">
          <figure className="w-full h-1/2 border-black border-b-2">
            <Image
              src={imgsrc}
              alt="thumbnail"
              className="w=full h-full object-cover"
            />
          </figure>
          <div className="px-6 py-5 text-left h-full">
            <p className="text-base mb-4">{date}</p>
            <h1 className="text-[32px] mb-4">{title}</h1>
            <p className="text-xs mb-4">{desc}</p>
            <p className="text-xs my-1">
              <b>Technology Used : </b> {techused}
            </p>
            <Link href={link} className="btn btn-error mt-2">
              CheckOut This Project
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
