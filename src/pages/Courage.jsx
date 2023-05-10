import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../Data.js';

const Courage = () => {
    const countChecked = () => {
        const input = document.querySelectorAll('input');
        var count = 0;
        for (let i = 0; i < 5; i++) {
            if (input[i].checked) {
                count += 1;
                userData[0].courageCheckedArr[i] = true;
            } else {
                userData[0].courageCheckedArr[i] = false;
            }
        }
        userData[0].valueCount = count;
    };

    const refreshPage = () => {
        let text = 'You confirm refresh?\nEither OK or Cancel.';
        if (window.confirm(text) === true) {
            window.location.reload();
        }
    };

    const handleClick = (id) => {
        const ip = document.getElementsByTagName('input');
        ip[id].checked = !ip[id].checked;
    };

    return (
        <div className="bg-white w-[90%] lg:w-[70%] lg:h-auto rounded-md lg:rounded-3xl px-3 lg:p-4 mx-auto mt-3 lg:mt-10">
            <h1 className="text-center lg:text-left lg:ml-10 mt-2 lg:mt-0 font-semibold hover:scale-105 transition duration-500 ease-in">
                Courage
            </h1>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[0].courageCheckedArr[0] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(0)}>
                    1. I work on the next highest priority Product Backlog Item (I do not cherry pick the work I pick up
                    in the Sprint)
                </p>
            </div>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[0].courageCheckedArr[1] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(1)}>
                    2. If I see something that is wrong with what I'm being asked to do, I will say so.
                </p>
            </div>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[0].courageCheckedArr[2] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(2)}>
                    3. I will question & reproach my team members if I feel that they are doing something wrong.
                </p>
            </div>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[0].courageCheckedArr[3] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(3)}>
                    4. Regardless of the person talking, I will correct them if I believe that they are incorrect.
                </p>
            </div>
            <div className="flex items-center py-3 lg:py-0 my-2 lg:my-6">
                {userData[0].courageCheckedArr[4] ? (
                    <input
                        type="checkbox"
                        className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105"
                        defaultChecked
                    />
                ) : (
                    <input type="checkbox" className="mx-4 w-5 h-5 hover:cursor-pointer hover:scale-105" />
                )}
                <p className="flex-1 hover:cursor-pointer" onClick={() => handleClick(4)}>
                    5. I will stand firm if I believe I am right, even if I'm in the minority within the group.
                </p>
            </div>
            <div className="flex h-[40px] mb-4 justify-around">
                <button
                    onClick={refreshPage}
                    className="w-[20%] transition duration-500 ease-in-out border-2 border-solid border-black bg-white text-black font-medium rounded hover:scale-105 hover:bg-black hover:text-white hover:font-bold"
                >
                    Refresh
                </button>
                <Link className="w-[20%]" to={'/Commitment'}>
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

export default Courage;
