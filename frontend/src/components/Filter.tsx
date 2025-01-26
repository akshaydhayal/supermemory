import React from "react";

const Filter = () => {
  const filters = ["All Memories", "Web Pages", "Tweets", "Notes", "Youtube"];
  return (
    <div className="flex gap-8 px-8 py-4">
      {filters.map((filter) => {
        return <p className="text-lg font-medium text-slate-300 hover:cursor-pointer hover:text-slate-100">{filter}</p>;
      })}
    </div>
  );
};

export default Filter;
