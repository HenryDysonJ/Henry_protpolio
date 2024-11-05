import React from 'react'

interface Buttons {
    label: string;
    startIcon?: React.ReactNode;
    onClick: () => void;
}

const CustomButton = (props: Buttons) => {
    const { label, startIcon, onClick } = props;
    return (
        <button onClick={onClick} className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white">
            <div className="flex justify-center items-center gap-2 rounded-md bg-black w-max px-3 py-2">
                {startIcon && startIcon}<span className="text-[18px] font-medium cursor-pointer">{label}</span>
            </div>
        </button>
    )
}

export default CustomButton