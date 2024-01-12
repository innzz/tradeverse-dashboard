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

        for (let i = 0; i < 13; i++) {
            if (i > 0) {
                const identifiertype = selectedFilter.increaseBy;
                currentDate = filterIdentifier[identifiertype as keyof typeof filterIdentifier].set(currentDate, selectedFilter.increaseNumber);
                filteredTimes.push(currentDate.toLocaleTimeString().slice(0, 5) + "PM")
            } else {
                //Setting starting time to 12:00PM as shown in design
                currentDate.setHours(12, 0, 0);
                filteredTimes.push(currentDate.toLocaleTimeString().slice(0, 5) + "PM")
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
                    <div className="flex gap-[15px]">
                        {
                            XaxisTimes.map((time,i) => {
                                const isActive = i === 7;
                                return <div key={time} className="flex flex-col items-center">
                                    <div style={isActive ? {background: "#25f9c6"} :{ backgroundImage: "radial-gradient(#dfdfdf 25px, transparent 0)", backgroundSize: "40px 40px" }} className="w-[2px] flex-1"></div>
                                    <p className={`${isActive ? "text-[#25f9c6]" : "text-gray-400" } text-[15px]`}>{time}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}




export default NewsAndDataFlowChart