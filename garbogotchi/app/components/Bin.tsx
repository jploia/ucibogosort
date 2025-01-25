import Image from "next/image";

export default function Bin() {
  const binType = [
    {
      image: "/compost.PNG",
      alt: "small green bin with banana peel logo on it",
    },
    {
      image: "/recycle.PNG",
      alt: "small blue bin with a recycling logo on it",
    },
    {
      image: "/trash.PNG",
      alt: "small black bin with a trash wrapper logo on it",
    },
  ];

  return (
    <>
      <div>
        {binType.map((binType, index) => {
          return (
            <Image
              key={index}
              src={binType.image}
              width={400}
              height={400}
              alt={binType.alt}
            />
          );
        })}
      </div>
    </>
  );
}
