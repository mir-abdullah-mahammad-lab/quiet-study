import Image from "next/image";
import {Button} from "@heroui/react";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex-1">
                <Image
                    src={'https://i.ibb.co.com/TBGx2mRW/Chat-GPT-Image-Jun-8-2026-07-59-14-PM.png'}
                    alt={"Logo"}
                    width={100}
                    height={100}
                    className="rounded-full"></Image>
            </div>
            <div className="space-x-1.5">
                <Button variant="tertiary">
                    <Link href={'/'}>Home</Link>
                </Button>
                <Button variant="tertiary">
                    <Link href={'/rooms'}>Rooms</Link>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;