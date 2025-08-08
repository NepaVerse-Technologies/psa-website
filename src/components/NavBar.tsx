"use client";
import Link from "next/link";

import { Button } from "./ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { StepForward } from "lucide-react";
const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    items: [
      {
        label: "German Language Classes",
        path: "/services/german-language-classes",
      },
      {
        label: "Au Pair Visa",
        path: "/services/au-pair-visa",
      },
      {
        label: "Student Visa",
        path: "/services/student-visa",
      },
    ],
  },
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];

export default function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const isActive = (href: string) =>
    pathName === href || pathName.startsWith(href + "/");
  const activeStyle = "text-dark-blue !font-medium cursor-pointer";
  const defaultStyle = "text-foreground hover:text-dark-blue cursor-pointer";

  return (
    <nav className="p-2 flex justify-center bg-accent  relative">
      <Image
        src="/PSA_LOGO.png"
        alt="PSA Logo"
        width={90}
        height={90}
        className="max-lg:w-20 z-100 absolute left-32 max-lg:left-4 self-center rounded-full border-4 border-accent cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      />
      <ul className="flex justify-center items-center gap-8 font-semibold w-full max-lg:text-sm max-lg:justify-end">
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            {navItem.items ? (
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className={`cursor-pointer font-semibold text-dark-blue hover:text-dark-blue focus-visible:outline-none ${
                        isActive(navItem.path ?? "")
                          ? activeStyle
                          : defaultStyle
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {navItem.label}
                        {navItem.label === "Services" ? (
                          <StepForward
                            className="h-3 w-3 rotate-90"
                            fill="black"
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start">
                    {navItem.items.map((item) => (
                      <DropdownMenuItem key={item.label}>
                        <Link
                          href={item.path}
                          className={
                            isActive(item.path) ? activeStyle : defaultStyle
                          }
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                href={navItem.path}
                className={isActive(navItem.path) ? activeStyle : defaultStyle}
              >
                {navItem.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="absolute right-32 self-center max-lg:hidden ">
        <Button className="cursor-pointer">
          <Link href="#">Apply Now</Link>
        </Button>
      </div>
    </nav>
  );
}
