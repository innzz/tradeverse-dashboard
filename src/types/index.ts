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

export type IFilterOption = {
  label: string,
  increaseBy: string,
  increaseNumber: number
}

export type INews = {
  type: {
    name: string,
    color: string
  },
  description: string,
  score: number,
  impact: string,
  probability: string
};