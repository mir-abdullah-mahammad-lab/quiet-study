import Image from "next/image";
import { Card, Chip } from "@heroui/react";

const RoomDetails = async ({ params }) => {
    const { Id } = await params
    // console.log('id of the room',Id)

    const roomDetailsById = await fetch(`http://localhost:5000/all-rooms/${Id}`)

    const roomDetails = await roomDetailsById.json()
    console.log(`this is the single room details by id:`, roomDetails)
    const { _id, image, name, description, floor, seatCapacity, hourlyRate, amenities } = roomDetails
    return (
        <div className="min-w-7xl mx-auto flex flex-col justify-center items-center">
            <Image
                src={image}
                alt={"room-picture"}
                width={800}
                height={500}>

            </Image>

            <Card className="w-auto h-auto m-10">

                <Card.Header >
                    <Card.Title className="text-7xl">{name}</Card.Title>                    
                </Card.Header>

                <Card.Description className="pt-2 text-black text-3xl m-5">{description}</Card.Description>
              <div className="grid grid-cols-2">
                 <div className="space-x-5">
                <Card.Content className="italic text-5xl m-5">{floor}</Card.Content>
               <Card.Content className="italic text-5xl m-5">{seatCapacity}</Card.Content>
               <Card.Content className="italic text-accent-hover text-5xl m-5">{hourlyRate}</Card.Content>
               </div>
               <div className="flex flex-col gap-5">
                {amenities.map((a,i) => <Chip key={i} color="success" className="text-2xl">{a}</Chip>)}
               </div>
              </div>
            </Card>

        </div>
    );
};

export default RoomDetails;