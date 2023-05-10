import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../Data';

const Commitment = () => {
    const countChecked = () => {
        const input = document.querySelectorAll('input');
        var count = 0;
        for (let i = 0; i < 5; i++) {
            if (input[i].checked) {
                count += 1;
                userData[1].commitmentCheckedArr[i] = true;
            } else {
                userData[1].commitmentCheckedArr[i] = false;
            }
        }
        userData[1].valueCount = count;
    };

    const handleClick = (id) => {
        const ip = document.getElementsByTagName('input');
        ip[id].checked = !ip[id].checked;
    };

    return (
        <div className="bg-white w-[90%] lg:w-[70%] lg:h-auto rounded-md lg:rounded-3xl px-3 lg:p-4 mx-auto mt-3 lg:mt-10">
            <h1 className="text-center lg:text-left lg:ml-10 mt-2 lg:mt-0 font-semibold hover:scale-105 transition duration-500 ease-in">
                Commitment
            </h1>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[1].commitmentCheckedArr[0] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(0)}>
                    1. I always know what the sprint goal is and how my work supports it.
                </p>
            </div>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[1].commitmentCheckedArr[1] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(1)}>
                    2. I do everything I can to ensure we achieve the goals of the sprint.
                </p>
            </div>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[1].commitmentCheckedArr[2] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(2)}>
                    3. In my current team, I have never thought of taking a sick day to avoid going into work.
                </p>
            </div>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[1].commitmentCheckedArr[3] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(3)}>
                    4. I always arrive on time for the events, my colleagues never have to wait for me to start the
                    event.
                </p>
            </div>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[1].commitmentCheckedArr[4] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(4)}>
                    5. I know what it means to say that an item is done, i.e. I know the criteria that meets our
                    Definition of Done.
                </p>
            </div>
            <div className="flex h-[40px] mb-4 justify-around">
                <Link className="w-[30%]" to={'/'}>
                    <button
                        onClick={countChecked}
                        className="w-[100%] h-full transition duration-500 ease-in-out border-2 border-solid border-black bg-white text-black font-medium rounded hover:scale-105 hover:bg-black hover:text-white hover:font-bold"
                    >
                        Back
                    </button>
                </Link>
                <Link className="w-[30%]" to={'/Focus'}>
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

export default Commitment;
