import Image from "next/image";
import styles from "./MainBox.module.scss";
import { FaLinkedinIn, FaGithub, FaInstagram, FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { Glory, Mako } from "next/font/google";

const glory = Glory({
    subsets: ["latin-ext"],
});

const mako = Mako({
    subsets: ["latin-ext"],
    weight: "400",
});

const MainBox = () => {
    const iconsNames = [FaLinkedinIn, FaGithub, FaInstagram, MdDownload];
    const iconBgColors = ["#0077b5", "#171515", "#FCAF45", "#FF0000"];

    return (
        <>
            <div
                className={`flex h-1/2 w-1/2 p-10 min-w-[600px] content-start justify-between ${styles.roundedContainer}`}
            >
                {/* hellosdfds */}
                <div className="flex flex-col justify-between w-4/6">
                    <p className={`${mako.className} text-[#FF7A7A] text-xl`}>Hey! It's me, </p>
                    <p className={`${mako.className} text-[#C3FFFF] text-5xl`}>Alnas Kabeer</p>
                    <p className={`${glory.className} text-[#71C6EA] text-xl`}>
                        Cross Platform Developer | Learner | Problem Solver
                    </p>
                    <p className={`${glory.className} text-white text-lg/6`}>
                        A curious and motivated student, constantly learning about the latest tools technology has to
                        offer. Easily intrigued by challenging puzzles and loves finding out-of-the-box solutions for
                        difficult problems.
                    </p>
                </div>
                <div></div>
                <div className="flex flex-col justify-between ">
                    {iconsNames.map((iconName, index) => (
                        <button key={`icon-${index}`}>
                            <div className={` bg-[${"#171515"}] p-3 rounded-full`}>
                                {iconName({ color: "white", size: "20" })}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MainBox;
