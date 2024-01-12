import { IconType } from "react-icons";

export type INavLink = {
    Logo: IconType;
    route: string;
    label: string;
  };

  export type IFocusTopic = {
    srNo: number,
    topicName: string,
    score: number
  };