import React from "react";

export default function Page({ next, prev }) {
  return (
    <>
      <div className="flex justify-around mt-4">
        <button
          disabled={!prev}
          onClick={prev}
          className={`bg-black text-white py-1 rounded-lg w-20 text-center`}
        >
          Prev
        </button>
        <button
          disabled={!next}
          className="bg-black text-white py-1 rounded-lg w-20 text-center"
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  );
}
