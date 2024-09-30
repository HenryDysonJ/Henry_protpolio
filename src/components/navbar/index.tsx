import EmailIcon from "@/app/assets/email";
import { GithubIcon } from "@/app/assets/github";
import LinkedinIcon from "@/app/assets/linkedIn";

export const TopNavBar = () => {
    return (
        <div className="nav grid grid-cols-3 gap-4 py-4 px-20 bg-gradient-to-r from-black to-zinc-800 border-b border-b-slate-800">
            <div className="">
                <span className="text-gray-400 text-4xl font-bold cursor-pointer">Henry</span>
                <span className="text-4xl font-bold cursor-pointer"> Dyson J</span>
            </div>

            <div className="flex justify-center items-center gap-8">
                <span className="text-[18px] font-medium cursor-pointer">About</span>
                <span className="text-[18px] font-medium cursor-pointer">Skill</span>
                <span className="text-[18px] font-medium cursor-pointer">Projects</span>
            </div>

            <div className="flex justify-end items-center gap-8">
                <div className="flex justify-center items-center gap-2"><LinkedinIcon /><span className="text-[18px] font-medium cursor-pointer">Linkedin</span></div>
                <div className="flex justify-center items-center gap-2"><GithubIcon /><span className="text-[18px] font-medium cursor-pointer">Github</span></div>
                <div className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white">
                    <div className="flex justify-center items-center gap-2 rounded-md bg-black px-3 py-2">
                        <EmailIcon /><span className="text-[18px] font-medium cursor-pointer">Conduct me</span>
                    </div>
                </div>
            </div>
        </div>
    );
}