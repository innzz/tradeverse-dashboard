import { TbWorldWww } from "react-icons/tb";
import { FaChalkboard } from "react-icons/fa6";
import { GrScorecard } from "react-icons/gr";
import { HiMiniBellAlert } from "react-icons/hi2";
import { PiPhoneCallFill } from "react-icons/pi";


export const sidebarLinks = [
    {
        Logo: TbWorldWww,
        route: "/",
        label: "News Quant",
    },
    {
        Logo: FaChalkboard,
        route: "/indicators",
        label: "Real Economic Indicators",
    },
    {
        Logo: GrScorecard,
        route: "/one-score",
        label: "One score",
    },
    {
        Logo: HiMiniBellAlert,
        route: "/alert-central",
        label: "Alert Central",
    },
    {
        Logo: PiPhoneCallFill,
        route: "/customer-support",
        label: "Customer Support",
    },
];


export const filterOptions = [
    {
        label: "5M",
        increaseBy: "minutes",
        increaseNumber: 5
    },
    {
        label: "15M",
        increaseBy: "minutes",
        increaseNumber: 15
    },
    {
        label: "30M",
        increaseBy: "minutes",
        increaseNumber: 30
    },
    {
        label: "1H",
        increaseBy: "hours",
        increaseNumber: 1
    },
    {
        label: "2H",
        increaseBy: "hours",
        increaseNumber: 2
    },
    {
        label: "4H",
        increaseBy: "hours",
        increaseNumber: 4
    },
];