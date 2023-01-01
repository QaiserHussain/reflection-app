import { Box, Button, styled, TextField, Typography } from "@mui/material";

function Login() {
    return (
        <FormContainer>
            <Form>
                <Logo>Reflection</Logo>
                <Caption component='div' variant='body1'>please login to your account</Caption>
                <form>
                    <TextField fullWidth type='email' placeholder="Email" />
                    <br />
                    <br />
                    <TextField fullWidth type='password' placeholder="Password" />
                    <br />
                    <br />
                    <Button type='submit' variant='contained' color='warning'> Login </Button>
                </form>
            </Form>
        </FormContainer>
    )
}

const FormContainer = styled(Box)(({ theme }) => ({
    flex: '1',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const Form = styled(Box)(({ theme }) => ({
    width: '400px',
    border: '1px solid lightgrey',
    borderRadius:'10px',
    textAlign: 'center',
    padding: '20px'
}));

const Logo = styled(Typography)(({ theme }) => ({
    fontSize: '30px'
}))
const Caption = styled(Typography)(({ theme }) => ({
    paddingBottom:'20px'
}))




export default Login;