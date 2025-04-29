'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';

export function TopButon() {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={scrolling ? 'fixed bottom-[0.5rem] right-[0.7rem] z-50 ' : 'hidden'}>
      <Link href="#home">
        <BsArrowUpSquareFill className="text-cadetblue shadow-sm " size={40} />
      </Link>
    </div>
  );
}
