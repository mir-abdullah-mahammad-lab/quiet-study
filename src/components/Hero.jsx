import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from "react-icons/fa";


const HeroPage = () => {
    return (
        <div className='min-w-50 min-h-50 bg-linear-to-r from-blue-200 to-blue-500 flex justify-end'>
            <div className='border w-full flex flex-col justify-center'>
                <h1 className='p-10 italic text-7xl bg-linear-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent'>Quiet Spaces. Better Focus. Easy Booking. </h1>

            <h1 className='pl-10 text-xl text-gray-900'>Browse available study rooms, choose your preferred time slot,<br /> 
            and book your ideal workspace in seconds.
            </h1>
            <div className='p-10'>
                <Button variant='tertiary'>
                <Link href={`/rooms`} className='flex items-center gap-2 text-2xl'> All Rooms <FaLongArrowAltRight /></Link>
            </Button>
            </div>
            </div>
            <Image
                src={'https://i.ibb.co.com/VWCy7Xnn/banner.jpg'}
                alt={'Hero-section'}
                width={500}
                height={400}
                className='object-cover'></Image>
        </div>
    );
};

export default HeroPage;