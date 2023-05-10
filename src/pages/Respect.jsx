import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../Data';

const Respect = () => {
    const countChecked = () => {
        const input = document.querySelectorAll('input');
        var count = 0;
        for (let i = 0; i < 5; i++) {
            if (input[i].checked) {
                count += 1;
                userData[4].respectCheckedArr[i] = true;
            } else {
                userData[4].respectCheckedArr[i] = false;
            }
        }
        userData[4].valueCount = count;
    };

    const handleClick = (id) => {
        const ip = document.getElementsByTagName('input');
        ip[id].checked = !ip[id].checked;
    };

    return (
        <div className="bg-white w-[90%] lg:w-[70%] lg:h-auto rounded-md lg:rounded-3xl px-3 lg:p-4 mx-auto mt-3 lg:mt-10">
            <h1 className="text-center lg:text-left lg:ml-10 mt-2 lg:mt-0 font-semibold hover:scale-105 transition duration-500 ease-in">
                Respect
            </h1>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[4].respectCheckedArr[0] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(0)}>
                    1. I listen with equal intensity regardless of who is talking.
                </p>
            </div>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[4].respectCheckedArr[1] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(1)}>
                    2. When listening to people I never talk over them.
                </p>
            </div>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[4].respectCheckedArr[2] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(2)}>
                    3. I value everyone's opinion equally.
                </p>
            </div>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[4].respectCheckedArr[3] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(3)}>
                    4. I am never concerned who works on what item in the backlog.
                </p>
            </div>
            <div className="flex items-center py-1 lg:py-0 my-2 lg:my-6">
                {userData[4].respectCheckedArr[4] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(4)}>
                    5. I feel that my opinion is respected and that I have an equal say in the team.
                </p>
            </div>
            <div className="flex h-[40px] mb-4 justify-around">
                <Link className="w-[30%]" to={'/Openness'}>
                    <button
                        onClick={countChecked}
                        className="w-[100%] h-full transition duration-500 ease-in-out border-2 border-solid border-black bg-white text-black font-medium rounded hover:scale-105 hover:bg-black hover:text-white hover:font-bold"
                    >
                        Back
                    </button>
                </Link>
                <Link className="w-[30%]" to={'/Result'}>
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

export default Respect;
