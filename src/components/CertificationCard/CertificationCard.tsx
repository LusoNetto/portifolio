import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

export interface CertificationCardProps {
    credential: string,
    examVersion: string,
    certificateID: string,
    dateOfIssue: string,
    status: string,
    link: string,
    downloadLink: string,
    imageLink: string
}

const CertificationCard: React.FC<CertificationCardProps> = ({
    credential,
    examVersion,
    certificateID,
    dateOfIssue,
    status,
    link,
    downloadLink,
    imageLink
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

    return (
        <StyledCard>
            <StyledImg src={imageLink} />
            <Typography variant="h5">
                Certificação: {credential}
            </Typography>
            <Typography>
                Versão: {examVersion}
            </Typography>
            <Typography>
                ID do Certificado: {certificateID}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                Data da Certificação: {dateOfIssue}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                Status: {status}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid size={{xs:6}}>
                    <StyledButton onClick={() => window.open(link)}>Ver certificado</StyledButton>
                </Grid>
                <Grid size={{xs:6}}>
                    <StyledButton onClick={() => window.open(downloadLink)}>Baixar certificado</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default CertificationCard;