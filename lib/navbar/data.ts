import { HomeIcon, InboxIcon, QueueListIcon, Cog6ToothIcon} from '@heroicons/react/24/outline'

interface INavInfo{
    name:string;
    path:string;
    icon: any
}
const navData:Array<INavInfo> = [
    {
        name: "Home",
        path: "/",
        icon: HomeIcon
    },
    {
        name: "Orders",
        path: "orders",
        icon: InboxIcon
    },
    {
        name: "Products",
        path: "products",
        icon: QueueListIcon
    },
    {
        name: "Settings",
        path: "settings",
        icon: Cog6ToothIcon
    },
]


export default navData;