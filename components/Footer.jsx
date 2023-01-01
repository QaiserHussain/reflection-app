import { styled, colors, Box } from "@mui/material";

function Footer() {
  return (
    <FooterContainer>Footer</FooterContainer>
  )
}

const FooterContainer = styled(Box)(({theme})=>({
  height:'300px',
  flex:'1',
  // backgroundColor:colors.grey[200],
  borderTop:'1px solid lightgrey'
}))
export default Footer;