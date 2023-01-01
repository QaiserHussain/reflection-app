import { Box, styled } from "@mui/material";

function Dashboard() {
  return (
    <DashboardContainer>Dashboard</DashboardContainer>
  )
}
const DashboardContainer = styled(Box)(({theme})=>({
    height:'80vh',
}))
export default Dashboard;