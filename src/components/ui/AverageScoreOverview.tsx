import { MdKeyboardArrowRight } from "react-icons/md";

const AverageScoreOverview = ({ score = "75" }) => {

    const scoreProgressBarClassNames = `flex justify-center items-center w-[200px] h-[200px] rounded-[50%] bg-[radial-gradient(closest-side,white_79%,transparent_80%_100%),conic-gradient(#25f9c6_75%,#2ca5ff_0)]`;
    

    return (
        <div className="border-[1px] rounded-md h-full w-full p-[10px] flex flex-col gap-[30px]">
            <h2 className="text-center font-[500] text-[22px]">Average Score</h2>
            <div className="flex items-center justify-stretch w-full">
                <div className="flex items-center justify-evenly w-full">
                    <div className={scoreProgressBarClassNames}>
                        <p className="text-[50px] font-[500]">{score}</p>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <p className="text-[25px] font-[500]">{score}%</p>
                        <p className="gray-text">About Graph</p>
                        <div className="flex items-center gap-[5px]"><p className="text-[16px] font-[500] text-[#40b7d5]">See Detail</p> <div><MdKeyboardArrowRight color="gray" /></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AverageScoreOverview