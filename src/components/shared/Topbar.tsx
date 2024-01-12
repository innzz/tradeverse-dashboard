import SearchInput from "../ui/SearchInput";
import { IoNotifications } from "react-icons/io5";
import UserProfilePictureCircular from "../ui/UserProfilePictureCircular";
import { IoMdArrowDropdown } from "react-icons/io";

const Topbar = () => {

  const curentLicense = ["USD/CAD", "AUD/USD"];

  return (
    <section className="flex">
      <div className="w-[70%] flex flex-col gap-[15px]">
        <SearchInput />
        <div className="flex items-center gap-[20px]">
          <p className="text-[16px] font-[500] text-[#40b7d5]">Current License : </p>
          <div className="flex items-center gap-[10px]">
            {curentLicense.map((license) => <p key={license} className="text-[13px] text-gray-500 font-[500]">{license}</p>)}
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <ProfileSection />
      </div>
    </section>
  )
};

const ProfileSection = () => {
  const user = {
    name: "Username"
  }
  return <div className="flex flex-col items-end gap-[15px]">
    <div className="flex items-center justify-end gap-[30px]">
      <div className="relative">
        <IoNotifications size={25} />
        <span className="absolute w-[15px] h-[15px] bg-red-600 text-[12px] flex items-center justify-center text-white rounded-full top-[-5px]  left-[10px]">2</span>
      </div>
      <UserProfilePictureCircular />
      <div className="w-[100px] flex items-center justify-between cursor-pointer">
        <p className="font-[500]">{user.name}</p>
        <IoMdArrowDropdown color="gray" size={20} />
      </div>
    </div>
    <div className="flex flex-col items-end">
      <h2 className="text-[22px] font-[500]">Welcome, {user.name}</h2>
      <p className="gray-text">Good to see you again!</p>
    </div>
  </div>
}

export default Topbar