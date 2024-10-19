import { CallIcon } from '@/app/assets/call'
import { EmailIdIcons } from '@/app/assets/email'
import { FaceBookIcon } from '@/app/assets/facebook'
import { InstagramIcon } from '@/app/assets/instagram'
import { LinkedinIcons } from '@/app/assets/linkedIn'
import { LocationIcon } from '@/app/assets/location'
import { TagIcon } from '@/app/assets/tag'
import { TwitterIcon } from '@/app/assets/twiter'
import { UserIcon } from '@/app/assets/user'
import { WhatsappIcon } from '@/app/assets/whatsapp'
import React, { useRef } from 'react'

export const ConductMe = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    
    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.reset();
            console.log("Form has been reset!");
        }
    }
    return (
        <div className='flex justify-between items-center flex-row gap-12 w-full max-sm:flex-col'>
            <div className='grid place-items-normal gap-4 w-full'>
                <h4 className="text-[24px] font-bold">Conduct us!</h4>
                <p className="text-[14px]">
                    We can solve your problem if you do not tell us about it
                </p>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <UserIcon />
                    <h2 className='text-[18px] font-semibold'>Henry Dyson J</h2>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <TagIcon />
                    <h2 className='text-[18px] font-semibold'>Front End Developer</h2>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <LocationIcon />
                    <h2 className='text-[18px] font-semibold'>Chennai</h2>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <EmailIdIcons />
                    <h2 className='text-[18px] font-semibold'>henrydysonaricjasan1310@gmail.com</h2>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <CallIcon />
                    <h2 className='text-[18px] font-semibold'>+91 7094337921</h2>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <a href='https://www.facebook.com/henrydyson.dyson' target='_blank'> <FaceBookIcon /></a>
                    <a href='https://x.com/HenryDysonJ' target='_blank'> <TwitterIcon /></a>
                    <a href='https://www.linkedin.com/in/henry-dyson-j-91b75519a' target='_blank'> <LinkedinIcons /></a>
                    <a href='https://www.instagram.com/black_paiyan_bl' target='_blank'> <InstagramIcon /></a>
                    <a href='https://wa.me/+917094337921' target='_blank'> <WhatsappIcon /></a>
                </div>
            </div>

            <div className='grid place-items-normal w-full h-full'>

                <div className='flex justify-between items-center flex-row gap-2 w-full h-full bg-stone-500 rounded-md px-4 py-4 shadow-lg'>
                    <form ref={formRef} id="myForm" target='_blank' action={'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe3W5SNp32guxT9OfTTZGqvlz69f9OtyI-j7mn6ZVDnx03gMg/formResponse'} method='post' className='flex justify-center items-start flex-col gap-y-4 w-full'>
                        <input name='entry.2005620554' className='bg-white p-4 rounded-md w-full focus:outline-none focus:ring-0 text-stone-600 font-semibold' placeholder='Your name' />
                        <input name='entry.1045781291' className='bg-white p-4 rounded-md w-full focus:outline-none focus:ring-0 text-stone-600 font-semibold' placeholder='Your Email' />
                        <textarea name='entry.1065046570' className='bg-white p-4 rounded-md w-full focus:outline-none focus:ring-0 text-stone-600 font-semibold' placeholder='Message' rows={4} />
                        <button onClick={() => handleSubmit()} type='submit' className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white">
                            <div className="flex justify-center items-center gap-2 rounded-md bg-black px-3 py-2">
                                <p className="text-[18px] font-medium cursor-pointer">Submit</p>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
