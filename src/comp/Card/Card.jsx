import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const Card = ({ item }) => {
  return (
    <NextUICard
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white/90 font-bold text-2xl">Zustand</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://nextui.org/images/card-example-6.jpeg"
      />
      <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-white/15 z-10 justify-between">
        <div>
          <p className="text-white/90 text-tiny">Available soon.</p>
          <p className="text-white/90 text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </NextUICard>
  );
};

export default Card;
