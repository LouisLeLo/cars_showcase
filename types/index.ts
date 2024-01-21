import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number; // Số dặm thành phố trên mỗi gallon sẽ là số -> number
  class: string; //"compact car"
  combination_mpg: number; //"24"
  cylinders: number; //"4"
  displacement: number; //"1.6"
  drive: string; //"fwd"
  fuel_type: string; //"gas"
  highway_mpg: number; //"26"
  make: string; //"toyota"
  model: string; //"corolla"
  transmission: string; //"a"
  year: number; //"1993"
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
