import RoomCards from "@/components/RoomCards";

const allLibraryRooms = async () => {
    const allRooms = await fetch(`${process.env.BACKEND_SERVER}/all-rooms/private`)
    const dataOfRooms = await allRooms.json()
    // console.log(dataOfRooms)
    return (
        <div className="min-h-100 bg-gray-400">
            <h1>All Library Rooms: {dataOfRooms.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {dataOfRooms.map(singleRoom => <RoomCards key={singleRoom._id} singleRoom={singleRoom}></RoomCards> )}
            </div>
        </div>
    );
};

export default allLibraryRooms;