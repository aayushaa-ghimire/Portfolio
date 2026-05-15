"use client";;
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function ScrollStackCards({
  items,
  mainContainerRef
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    container: mainContainerRef,
    target: container,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  return (
    <div ref={container} className="">
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.05;
        return (
          <Card
            key={i}
            item={item}
            i={i}
            range={[i * (items.length / 100), 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
            mainContainerRef={mainContainerRef} />
        );
      })}
    </div>
  );
}

export default ScrollStackCards;

const Card = ({
  item: { title, description, imageSrc, color },
  i,
  range,
  targetScale,
  progress,
  mainContainerRef
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    container: mainContainerRef,
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="flex items-center justify-center h-[50vh] sticky top-0">
      <motion.div
        style={{
          scale: cardScale,
          backgroundColor: color,
          top: `calc(-10% + ${i * 25}px)`,
        }}
        className="relative flex flex-col md:flex-row max-w-4xl mx-auto w-[85%] h-[360px] rounded-2xl overflow-hidden shadow-xl">
        <div
          className="flex-1 flex flex-col justify-center p-8 text-white bg-gradient-to-br from-black/60 via-black/40 to-transparent z-10">
          <h3 className="text-3xl font-semibold mb-3 leading-snug">{title}</h3>
          <p className="text-base mb-6 opacity-90">{description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-lg font-medium bg-white text-gray-900 shadow-md hover:bg-gray-100 transition mt-6">
            Explore
          </motion.button>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="relative w-full h-full">
            <Image src={imageSrc} alt={title} fill className="object-cover" priority />
          </motion.div>

          <div
            className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent md:bg-gradient-to-t"></div>
        </div>
      </motion.div>
    </div>
  );
};
