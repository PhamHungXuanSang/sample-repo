import { Routes, Route } from 'react-router-dom';
import Courage from './pages/Courage';
import Commitment from './pages/Commitment';
import Focus from './pages/Focus';
import Openness from './pages/Openness';
import Respect from './pages/Respect';
import Result from './pages/Result';

export default function App() {
    return (
        <>
            <div className="bg-yellow-500 w-full h-[100vh] overflow-hidden flex items-center flex-col">
                <div className="bg-white w-[90%] lg:w-[70%] h-[8%] lg:h-[10%] py-2 rounded-md lg:rounded-lg mt-4 lg:mt-10 font-bold text-2xl lg:text-4xl flex items-center justify-center">
                    <a
                        href="https://www.scrum.org/resources/blog/visualising-scrum-values"
                        className="hover:scale-105 transition duration-500 ease-in-out hover:cursor-pointer"
                    >
                        Visualising Scrum Values
                    </a>
                </div>
                <Routes>
                    <Route path="/" element={<Courage />}></Route>
                    <Route path="/Commitment" element={<Commitment />}></Route>
                    <Route path="/Focus" element={<Focus />}></Route>
                    <Route path="/Openness" element={<Openness />}></Route>
                    <Route path="/Respect" element={<Respect />}></Route>
                    <Route path="/Result" element={<Result />}></Route>
                </Routes>
            </div>
        </>
    );
}
