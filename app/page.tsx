"use client";

import MainBox from "@/components/MainBox/MainBox";

export default function Home() {
    return (
        <>
            <NavigationButtons />
            <ScreenOne />
        </>
    );
}

const ScreenOne = () => (
    <>
        <section className="flex h-screen justify-center items-center">
            <MainBox />
        </section>
    </>
);

const ScreenTwo = () => {
    return (
        <>
            <section className="h-screen"></section>
        </>
    );
};

import React from "react";

export const NavigationButtons = () => {
    const [activeScreen, setActiveScreen] = React.useState(0);

    const screenTitles = ["Home", "Projects", "Experience", "Contact Me"];

    const screenButton = ({
        screenTitle,
        index,
        isSelected = false,
    }: {
        screenTitle: String;
        index: number;
        isSelected?: boolean;
    }) => (
        <div key={`${index}-${screenTitle}`}>
            <button
                className={"rounded-full m-2 " + (isSelected ? "opacity-80" : "opacity-20")}
                onClick={() => setActiveScreen(index)}
            >
                <h2 className="text-white">{screenTitle}</h2>
            </button>
        </div>
    );

    return (
        <div className="fixed h-full w-full flex flex-col justify-center content-end">
            <div className="flex flex-col m-5 h-72 justify-around">
                {screenTitles.map((screenTitle, index) =>
                    screenButton({ screenTitle, index, isSelected: index === activeScreen })
                )}
            </div>
        </div>
    );
};

// dump
// {/* <header className='flex justify-between fixed w-full'>
//         <div className={`${styles.headerButtons} ${styles.headerButtonLeft}`}>ABOUT ME</div>
//         <div className={styles.headerButtons}>PROJECTS</div>
//         <div className={`${styles.headerButtonRight} ${styles.headerButtons}`}>CONTACT ME</div>
//       </header> */}
//       {/* <aside className='fixed flex flex-col bottom-6 right-6'> */}
//         {/* <button className='border h-10 w-10 rounded-full m-2 flex justify-center items-center'>{FaAngleUp({color:'white'})}</button> */}
//         {/* <button className='border h-10 w-10 rounded-full m-2 flex justify-center items-center'>{FaAngleDown({color:'white'})}</button> */}
//         {/* <button className='border h-10 w-10 rounded-full m-2'>A</button> */}
//         {/* <button>V</button> */}
//       {/* </aside> */}
