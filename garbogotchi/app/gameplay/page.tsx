import BinContainer from "@/app/components/BinContainer";

export default function GameplayPage() {
  const binType = [
    {
      name: "compost",
      src: "/compost.PNG",
      alt: "small green bin with banana peel logo on it",
    },
    {
      name: "recycle",
      src: "/recycle.PNG",
      alt: "small blue bin with a recycling logo on it",
    },
    {
      name: "trash",
      src: "/trash.PNG",
      alt: "small black bin with a trash wrapper logo on it",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#8FB6F4" }}>
        <BinContainer bins={binType} />
      </div>
    </>
  );
}
