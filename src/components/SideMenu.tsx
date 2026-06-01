'use client';
import { SideMenuLink, sideMenuLinks } from '@/constants/sideMenuLinks';
import { useMenuStore } from '@/store/useMenuStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDev } from 'react-icons/fa';

export function SideMenu() {
  const { isOpen, closeMobileMenu } = useMenuStore();
  const [activeLink, setActiveLink] = useState<SideMenuLink>(sideMenuLinks[0]);
  // クリックによるスクロール中はscroll監視を一時ロックし、ハイライトのチラつきを防ぐ
  const lockRef = useRef(false);
  const targetRef = useRef<string | null>(null);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLinkClick = (link: SideMenuLink) => {
    closeMobileMenu();
    setActiveLink(link);
    lockRef.current = true;
    targetRef.current = link.sectionId;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    // 目的セクションに到達できなかった場合のフォールバック解除
    lockTimerRef.current = setTimeout(() => {
      lockRef.current = false;
      targetRef.current = null;
    }, 1200);
  };

  const handleScroll = () => {
    const sections = sideMenuLinks.map((link: SideMenuLink) =>
      document.getElementById(link.sectionId)
    );
    const scrollPosition = window.scrollY;

    let current: SideMenuLink | null = null;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition + 150) {
        current = sideMenuLinks[i];
        break;
      }
    }

    // ロック中は中間セクションでハイライトを書き換えず、目的地到達で解除
    if (lockRef.current) {
      if (current && current.sectionId === targetRef.current) {
        lockRef.current = false;
        targetRef.current = null;
      }
      return;
    }

    if (current) setActiveLink(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <section
      className={`fixed top-0 left-0 z-50 flex h-screen max-w-[300px] flex-col justify-between px-[20px] py-10 lg:px-[80px] max-lg:max-w-[146px] bg-white border-r ${isOpen ? 'max-lg:block' : 'max-md:hidden'}`}
    >
      <div className="flex w-full flex-1 flex-col gap-10 justify-center items-center">
        {/* 上 */}
        <div className="flex flex-col justify-center items-center  gap-2">
          <Image src={'/assets/logo.svg'} width={200} height={200} alt={'NextLayer Image'} />
          {/* <p className="font-bold text-darkblue">NextLayer</p> */}
        </div>
        {/* 中 サイドメニュー*/}
        <div>
          {sideMenuLinks.map((link: SideMenuLink) => {
            const isActive = activeLink === link;
            return (
              <Link
                key={link.label}
                href={link.route}
                className={`relative flex justify-center rounded-lg p-3 ${isActive ? 'bg-cadetblue text-white' : ''}`}
                onClick={() => handleLinkClick(link)}
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
