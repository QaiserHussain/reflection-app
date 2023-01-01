import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {

    return (
        <div style={{ display: 'flex', flex: '1', height: '100vh'}}>
            <div style={{ borderRight: '1px solid lightgrey'}}>
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