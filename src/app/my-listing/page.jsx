'use client'

import PersonRoomListed from "@/components/PersonRoomListed";
import { authClient } from "@/lib/auth-client";
import { useState,useEffect } from "react";

const MyRoomListing =  () => {
        const [rooms, setRooms] = useState([])

        const {data : session } = authClient.useSession()
        const n = session?.user?.id
        // console.log(n , `this is user form session `)
        
       useEffect(()=>{
         const fetch_user_booked_rooms= async () =>{
                const all_rooms = await fetch(`http://localhost:5000/personal-all-bookings/${n}`)
                const all_rooms_json = await all_rooms.json()
                setRooms(all_rooms_json)
                
        }
        fetch_user_booked_rooms()
       })

        
        // console.log('is it a promise of the function ')
        
    
    return (
        <div>
          
          <PersonRoomListed rooms={rooms}></PersonRoomListed>
        </div>
    );
};

export default MyRoomListing;