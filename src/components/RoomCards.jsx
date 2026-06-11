import Image from 'next/image';
import {Chip} from "@heroui/react";
import { Button } from '@heroui/react';
import Link from 'next/link';
const RoomCards = ({ singleRoom }) => {
    console.log(singleRoom, 'Single Room details')
    const {_id, image, name, description, floor, seatCapacity, hourlyRate, amenities } = singleRoom
    return (
        <div className='min-w-50 min-h-50 bg-linear-to-t from-blue-200 to-blue-500 flex flex-col items-center justify-center p-5'>
            <Image
                src={image}
                alt={'room-picture'}
                width={250}
                height={250} className='w-[250] h-[250]'></Image>
            <h2 className='italic text-3xl text-blue-500'>{name}</h2>
            <p>{description}</p>
            <div className='flex flex-col gap-5 justify-around w-full m-5'>
                <div className='flex items-center justify-center gap-2'>
                    <Chip color="accent">{floor}</Chip>
                    <Chip color="accent">{seatCapacity}</Chip>
                    <Chip color="accent">{hourlyRate}</Chip>
                    
                </div>
                <div className='flex gap-2'>
                    {amenities.map((a,index) => <Chip key={index} color="success" className='text-center'>{a}</Chip>)}
                </div>
            </div>

            <Button variant="tertiary">
                    <Link href={`/rooms/${_id}`} className='text-red-600'>View Details</Link>
                </Button>


        </div>
    );
};

export default RoomCards;