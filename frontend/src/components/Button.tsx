import { ReactElement, ReactNode } from "react";

export default function Button({children,onClick,icon,variant,fullWidth}:
    {children:ReactNode,icon?:ReactNode,onClick?:()=>void, variant:string,fullWidth?:true}){
    const variantsStyle:Record<string,string> = {
      'dark': "bg-[#17191b] text-white border border-slate-600 hover:border-slate-400",
      'light': "bg-white text-black hover:bg-slate-100",
    };
    return (
      <button className={`py-2 px-6 flex justify-center gap-4 shadow-lg rounded ${variantsStyle[variant]}
       ${fullWidth==true && "w-full"}`} onClick={onClick}>
        <span>{icon}</span>
        {/* <span className={`w-full text-center font-medium text-lg`}>{children}</span> */}
        <span className={`font-medium text-lg`}>{children}</span>
      </button>
    );
}