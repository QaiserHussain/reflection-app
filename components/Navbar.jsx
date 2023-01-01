import styled from "@emotion/styled";
import { Avatar, Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setWidth } from '../store/slices/sidebar';


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
 


  return (
    <Nav>
      <Box>
        <IconButton size="medium" onClick={handleSidebar}>
          <MdMenu />
        </IconButton>
      </Box>
      <Box>
        <IconButton size="small">
          <Avatar />
        </IconButton>
      </Box>
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