import Image from 'next/image';
import React from 'react';

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
            <div className='flex justify-around w-full'>
                <div className='flex flex-col items-center justify-center'>
                    <p>{floor}</p>
                    <p>{seatCapacity}</p>
                    <p>{hourlyRate}</p>
                </div>
                <div className='text-red-950'>
                    {amenities.map(a => <li >{a}</li>)}
                </div>
            </div>


        </div>
    );
};

export default RoomCards;