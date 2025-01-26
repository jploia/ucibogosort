import BinProps from "@/app/components/BinProps";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BinContainer(props: Readonly<{ bins: BinProps[] }>) {
  return (
    <>
      <div className="flex gap-[2rem] min-h-screen justify-center items-center flex-wrap">
        {props.bins.map((bin, i) => {
          return (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Image
                //key={bin.key}
                src={bin.src}
                width={400}
                height={400}
                alt={bin.alt}
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
