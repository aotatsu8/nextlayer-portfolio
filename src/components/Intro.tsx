'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// ページ表示時に流れるオープニング演出
// （ロゴマークが右から転がってきて → 「NextLayer」が現れ → フェードアウトしてLPを表示）
export function Intro() {
  // show が true の間だけイントロのオーバーレイを表示する
  const [show, setShow] = useState(true);

  // イントロ表示中は背後のLPをスクロールできないように固定する
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  // 2.8秒後にイントロを閉じる（→ AnimatePresence の exit が走りフェードアウト）
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    // AnimatePresence: show が false になった瞬間に exit アニメーションを再生してから DOM から外す
    <AnimatePresence>
      {show && (
        // 画面全体を覆う白いオーバーレイ。z-[100] で SideMenu(z-50) 等より前面に出す
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          // 退場：0.6秒かけて全体をフェードアウトしてLPを見せる
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="flex items-center gap-3">
            {/* ロゴマーク：右(x:260)から定位置(x:0)へ移動しつつ rotate 720→0 で左回りに転がる（1.1秒） */}
            <motion.img
              src="/assets/mark.svg"
              alt="NextLayer"
              className="w-16 h-16 md:w-20 md:h-20"
              initial={{ x: 260, rotate: 720, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* 文字：マークの転がり(1.1秒)が終わってから delay で遅らせて表示する */}
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
