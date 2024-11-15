"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FC, Fragment } from "react";
import { useLocale } from "next-intl";
import uz from "@/lang_flag/uzbekistan_5315454.png"
import ru from "@/lang_flag/russia_4628645.png"
import { usePathname } from "next/navigation";

export const headerLanguage = [
  {
    id: "Russia",
    name: "ру",
    href: "ru",
    flag: ru,
  },
  {
    id: "Uzbek",
    name: "uz",
    href: "uz",
    flag: uz,
  },
];

interface LangDropdownProps {
  panelClassName?: string;
}

const LangDropdown: FC<LangDropdownProps> = ({
  panelClassName = "z-10 w-screen max-w-[130px] px-4 mt-4 right-0 sm:px-0",
}) => {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleSwitchLang = (lang: string) => {
    const arrPathName = pathname.split("/");
    const currentLang = arrPathName[1];
    let strPathname;

    if (currentLang && (currentLang === "uz" || currentLang === "ru")) {
      arrPathName[1] = lang;
      strPathname = `/${arrPathName.slice(1).join("/")}`;
    } else {
      arrPathName.splice(1, 0, lang);
      strPathname = `/${arrPathName.slice(1).join("/")}`;
    }

    return strPathname
  };

  return (
    <div className="LangDropdown flex items-center">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : ""}
             group px-3 py-1.5 border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              {/* <GlobeAltIcon className="w-[25px] h-[25px] opacity-80" /> */}
              <Image
                src={
                  currentLocale == "uz" ? uz : currentLocale == "ru" ? ru 
               : "" }
                alt="locale"
                width={20}
                height={30}
              />
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70"}
                  ml-2 h-4 w-4  group-hover:text-opacity-80 transition text-white ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className={`absolute ${panelClassName}`}>
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7 ">
                    {headerLanguage.map((item, index) => (
                      <a
                        key={index}
                        href={handleSwitchLang(item.href)}
                        onClick={() => {
                          close();
                        }}
                        className={`flex  items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                          item.href == currentLocale
                            ? "bg-gray-100 dark:bg-neutral-700"
                            : "opacity-80"
                        }`}
                      >
                        <div className="flex items-center gap-1 justify-center w-full">
                          <Image src={item.flag} alt="flag" width={20} />
                          <p className="text-sm font-medium text-black">{item.name}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
export default LangDropdown;
