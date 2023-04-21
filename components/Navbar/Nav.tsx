import Link from "next/link"
import { BuildingStorefrontIcon, HomeIcon, InboxIcon, QueueListIcon, Cog6ToothIcon} from '@heroicons/react/24/outline'
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import navData from "@/lib/navbar/data";


const link = 'flex gap-1';
const activeLink =  link +  " bg-white text-blue-900 p-1 rounded-l-lg";
const  iconStyle ="h-6 w-6"
const Nav = () => {
    const router = useRouter();
    const {pathname} = router

    return (
        <aside className=" text-white p-4 pr-0">
                
                <NavLink path="/" 
                    classStyle={"flex gap-1 mb-4 mr-4"}
                    title="Admin Panel" 
                    Icon={<HomeIcon className={iconStyle}/>}/>

            <nav className="flex flex-col gap-2">
                {
                    navData.map((l,i) => {
                    let {name,path } = l;
                    return <NavLink 
                            key={i} 
                            path={path} 
                            title={name} 
                            classStyle={itsActive(path,pathname)} 
                            Icon={<l.icon className={iconStyle}/>}/>
                     } )
                }

            </nav>
        </aside>
    )
}

export default Nav


const itsActive = (name:string, currentPath:string):string =>{
    if(name === '/') return name === currentPath ? activeLink : link;
    return currentPath.includes(`/${name}`) ? activeLink : link
}