import React from "react";

function Card({ image, author, title, content, url }) {
  return (
    <>
      <section className=" mt-8 ">
        <div className="w-[360px] h-[35rem] rounded-xl overflow-hidden border border-gray-700 shadow-lg mb-4 shadow-blue-700">
          <div className="flex flex-col">
            <div className="">
              <img
                className="bg-cover h-52 w-full object-cover over"
                src={image || "./img2.webp"}
                alt="Placeholder"
              />
            </div>
            <div className="p-8">
              <div className="text-indigo-800">{author}</div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {title}
              </div>
              <p className="mt-2 text-gray-500">
                {content ? content : "No content to show"}
              </p>
              <a
                href={url}
                className="block text-indigo-500 text-sm font-semibold"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
