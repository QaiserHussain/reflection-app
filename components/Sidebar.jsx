import { Typography, Box, styled, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { list } from '../components/sidebarList'
import { useSelector } from 'react-redux'

function Sidebar() {
  const width = useSelector((state) => state.sidebar.value);
  const SidebarContainer = styled(Box)(({ theme }) => ({
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      display: width === 'block' ? 'none' : ''
    },
    [theme.breakpoints.up('sm')]: {
      display: width
    }
  }));
  
  return (
    <SidebarContainer>
      <Logo component='div'> Sidebar </Logo>
      <ListContainer>
        <List>
          {list.map(item => (
            <ListItem disablePadding key={item.id}>
              <ListItemButton sx={{ paddingLeft: '0px', paddingRight: '30px' }}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </SidebarContainer>
  )
}

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  textAlign: 'center',
  padding: '20px 0'
}))

const ListContainer = styled(Box)(({ theme }) => ({
  marginTop: '10px',
}))
export default Sidebar;