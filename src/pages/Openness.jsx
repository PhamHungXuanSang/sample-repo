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
            <div className="flex items-center my-2 lg:my-6">
                {userData[3].opennessCheckedArr[0] ? (
                    <input
                        type="checkbox"
                        className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(0)}>
                    1. I do not shy away from telling difficult news to team members and stakeholders.
                </p>
            </div>
            <div className="flex items-center my-2 lg:my-6">
                {userData[3].opennessCheckedArr[1] ? (
                    <input
                        type="checkbox"
                        className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(1)}>
                    2. I do not hide away difficult issues in the hope that they will sort themselves out.
                </p>
            </div>
            <div className="flex items-center my-2 lg:my-6">
                {userData[3].opennessCheckedArr[2] ? (
                    <input
                        type="checkbox"
                        className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(2)}>
                    3. If something / someone is annoying me I will address it / tell them.
                </p>
            </div>
            <div className="flex items-center my-2 lg:my-6">
                {userData[3].opennessCheckedArr[3] ? (
                    <input
                        type="checkbox"
                        className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(3)}>
                    4. My colleagues can judge what state of mind I'm in, I can share my feelings with my them.
                </p>
            </div>
            <div className="flex items-center my-2 lg:my-6">
                {userData[3].opennessCheckedArr[4] ? (
                    <input
                        type="checkbox"
                        className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mr-4 ml-2 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(4)}>
                    5. I always say the true state of an item, and do not over/under play it.
                </p>
            </div>
            <div className="flex h-[40px] mb-4 justify-around">
                <Link className="w-[30%] lg:w-[20%]" to={'/Focus'}>
                    <button
                        onClick={countChecked}
                        className="w-[100%] h-full transition duration-500 ease-in-out border-2 border-solid border-black bg-white text-black font-medium rounded hover:scale-105 hover:bg-black hover:text-white hover:font-bold"
                    >
                        Back
                    </button>
                </Link>
                <Link className="w-[30%] lg:w-[20%]" to={'/Respect'}>
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
