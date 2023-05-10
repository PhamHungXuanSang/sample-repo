import React from 'react';
import { userData } from '../Data';
import { Link } from 'react-router-dom';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineController,
    LineElement,
    PointElement,
    RadialLinearScale,
    Title,
    Colors,
    Filler,
    RadarController,
} from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, RadialLinearScale, Title, Colors, Filler, RadarController);

const Result = () => {
    const ud = {
        labels: ['Courage', 'Commitment', 'Focus', 'Openness', 'Respect'],
        datasets: [
            {
                backgroundColor: 'rgba(255, 0, 255, 0.75)',
                data: userData.map((data) => data.valueCount),
            },
            {
                backgroundColor: 'transparent',
                borderWidth: 0,
                borderColor: '#transparent',
                hoverBorderWidth: 0,
                hoverBorderColor: '#transparent',
                data: [0, 2, 4, 5, 2],
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Scrum Values Chart',
            },
        },
        scales: {
            r: {
                ticks: {
                    stepSize: 1,
                    display: true,
                    beginAtZero: true,
                },
                pointLabels: {
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    return (
        <div className="relative w-[90%] lg:w-[70%] lg:h-[60%] mt-10 bg-white rounded-md lg:rounded-3xl mx-auto">
            <Chart type="radar" className="mx-auto w-full" data={ud} options={options} />
            <div className="flex h-[40px] mb-4 justify-around">
                <Link to={'/Respect'} className="w-[30%] lg:w-[20%]">
                    <button className="w-[100%] h-full lg:absolute lg:bottom-[8%] lg:left-[4%] lg:w-[14%] lg:h-[40px] transition duration-500 ease-in-out border-2 border-solid border-black bg-white text-black font-medium rounded hover:scale-105 hover:bg-black hover:text-white hover:font-bold">
                        Back
                    </button>
                </Link>
                <Link to={'/'} className="w-[30%] lg:w-[20%]">
                    <button className="w-[100%] h-full lg:absolute lg:bottom-[8%] lg:right-[5%] lg:w-[14%] lg:h-[40px] transition duration-500 ease-in-out border-2 border-solid border-black bg-white text-black font-medium rounded hover:scale-105 hover:bg-black hover:text-white hover:font-bold">
                        Do Again
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Result;
