import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../Data';

const Openness = () => {
    const countChecked = () => {
        const input = document.querySelectorAll('input');
        var count = 0;
        for (let i = 0; i < 5; i++) {
            if (input[i].checked) {
                count += 1;
                userData[3].opennessCheckedArr[i] = true;
            } else {
                userData[3].opennessCheckedArr[i] = false;
            }
        }
        userData[3].valueCount = count;
    };

    const handleClick = (id) => {
        const ip = document.getElementsByTagName('input');
        ip[id].checked = !ip[id].checked;
    };

    return (
        <div className="bg-white w-[90%] lg:w-[70%] lg:h-auto rounded-md lg:rounded-3xl px-3 lg:p-4 mx-auto mt-3 lg:mt-10">
            <h1 className="text-center lg:text-left lg:ml-10 mt-2 lg:mt-0 font-semibold hover:scale-105 transition duration-500 ease-in">
                Openness
            </h1>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[3].opennessCheckedArr[0] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(0)}>
                    1. Whilst working on a story I do not get distracted.
                </p>
            </div>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[3].opennessCheckedArr[1] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(1)}>
                    2. If I am not enjoying the work in a story I still give it the attention it needs.
                </p>
            </div>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[3].opennessCheckedArr[2] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(2)}>
                    3. When enjoying working on a story I will not over work a story just to prolong it.
                </p>
            </div>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[3].opennessCheckedArr[3] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(3)}>
                    4. I do not procrastinate when working on a story.
                </p>
            </div>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[3].opennessCheckedArr[4] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(4)}>
                    5. As soon as the story is ready to move into a new state, I will tell my colleagues and either hand
                    it over or ensure that they know it is ready to pick up.
                </p>
            </div>
            <div className="flex h-[40px] mb-4 justify-around">
                <Link className="w-[20%]" to={'/Focus'}>
                    <button
                        onClick={countChecked}
                        className="w-[100%] h-full transition duration-500 ease-in-out border-2 border-solid border-black bg-white text-black font-medium rounded hover:scale-105 hover:bg-black hover:text-white hover:font-bold"
                    >
                        Back
                    </button>
                </Link>
                <Link className="w-[20%]" to={'/Respect'}>
                    <button
                        onClick={countChecked}
                        className="w-[100%] h-full transition duration-500 ease-in-out border-2 border-solid border-black bg-white text-black font-medium rounded hover:scale-105 hover:bg-black hover:text-white hover:font-bold"
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Openness;
