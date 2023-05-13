import Link from "next/link"
interface IProps{
    path:string;
    classStyle:string;
    title:string;
    Icon: React.ReactNode
}

const NavLink:React.FC<IProps> = ({path,classStyle,title, Icon}) => {
    return (
        <Link href={`${path}`} className={classStyle}>
            {Icon}
           <span> {title}</span>
        </Link>
    )
}

export default NavLink
