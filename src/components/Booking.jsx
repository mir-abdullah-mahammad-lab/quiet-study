'use client'

import { Form, DateField, Label, Description, FieldError, TimeField, Button } from "@heroui/react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";


const Booking = ({roomDetails}) => {
    const [date, setDate] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
     const { _id, image, hourlyRate} = roomDetails

     const {data:session} = authClient.useSession()
     const userId = session?.user?.id

   const handleSubmit = async (e)=>{
                e.preventDefault()
                const timeSlot = {
                    userId: userId,
                    roomId:_id,
                    date : date?.toString(),
                    startTime: startTime?.toString(),
                    endTime : endTime?.toString(),
                    image: image,
                    hourlyRate: hourlyRate
                }

                const reqPost =  await fetch(`${process.env.BACKEND_SERVER}/personal-booking`,{
                    method:'POST',
                    headers: { "content-type":"application/json"},
                    body: JSON.stringify(timeSlot)
                })

                const returned_data = await reqPost.json()
                console.log(returned_data)
                if(returned_data){
                    redirect('/my-listing')
                }
               
                
                // console.log(timeSlot, 'this is timesold booked by user')
               
   }

    return (
        <div>
            <Form className="flex w-auto flex-col gap-4" onSubmit={handleSubmit}>
                <DateField value={date} onChange={setDate}>
                    <Label />
                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                    </DateField.Group>
                    <Description />
                    <FieldError />
                </DateField>
                <p className="text-black text-2xl text-bold">Start </p>
                <TimeField className="w-[256px]" name="time" value={startTime} onChange={setStartTime}>
                    <Label>Time</Label>
                    <TimeField.Group>
                        <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                    </TimeField.Group>
                </TimeField>

                <p className="text-black text-bold text-2xl">End </p>
                <TimeField className="w-[256px]" name="time" value={endTime} onChange={setEndTime}>
                    <Label>Time</Label>
                    <TimeField.Group>
                        <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                    </TimeField.Group>
                </TimeField>
                
                <Button type="submit" slot= "close">Submit</Button>

            </Form>
        </div>
    );
};

export default Booking;