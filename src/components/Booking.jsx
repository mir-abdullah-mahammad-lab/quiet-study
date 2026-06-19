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
    //  console.log(session?.user.name, 'yaoooo bro are u theree')
     const user = session?.user.name

   const handleSubmit = async (e)=>{
                e.preventDefault()
                const timeSlot = {
                    user: user,
                    date : date?.toString(),
                    startTime: startTime?.toString(),
                    endTime : endTime?.toString(),
                    _id :_id,
                    image: image,
                    hourlyRate: hourlyRate
                }

                const reqPost =  await fetch('http://localhost:5000/personal-booking',{
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