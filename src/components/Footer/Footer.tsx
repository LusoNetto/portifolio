import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { handleEmail } from "../../Pages/Home/sections/scripts";

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/LusoNetto")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/luciano-augusto-da-silva-junior-a03439353/")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton onClick={handleEmail}>
                            <EmailIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign="center">
                        © 2025 Luciano Junior - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer
