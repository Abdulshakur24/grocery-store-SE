import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";


export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Mission"
          subheading="We aim to make grocery shopping convenient, enjoyable, and affordable."
          imgSrc="/src/assets/images/about/our-mission.jpg"
          href="#"
        />
        <Link
          heading="Vision"
          subheading="To provide fresh and quality groceries to every household."
          imgSrc="/src/assets/images/about/our-vision.jpg"
          href="#"
        />
        <Link
          heading="Values"
          subheading="We are committed to sustainable practices, such as eco-friendly packaging."
          imgSrc="/src/assets/images/about/values.jpg"
          href="#"
        />
        <Link
          heading="Careers"
          subheading="Our team is revolutionizing the grocery industry."
          imgSrc="/src/assets/images/about/careers.jpg"
          href="#"
        />
        <Link
          heading="Customers"
          subheading="We prioritize quality, sustainability, and community in everything we do."
          imgSrc="/src/assets/images/about/customers.jpg"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-green-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        src={imgSrc}
        className=" z-0 h-20 w-32 rounded-lg  md:h-32 md:w-40 flex align-items-center justify-content-start"
        alt={`Image representing a link for ${heading}`}
      />

      
    </motion.a>
  );
};