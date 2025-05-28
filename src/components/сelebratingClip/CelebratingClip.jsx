import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import celebration1 from '../../assets/image/celebrating/celebration_c1.png'
import celebration2 from '../../assets/image/celebrating/celebration_c2.png'
import celebration3 from '../../assets/image/celebrating/celebration_l1.png'
import celebration4 from '../../assets/image/celebrating/celebration_l2.png'
import celebration5 from '../../assets/image/celebrating/celebration_l3.png'

const CelebratingClip = () => {
  return (
    <motion.div
      initial={{
        backdropFilter: "blur(0px)",
        opacity: 0,
      }}
      animate={{
        backdropFilter: "blur(4px)",
        opacity: 1,
      }}
      exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/30"
    >
      <motion.img
        initial={{
          y: -300,
        }}
        animate={{ y: 0 }}
        exit={{ y: -300 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="absolute left-0 top-0 w-1/4"
        src={celebration3}
        alt="celebration_l1.png"
      />
      <motion.img
        initial={{
          y: -400,
        }}
        animate={{ y: 0 }}
        exit={{ y: -300 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="absolute left-0 top-0 w-1/4"
        src={celebration4}
        alt="celebration_l2.png"
      />
      <motion.img
        initial={{
          y: -500,
        }}
        animate={{ y: 0 }}
        exit={{ y: -300 }}
        transition={{ delay: 0.1, type: "spring" }}
        className="absolute left-0 top-0 w-1/4"
        src={celebration5}
        alt="celebration_l3.png"
      />
      <motion.img
        initial={{
          y: -400,
          scaleX: -1,
        }}
        animate={{ y: 0, scaleX: -1 }}
        exit={{ y: -300, scaleX: -1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="absolute right-0 top-0 w-1/4"
        src={celebration3}
        alt="celebration_r1.png"
      />
      <motion.img
        initial={{
          y: -500,
          scaleX: -1,
        }}
        animate={{ y: 0, scaleX: -1 }}
        exit={{ y: -300, scaleX: -1 }}
        transition={{ delay: 0.1, type: "spring" }}
        className="absolute right-0 top-0 w-1/4"
        src={celebration4}
        alt="celebration_r2.png"
      />
      <motion.img
        initial={{
          y: -300,
          scaleX: -1,
        }}
        animate={{ y: 0, scaleX: -1 }}
        exit={{ y: -300, scaleX: -1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="absolute right-0 top-0 w-1/4"
        src={celebration5}
        alt="celebration_l3.png"
      />
      <div className="absolute left-1/2 top-0 -ml-[25%] w-1/2">
        <motion.img
          initial={{
            y: -100,
          }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="absolute -top-2 ml-[12.5%] w-3/4 origin-top"
          src={celebration1}
          alt="celebration_c1.png"
        />
        <motion.img
          initial={{
            y: -300,
          }}
          animate={{ y: 0 }}
          exit={{ y: -300 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute top-0 w-full"
          src={celebration2}
          alt="celebration_c2.png"
        />
      </div>
    </motion.div>
  );
};

export default CelebratingClip;
