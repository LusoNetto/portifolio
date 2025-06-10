import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Git", "HTML", "CSS", "Cypress", "AWS", "Material UI", "Figma", "Java", "Express", "SQL", "PHP"
    ];

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">1+ anos</Typography>
                                <Typography textAlign="center">Desenvolvedor Frontend e Backend</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Graduação</Typography>
                                <Typography textAlign="center">UMC</Typography>
                                <Typography textAlign="center">Análise e Desenvolvimento de Sistemas</Typography>
                                <Typography textAlign="center">Concluida 06/2024</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Graduação</Typography>
                                <Typography textAlign="center">Fatec Mogi das Cruzes</Typography>
                                <Typography textAlign="center">Análise e Desenvolvimento de Sistemas</Typography>
                                <Typography textAlign="center">Cursando</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Como desenvolvedor fullstack, atuo na criação e manutenção de sistemas em diferentes tecnologias, focando nas boas práticas de desenvolvimento e nos fundamentos de engenharia de software.
<br/>• Desenvolvimento e manutenção <strong>full-stack</strong> de aplicações com stacks <strong>TypeScript/Node</strong> <strong>(Express), PHP/Laravel e Java/Spring</strong>
<br/>• Prática na criação de aplicações utilizando padrões <strong>REST</strong> e <strong>MVC</strong>
<br/>• Utilização de padrões arquiteturais e design patterns
<br/>• Conhecimento em banco de dados <strong>SQL</strong> <strong>(PostgreSQL, MySQL)</strong> e <strong>NoSQL (Redis, DynamoDB, MongoDB)</strong>
<br/>• Pipelines <strong>CI/CD</strong> com <strong>GitHub Actions</strong> para reduzir tempo de entrega
<br/>• Uso de <strong>Docker</strong> para containerização de aplicações, garantindo portabilidade e escalabilidade.
<br/>• Escrita de testes automatizados (unitários, integração) para <strong>back-end</strong> e <strong>front-end</strong>, utilizando <strong>Vitest</strong>, e testes <strong>E2E</strong> com <strong>Cypress</strong> e <strong>Selenium</strong>
<br/>• Participação ativa em decisões arquiteturais, garantindo um software escalável, modular e de fácil manutenção
<br/>• <strong>Code reviews</strong> e boas práticas de desenvolvimento, garantindo qualidade de código e aderência a padrões como <strong>SOLID</strong> e <strong>Clean Code</strong>
<br/>• Experiência em <strong>metodologias ágeis</strong> com <strong>Scrum</strong> e <strong>Kanban</strong>
<br/>• Conhecimento em fundamentos de gerenciamento de filas com <strong>BullMQ</strong>
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Habilidades</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
