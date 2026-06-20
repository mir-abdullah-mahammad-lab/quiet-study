import { Table } from "@heroui/react";
import Image from "next/image";

const PersonRoomListed = ({ rooms }) => {
    console.log(rooms, `this is rooms form my-listing`)
    return (
        <div className="min-w-7xl">
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Room</Table.Column>
                            <Table.Column>Start Time</Table.Column>
                            <Table.Column>End Time</Table.Column>
                            <Table.Column>Date</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {rooms.map((r,i)=> <Table.Row key={i}>
                                <Table.Cell>{<Image src={r.image}
                                alt={'image of the room'}
                                width={100}
                                height={100}></Image>}</Table.Cell>
                                <Table.Cell>{r.startTime}</Table.Cell>
                                <Table.Cell>{r.endTime}</Table.Cell>
                                <Table.Cell>{r.date}</Table.Cell>
                            </Table.Row>)}
                            

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default PersonRoomListed;