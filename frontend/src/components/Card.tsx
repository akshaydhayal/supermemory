import React from "react";
import Note from "../icons/Note";
import { Project } from "../icons/Project";
import { Delete } from "../icons/Delete";
import { Open } from "../icons/Open";
import { Video } from "../icons/Video";
import { Twitter } from "../icons/Twitter";

type cardTpes = {
  title: string;
  link: string;
  type: string;
  tags: string[];
};
const Card = ({ title, link, type, tags }: cardTpes) => {
  return (
    // <div className="w-1/3 shadow-slate-600 shadow-sm border h-max py-4">
    <div className="shadow-slate-500 shadow-sm h-max py-4">
      <div className="flex justify-between pl-4 pr-8 py-2">
        <div className="flex gap-2 items-center">
          {type == "youtube" ? <Video /> : type == "tweet" ? <Twitter /> : <Project />}
          <p className="text-slate-200 font-medium text-lg">{title}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Open />
          <Delete />
        </div>
      </div>
      <div className="flex justify-center">
        {type == "youtube" ? (
          <iframe
            width=""
            height=""
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : type == "tweet" ?
            <blockquote className="twitter-tweet" data-theme="dark" data-conversation="none">
              <a href={link}></a>
            </blockquote> : (
          <p className="text-white px-6">{link}</p>
        )}
      </div>
      <div className="flex gap-2 mt-4 px-4">
        {tags.map((t) => {
          return <p className="text-blue-900 bg-blue-200 text-sm font-semibold px-3 py-[3px] font-mono rounded-md">#{t}</p>;
        })}
      </div>
    </div>
  );
};

export default Card;
