'use client'
import Image from "next/image";
import { Avatar, Button, Chip, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    const {name, email, image} =  user || {}
    console.log(user,'user data from mong db')
    console.log(name, email,image)

    

    return (
        <div className="flex justify-between items-center  bg-linear-to-r from-gray-400 via-gray-900 to-gray-400">
            <div className="">
                <Image
                    src={'https://i.ibb.co.com/TBGx2mRW/Chat-GPT-Image-Jun-8-2026-07-59-14-PM.png'}
                    alt={"Logo"}
                    width={100}
                    height={100}
                    className="rounded-full"></Image>
            </div>
            {user? 
            <div className="space-x-1.5">
                <Button variant="tertiary">
                    <Link href={'/'}>Home</Link>
                </Button>
                <Button variant="tertiary">
                    <Link href={'/rooms'}>Rooms</Link>
                </Button>
                <Button variant="tertiary">
                    <Link href={'/rooms'}>My Listing</Link>
                </Button>
                <Button variant="tertiary">
                    <Link href={'/rooms'}>My Booking</Link>
                </Button>
            </div>
            
            :
            <div className="space-x-1.5">
                <Button variant="tertiary">
                    <Link href={'/'}>Home</Link>
                </Button>
                <Button variant="tertiary">
                    <Link href={'/rooms'}>Rooms</Link>
                </Button>
            </div>
            
             
            }

            {user? 

            <div className="space-x-1 flex items-center">
                <Dropdown>
                    <Button aria-label="Menu" className='w-auto h-auto rounded-full bg-inherit'>
                        <Avatar>
        <Avatar.Image alt="User" src={image} />
        
      </Avatar>
                    </Button>
                    <Dropdown.Popover>
                        <Dropdown.Menu >
                            <Dropdown.Item >
                                <Label>{'Hello !!!'}</Label>
                            </Dropdown.Item>
                            <Dropdown.Item >
                                <Label>{name}</Label>
                            </Dropdown.Item>

                            <Dropdown.Item >
                                <Label>{email}</Label>
                            </Dropdown.Item>

                            
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
                <Button variant="tertiary" onClick={async ()=>{await authClient.signOut();}}>Log-Out</Button>

            </div> 
            :
            <div className="space-x-1.5">
                <Button variant="tertiary"><Link href={`/register`}>Sign-Up</Link></Button>
                <Button variant="tertiary"><Link href={`/login`}>Sign-In</Link></Button>

            </div>
            }
        </div>
    );
};

export default Navbar;