"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = {
  "/": "Home",
  "/about": "About",
  "/blog": "Blog",
};

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col sm:flex-row mt-5 md:mb-10 items-center font-poppins">
      <nav id="nav" className={"items-center flex grow gap-3"}>
        {Object.entries(links).map(([path, text]) => {
          const active = path === pathname;
          return (
            <Link key={path} href={path}>
              <span
                className={`${active
                    ? "text-black dark:text-black dark:text-white font-semibold"
                    : "dark:text-black dark:text-white text-black opacity-60"
                  }`}
              >
                {text}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
