import Card from "../Card/Card";

const Cards = ({ items }) => {
  return (
    <section className="w-full h-full my-4">
      <div className="w-full h-full flex flex-row justify-center flex-wrap gap-4">
        {items.map((item) => (
          <Card article={item} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
