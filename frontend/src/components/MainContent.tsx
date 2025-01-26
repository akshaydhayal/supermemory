import Card from "./Card";
import { data } from "./data";

const MainContent = () => {
  return (
    <div className="w-full flex gap-4">
      <div className="w-1/3 flex flex-col gap-6">
        {data
          .filter((d, ind) => ind % 3 == 0)
          .map((d) => {
            return <Card link={d.link} tags={d.tags} title={d.title} type={d.type} />;
          })}
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        {data
          .filter((d, ind) => ind % 3 == 1)
          .map((d) => {
            return <Card link={d.link} tags={d.tags} title={d.title} type={d.type} />;
          })}
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        {data
          .filter((d, ind) => ind % 3 == 2)
          .map((d) => {
            return <Card link={d.link} tags={d.tags} title={d.title} type={d.type} />;
          })}
      </div>
    </div>
  );
};

export default MainContent;
