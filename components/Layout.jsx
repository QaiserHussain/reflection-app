import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {useSelector} from 'react-redux'

function Layout({ children }) {
  const width = useSelector((state)=>state.sidebar.value)
    console.log(width);
    return (
        <div style={{ display: 'flex', flex: '1', height: '100vh'}}>
            <div style={{ borderRight: '1px solid lightgrey',display:width, width:'200px'}}>
                <Sidebar />
            </div>
            <div style={{ flex: '1', overflowY: 'auto' }}>
                <div><Navbar /></div>
                <div style={{padding:'10px'}}>{children}</div>
                <div><Footer /></div>
            </div>
        </div>
    )
}

export default Layout;