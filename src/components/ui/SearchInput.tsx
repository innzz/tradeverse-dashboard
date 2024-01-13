import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { useRef, useState } from "react";

const SearchInput = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const tiiaRef = useRef<HTMLAnchorElement>(null);

    //Todo can be added searchText if want to use
    const [, setSearchText] = useState("");

    return (
        <div className="border-[1px] flex items-center h-[50px] px-[10px] rounded-md cursor-text" onClick={() => {
            if (inputRef.current !== null) {
                inputRef.current.focus()
            }
        }} >
            <IoSearchSharp size={20} />
            <div className="flex-1 flex items-center pl-[10px]">
                <input ref={inputRef} type="text" name="search" placeholder="Search your question here or ask" className="outline-none border-none" onChange={(e) => {
                    setSearchText(e.target.value)
                    if (tiiaRef.current !== null && e.target.value.length > 0) {
                        tiiaRef.current.style.display = "none"
                    }else if (tiiaRef.current !== null && e.target.value.length === 0) {
                        tiiaRef.current.style.display = "block"
                    }
                }} />
                <a ref={tiiaRef} href="#" className="text-[#40b7d5]" >Tiia</a>
            </div>
            <FaMicrophone size={20} color="#40b7d5" />
        </div>
    )
}

export default SearchInput