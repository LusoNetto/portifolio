import { Box, Container, Grid, Typography, styled } from "@mui/material";
import CertificationCard, { CertificationCardProps } from "../../../../components/CertificationCard/CertificationCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const CertificationsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const certifications = [
        {
            credential: "JSE™ - Certified Entry-Level JavaScript Programmer",
            examVersion:"JSE-40-01",
            certificateID:"o7DM.Xu0m.zmNw",
            dateOfIssue:"7 de novembro de 2024",
            status:"✅ Ativo",
            link: "https://verify.openedg.org/?id=o7DM.Xu0m.zmNw",
            downloadLink:"https://edube.org/certificates/verify/CrOe.fhmi.Kw1R/download",
            imageLink:"https://edube.org/uploads/media/default/0001/02/jse_badge.png"
        },
        {
            credential: "JSA™ - Certified Associate JavaScript Programmer",
            examVersion:"JSA-41-01",
            certificateID:"CrOe.fhmi.Kw1R",
            dateOfIssue:"25 de janeiro de 2025",
            status:"✅ Ativo",
            link:"https://verify.openedg.org/?id=CrOe.fhmi.Kw1R",
            downloadLink:"https://edube.org/certificates/verify/CrOe.fhmi.Kw1R/download",
            imageLink:"https://edube.org/uploads/media/default/0001/03/89f59f6ae325d6d592b41bf7a9cfa9fe03e4d748.png"
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="certifications" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Certificados (OFICIAIS)</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {certifications.map((certification: CertificationCardProps, index: number) => (
                        <Grid size={{md:6}} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <CertificationCard
                                    credential={certification.credential}
                                    examVersion={certification.examVersion}
                                    certificateID={certification.certificateID}
                                    dateOfIssue={certification.dateOfIssue}
                                    status={certification.status}
                                    link={certification.link}
                                    downloadLink={certification.downloadLink}
                                    imageLink={certification.imageLink}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default CertificationsSection
