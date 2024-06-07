import Card from "../Card/Card";

function Cards({ items }) {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {items?.map((c, index) => (
        <Card article={c} key={index} />
      ))}
    </div>
  );
}

export default Cards;
