'use client'
import Amenities from '@/components/Amenities';
import {
    Button, Form, FieldError, Input, Label,
    TextField, Checkbox, CheckboxGroup
} from "@heroui/react";
import { redirect } from 'next/navigation';
import { useState } from "react";

const RoomAdding = () => {
    const [selected, setSelected] = useState(['']);

    const dataOfForm = async (e)=>{
        e.preventDefault()
       
        const dataCollected = new FormData(e.currentTarget)
        const collectedDataObj = Object.fromEntries(dataCollected.entries())
        collectedDataObj.Amenities = selected
        // console.log(collectedDataObj)


        const res = await fetch('http://localhost:5000/add-rooms', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(collectedDataObj)
        })

        const data = await res.json()

        console.log('data from the server', data)
        if(data){
            redirect('/rooms')
        }


    }


    return (
        <div className='min-h-100 conatiner mx-auto'>
            <Form className="flex w-96 flex-col gap-4" onSubmit={dataOfForm}>
                {/* Room name */}
                <TextField
                    isRequired
                    name='name'
                    type="text"
                >
                    <Label>Room Name</Label>
                    <Input placeholder="Quiet Room Alpha" />
                    <FieldError />
                </TextField>

                {/* Room description  */}
                <TextField
                    isRequired
                    name='description'
                    type="text"
                >
                    <Label>Room Description</Label>
                    <Input placeholder="Modern study space..." />
                    <FieldError />
                </TextField>

                {/* Image */}
                <TextField
                    isRequired
                    name='image'
                    type="text"
                >
                    <Label>Enter Room Photo URL</Label>
                    <Input placeholder="URL" />
                    <FieldError />
                </TextField>

                {/* floor */}
                <TextField
                    isRequired
                    name='floor'
                    type="text"
                >
                    <Label>Enter Floor</Label>
                    <Input placeholder="Floor 2" />
                    <FieldError />
                </TextField>

                {/* seatCapacity */}
                <TextField
                    isRequired
                    name='seatCapacity'
                    type="number"
                >
                    <Label>Enter seatCapacity</Label>
                    <Input placeholder="2–4 people" />
                    <FieldError />
                </TextField>
                {/* hourlyrate */}
                <TextField
                    isRequired
                    name='hourlyRate'
                    type="number"
                >
                    <Label>Enter hourlyRate</Label>
                    <Input placeholder="2" />
                    <FieldError />
                </TextField>


                {/* option of array */}
                <div>
                    <CheckboxGroup className="min-w-[320px]" name="Amenities" value={selected} onChange={setSelected}>
                        <Label>Amenities</Label>
                        <Checkbox value="Whiteboard">
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label>Whiteboard</Label>
                            </Checkbox.Content>
                        </Checkbox>
                        <Checkbox value="projecter">
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label>Projector</Label>
                            </Checkbox.Content>
                        </Checkbox>
                        <Checkbox value="Wi-Fi">
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label>Wi-Fi</Label>
                            </Checkbox.Content>
                        </Checkbox>
                         <Checkbox value="Power-Outlets">
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label>Power-Outlets</Label>
                            </Checkbox.Content>
                        </Checkbox>
                         <Checkbox value="Quiet-Zone">
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label>Quiet-Zone</Label>
                            </Checkbox.Content>
                        </Checkbox>
                         <Checkbox value="Air-Conditioning">
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label>Air Conditioning</Label>
                            </Checkbox.Content>
                        </Checkbox>
                        <Label className="my-4 text-sm text-muted">Selected: {selected.join(", ") || "None"}</Label>
                    </CheckboxGroup>

                </div>
                <div className="flex gap-2">
                    <Button type="submit">Submit</Button>
                    <Button type="reset" variant="secondary">Reset</Button>
                </div>
            </Form>
        </div>
    );
};

export default RoomAdding;