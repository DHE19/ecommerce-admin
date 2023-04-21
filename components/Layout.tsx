import Nav from './Navbar/Nav';
import {useSession, signIn, signOut} from 'next-auth/react'

interface Props{
    children: React.ReactNode;
}

const Layout:React.FC<Props> = ({children}) => {
  const {data: session} = useSession();
  if(!session){
    return (
      <div className="bg-blue-900 h-screen w-screen flex items-center">
        <div className="text-center w-full">
          <button className="bg-white p-2 rounded-lg text-slate-900"
          onClick={() => signIn('google')}
          >Login with Google</button>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-blue-900 min-h-screen flex'>
      <Nav/>
        <div className='bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4 text-blue-900'>
            {children}
        </div>
    </div>
  )
}

export default Layout;