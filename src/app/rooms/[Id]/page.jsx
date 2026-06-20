import Image from "next/image";
import { Button, Card, Chip, DateField, Form, Label, Modal } from "@heroui/react";
import { IoMdAdd } from "react-icons/io";
import Booking from "@/components/Booking";

const RoomDetails = async ({ params }) => {
    const { Id } = await params
    // console.log('id of the room',Id)

    const roomDetailsById = await fetch(`${process.env.BACKEND_SERVER}/all-rooms/${Id}`)

    const roomDetails = await roomDetailsById.json()
     
    const { _id, image, name, description, floor, seatCapacity, hourlyRate, amenities } = roomDetails
    return (
        <div className="min-w-7xl mx-auto flex flex-col justify-center items-center">
            <Image
                src={image}
                alt={"room-picture"}
                width={800}
                height={500}></Image>

            <Modal className='mt-10' >
                <Button variant="tertiary" className='text-4xl w-auto h-auto italic '> <span><IoMdAdd /></span>Book Room</Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Heading>Fill the form to book</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                               <Booking roomDetails={roomDetails}></Booking>
                            </Modal.Body>
                           
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>

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
                        {amenities.map((a, i) => <Chip key={i} color="success" className="text-2xl">{a}</Chip>)}
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default RoomDetails;