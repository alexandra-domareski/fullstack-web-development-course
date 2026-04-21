import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      <Part parts={parts} />
      <Part parts={parts} />
      <Part parts={parts} />
    </div>
  );
};
export default Content;
