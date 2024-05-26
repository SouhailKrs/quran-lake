"use client";

import { Link } from "@/lib/intl";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

interface INavbar {}

export default function Navbar({}: INavbar) {
  const t = useTranslations("Navigation");
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link href={"/"} className="flex items-center">
        <p className="text-3xl font-bold text-gray-900 text-ellipsis">
          {t("logo")}
        </p>
      </Link>
      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <Link href={"/reciters"}>
          <p className="bg-primary text-white rounded-md px-3 py-2 text-sm font-medium hover:ring-1">
            {t("reciters")}
          </p>
        </Link>
      </div>
    </header>
  );
}