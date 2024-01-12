import { BiFilter } from "react-icons/bi";
import { filterOptions } from "../../constants";
import { IFilterOption } from "../../types";
import { IoMdArrowDropdown } from "react-icons/io";

const ChartFilters = ({ selectedFilter, setSelectedFilter }: {
    selectedFilter: IFilterOption, setSelectedFilter: React.Dispatch<React.SetStateAction<IFilterOption>>
}) => {

    return <div className="flex items-center gap-[20px]">
        <div className="flex items-center h-[35px] rounded-md border-[1px] px-[15px] gap-[20px] cursor-pointer">{filterOptions.map((option) => {
            const isActive = option.label === selectedFilter.label;
            return <p className={`${isActive ? "text-[#2ca5ff]" : "text-black"} hover:text-[#2ca5ff] `} onClick={() => setSelectedFilter(option)} key={option.label}>{option.label}</p>
        })}</div>
        <button type="button" className="flex items-center w-[120px] justify-between bg-[#2ca5ff] rounded-md px-[5px] text-white h-[35px]"><BiFilter /> <p>Filter</p><IoMdArrowDropdown /></button>
    </div>
};


export default ChartFilters;