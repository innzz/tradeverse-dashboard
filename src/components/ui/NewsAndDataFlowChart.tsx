import { filterOptions } from "../../constants";
import { useState } from "react";
import { IFilterOption } from "../../types";
import ChartFilters from "./ChartFilters";

const NewsAndDataFlowChart = () => {
    const [selectedFilter, setSelectedFilter] = useState<IFilterOption>(filterOptions[0]);

    const YaxisNumbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    //This function is returning filtered array of times as per the selected filter limit
    const getFilteredTimes = () => {
        //This object indicates that whats the gap between times is selected if there's minutes then it will set filter by minutes vice versa for hours
        const filterIdentifier = {
            minutes: {
                set: (date: Date, increaseNumber: number) => {
                    const newDate = new Date(date);
                    newDate.setMinutes(newDate.getMinutes() + increaseNumber);
                    return newDate
                },
            },
            hours: {
                set: (date: Date, increaseNumber: number) => {
                    const newDate = new Date(date);
                    newDate.setHours(newDate.getHours() + increaseNumber);
                    return newDate
                },
            },
        };

        //setting current date by default
        let currentDate = new Date();

        const filteredTimes = [];

        const formatTimeString = (date: Date) => {
            let hours = date.getHours(); // gives the value in 24 hours format
            const AmOrPm = hours >= 12 ? 'PM' : 'AM';
            hours = (hours % 12) || 12;
            const minutes = date.getMinutes();
            const newMinutes = minutes === 0 ? "00" : `${minutes}`;
            const finalTime = hours + ":" + newMinutes + "" + AmOrPm;
            return finalTime
        }

        for (let i = 0; i < 13; i++) {
            if (i > 0) {
                const identifiertype = selectedFilter.increaseBy;
                currentDate = filterIdentifier[identifiertype as keyof typeof filterIdentifier].set(currentDate, selectedFilter.increaseNumber);
                const formattedTimeString = formatTimeString(currentDate)
                filteredTimes.push(formattedTimeString)
            } else {
                //Setting starting time to 12:00PM as shown in design
                currentDate.setHours(12, 0, 0);
                const formattedTimeString = formatTimeString(currentDate)
                filteredTimes.push(formattedTimeString)
                // filteredTimes.push(currentDate.toLocaleTimeString().slice(0, 5) + "PM")
            }
        }

        return filteredTimes

    }

    const XaxisTimes = getFilteredTimes();



    return (
        <div className="border-[1px] rounded-md h-full w-full p-[10px] flex flex-col gap-[15px]">
            <div className="flex items-center"><h2 className="font-[500] text-[22px] flex-1">News & Data Flow</h2> <ChartFilters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} /></div>
            <div className="flex-1">
                <div className="flex">
                    <div className="flex flex-col-reverse items-center w-[20px] mb-[20px]">
                        {YaxisNumbers.map((singleNumber) => <p className="gray-text" key={singleNumber}>{singleNumber}</p>)}
                    </div>
                    <div className="flex gap-[15px] relative">
                        {
                            XaxisTimes.map((time, i) => {
                                const isActive = i === 7;
                                return <div key={i} className="flex flex-col items-center w-[60px]">
                                    <div style={isActive ? { background: "#25f9c6" } : { backgroundImage: "radial-gradient(#dfdfdf 25px, transparent 0)", backgroundSize: "40px 40px" }} className="w-[2px] flex-1"></div>
                                    <p className={`${isActive ? "text-[#25f9c6]" : "text-gray-400"} text-[15px]`}>{time}</p>
                                </div>
                            })
                        }
                        <ColoredBall size={46} color="blue" top="10px" left="384px" />
                        <ColoredBall size={30} color="yellow" top="75px" left="50px" />
                        <ColoredBall size={25} color="blue" top="110px" left="200px" />
                        <ColoredBall size={25} color="red" top="90px" left="280px" />
                        <ColoredBall size={35} color="purple" top="70px" left="470px" />
                        <ColoredBall size={25} color="blue" top="100px" left="510px" />
                        <ColoredBall size={25} color="green" top="130px" left="520px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ColoredBall = ({ size, color, left, top }: { size: number, color: string, left?: string, top?: string }) => {
    return <div style={{ width: size, height: size, background: color, left: left, top: top }} className="rounded-full absolute shadow-[2px_0px_30px_0px_rgba(0,0,0,0.3)]"></div>
}


export default NewsAndDataFlowChart