// import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import Logo from "../../public/logo-desc-big-nobg.png";
import { FaMoon, FaSun } from "react-icons/fa6";

export const TopBar = () => {
    //   const { setTheme, theme } = useTheme();

    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const clicked = () => {
        const menus = document.getElementById("menus");
        menus?.classList.remove("left-0");
        menus?.classList.add("left-full");
    };

    //   const changeTheme = () => {
    //     if (theme == "dark") {
    //       console.log("hi");
    //       return setTheme("light");
    //     } else {
    //       console.log("hi");
    //       return setTheme("dark");
    //     }
    //   };

    return (
        <>
            <div className="h-[90px] w-full gap-10 backdrop-blur-lg top-0 fixed shadow-md bg-zinc-100 z-10 justify-center text-center flex">
                <Image
                    alt="Logo"
                    src={Logo}
                    width={100}
                    height={150}
                    className="text-xl lg:text-3xl ml-4 font-bold"
                    objectFit="cover"
                ></Image>
                <div className="">
                    <div className="inline-block lg:hidden">
                        <button
                            className="btn px-2 m-[25px]"
                            onClick={() => {
                                const menus = document.getElementById("menus");
                                if (menus?.classList.contains("left-0")) {
                                    menus.classList.remove("left-0");
                                    menus.classList.add("left-full");
                                } else {
                                    menus?.classList.remove("left-full");
                                    menus?.classList.add("left-0");
                                }
                            }}
                        >
                            <BiMenu />
                        </button>
                    </div>
                    <div
                        id="menus"
                        className="absolute flex-col transition-all flex w-full bg-opacity-80 left-full dark:bg-neutral-950 dark:bg-opacity-80 bg-neutral-300 h-screen lg:bg-transparent dark:lg:bg-transparent lg:flex-row lg:left-0 lg:relative lg:inline-block lg:h-0 lg:w-auto pt-20 lg:pt-0"
                    >
                        <Link href="/">
                            <button onClick={clicked} className="btn m-5">
                                Home
                            </button>
                        </Link>
                        <Link href="/support">
                            <button onClick={clicked} className="btn m-5">
                                Katalog
                            </button>
                        </Link>
                        <Link href="/read">
                            <button onClick={clicked} className="btn m-5">
                                Akun
                            </button>
                        </Link>
                    </div>
                    {/* <div className="inline-block">
            <button
              className="btn px-2 m-[25px] lg:m-5 lg:px-3 lg:py-3"
              onClick={changeTheme}
            >
              {theme == "dark" ? <FaMoon /> : <FaSun />}
            </button>
          </div> */}
                </div>
            </div>
        </>
    );
};
