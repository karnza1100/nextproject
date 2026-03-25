"use client"; // ต้องเพิ่มบรรทัดนี้เพื่อใช้ useState

import { useState } from "react";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const roboto = Roboto({
  variable: "--font-Roboto",
  subsets: ["latin"],
  weight: "400",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // สถานะสำหรับเปิด/ปิดเมนูมือถือ
  const [isOpen, setIsOpen] = useState(false);

  // ฟังก์ชันสำหรับปิดเมนูเมื่อคลิกลิงก์
  const closeMenu = () => setIsOpen(false);

  const menuLinks = [
    { name: "HOME", href: "/" },
    { name: "HW1", href: "/hw1" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
    { name: "USER", href: "/user" },
    { name: "FETCH", href: "/fetch" },
    { name: "HW2", href: "/hw2" },
    { name: "FETCH2", href: "/hw2_fetch" },
    { name: "todo", href: "/todo" },
    { name: "pet", href: "/pet" },
  ];

  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white text-black`}>
        {/*<header className="w-full bg-[#FDFBF0] border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-[1440px] w-[90%] mx-auto h-20 flex justify-between items-center gap-4">
            
            
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold flex-shrink-0">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2948/2948025.png"
                width={40}
                height={40}
                alt="icon home"
                className="w-10 h-10"
              />
              <span className="text-black">CoC</span>
            </Link>

            
            <nav className="hidden md:flex items-center gap-6 overflow-x-auto no-scrollbar max-w-[500px] py-2 px-2">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap font-extrabold text-black text-base hover:text-[#997A2E] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden cursor-pointer space-y-1.5 flex-shrink-0 z-50"
              aria-label="Toggle Menu"
            >
              <div className={`w-8 h-1 bg-black rounded transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
              <div className={`w-8 h-1 bg-black rounded transition-all ${isOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-8 h-1 bg-black rounded transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
            </button>
          </div>

          
          <div 
            className={`fixed inset-0 bg-[#FDFBF0] z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <nav className="flex flex-col items-center justify-start pt-24 pb-10 h-full overflow-y-auto">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="w-full text-center py-6 font-extrabold text-black text-xl hover:bg-[#f5f2d0] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </header> */}

        <main className="m-8">
          {children}
        </main>
      </body>
    </html>
  );
}