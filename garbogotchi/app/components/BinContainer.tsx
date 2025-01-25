import BinProps from "@/app/components/BinProps";
import Image from "next/image";

export default function BinContainer(props: Readonly<{ bins: BinProps[] }>) {
  return (
    <>
      <div className="flex gap-[2rem] min-h-screen justify-center items-center flex-wrap">
        {props.bins.map((bin, index) => {
          return (
            <Image
              key={index}
              src={bin.src}
              width={400}
              height={400}
              alt={bin.alt}
            />
          );
        })}
      </div>
    </>
  );
}
