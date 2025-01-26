import { ReactNode } from "react";

interface butttonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  variant: string;
  fullWidth?: true;
  size?: string;
  defaultStyle?: string;
}
export default function Button({ children, onClick, icon, variant, fullWidth, size, defaultStyle }: butttonProps) {
  const variantsStyle: Record<string, string> = {
    dark: "bg-[#3b3838] hover:bg-[#464242] text-white border border-slate-500 hover:border-slate-400",
    light: "bg-white text-black hover:bg-slate-200 outline-slate-300",
  };
  const sizeStyles = `${size == "sm" ? "px-3 py-[6px] gap-2" : "px-6 py-2 gap-4"}`;
  const textStyles = `${size == "sm" ? "font-medium" : "font-medium text-lg"}`;
  const divStyles = `${fullWidth && "w-full"} ${defaultStyle} ${sizeStyles} ${variantsStyle[variant]}`;
  return (
    <button className={`${divStyles} flex justify-center items-center shadow-lg rounded`} onClick={onClick}>
      <span>{icon}</span>
      <span className={textStyles}>{children}</span>
    </button>
  );
}
