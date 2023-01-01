import styled from "@emotion/styled";
import { Avatar, Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setWidth } from '../store/slices/sidebar';
import NavbarMenu from "./NavbarMenu";


function Navbar() {

  const [screenWidth, setScreenWidth] = useState('');
  console.log(screenWidth);
  const dispatch = useDispatch();
  const width = useSelector((state) => state.sidebar.value);
  
  const handleSidebar = () => {
    if (width === 'block') {
      dispatch(setWidth('none'))
    } else {
      dispatch(setWidth('block'))
    }
  }
  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (e) => {
        if (!anchorEl) {
            setAnchorEl(e.currentTarget);
        } else {
            setAnchorEl(null);
        }
    }
 
  return (
    <Nav>
      <Box>
        <IconButton size="medium" onClick={handleSidebar}>
          <MdMenu />
        </IconButton>
      </Box>
      <Box>
        <IconButton size="small" onClick={handleMenu}>
          <Avatar />
        </IconButton>
      </Box>
      <NavbarMenu open={open} anchorEl={anchorEl} handleMenu={handleMenu} />
    </Nav>
  )
}
const Nav = styled(Box)(({ theme }) => ({
  padding: '2px 10px',
  borderBottom: '1px solid lightgrey',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: '1'
}))
export default Navbar;