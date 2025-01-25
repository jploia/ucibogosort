import BinContainer from "@/app/components/BinContainer";

export default function GameplayPage() {
  const binType = [
    {
      src: "/compost.PNG",
      alt: "small green bin with banana peel logo on it",
    },
    {
      src: "/recycle.PNG",
      alt: "small blue bin with a recycling logo on it",
    },
    {
      src: "/trash.PNG",
      alt: "small black bin with a trash wrapper logo on it",
    },
  ];

  return (
    <>
      <BinContainer bins={binType} />
    </>
  );
}
