import Image from "next/image";
import logo from "@/assets/logo/logo-b.svg"

export default function Footer() {

    return(
        <footer className="flex flex-col p-12 bg-black text-white items-center">
           <Image src={logo} alt="Footer Logo" className="w-40 h-full object-cover"/>
           
            <div className="flex text-center mx-auto text-sm">
                <p>&copy; Amor_NG 2026. All rights reserved</p>
            </div>
        </footer>
    )
}