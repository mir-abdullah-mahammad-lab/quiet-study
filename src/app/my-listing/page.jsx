'use client'

import { authClient } from "@/lib/auth-client";

const myRoomListing =  () => {
       
        const {data : session } = authClient.useSession()
        const n = {current_user :  session?.user?.name}
        const user = n.current_user
        

        
    
    return (
        <div>
          this is mylisting
        </div>
    );
};

export default myRoomListing;