import HeroPage from "@/components/Hero";
import RoomCards from "@/components/RoomCards";
import Image from "next/image";

export default async function Home() {
   const allRooms = await fetch('http://localhost:5000/all-rooms')
    const dataOfRooms = await allRooms.json()
  return (
    <>
    <HeroPage></HeroPage>
    <div className="grid grid-cols-3 gap-4">{dataOfRooms.map(singleRoom => <RoomCards key={singleRoom._id} singleRoom={singleRoom}></RoomCards> )}</div>
    
    </>
  );
}
