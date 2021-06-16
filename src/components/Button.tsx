import { useMemo } from "react";

export type ButtonProps = {
  /**
   * 버튼의 색상
   */
  variant: "primary" | "secondary" | "success" | "cancel";
  /**
   * 버튼 클릭 이벤트
   */
  onClick?: (e?: any) => void;
};

export const Button = (props: ButtonProps) => {
  const { variant, onClick } = props;

  const className = useMemo(() => {
    let btnClass = "";

    switch(variant) {
      case "primary": 
        btnClass = "bg-blue-500 hover:bg-blue-700 active:bg-blue-600"; 
        break;
      case "secondary": 
        btnClass = "bg-red-500 hover:bg-red-700 active:bg-red-600"; 
        break;
      case "success": 
        btnClass = "bg-green-500 hover:bg-green-700 active:bg-green-600"; 
        break;
      case "cancel": 
        btnClass = "bg-gray-500 hover:bg-gray-700 active:bg-gray-600"; 
        break;
      default: btnClass = "bg-blue-500 hover:bg-blue-700 active:bg-blue-600"; 
    }

    return `text-white font-bold py-2 px-4 rounded focus:outline-remove ${btnClass}`;
  }, [variant]);

  return <button onClick={onClick} className={className}>Default</button>
};