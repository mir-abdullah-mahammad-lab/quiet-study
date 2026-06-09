import Image from 'next/image';
import React from 'react';

const RoomCards = ({singleRoom}) => {
    console.log(singleRoom, 'Single Room details')
    const { image,name,description,floor,seatCapacity,hourlyRate, amenities} = singleRoom
    return (
        <div className='min-w-50 min-h-50 bg-gray-500 flex flex-col items-center justify-center'>
            <Image
            src={image}
            alt={'room-picture'}
            width={250}
            height={250} className='w-[250] h-[250]'></Image>
            <h2 className='italic text-3xl text-red-300'>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default RoomCards;