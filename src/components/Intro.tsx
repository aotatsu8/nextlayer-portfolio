'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Intro() {
  const [show, setShow] = useState(true);

  // イントロ表示中はスクロールを止める
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  // 一定時間後にイントロを閉じてLPを表示
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="flex items-center gap-3">
            {/* 転がってくるロゴマーク */}
            <motion.img
              src="/assets/mark.svg"
              alt="NextLayer"
              className="w-16 h-16 md:w-20 md:h-20"
              initial={{ x: 260, rotate: 720, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* マークが止まってから現れる文字 */}
            <motion.span
              className="text-4xl md:text-5xl font-bold text-cadetblue whitespace-nowrap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
            >
              NextLayer
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
