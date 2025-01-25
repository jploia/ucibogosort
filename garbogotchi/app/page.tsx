import Image from "next/image";
import BinContainer from "@/app/components/BinContainer";

export default function Home() {
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
      <p className="font-jersey text-black">hello rose</p>
      <BinContainer bins={binType} />
    </>
  );
}
