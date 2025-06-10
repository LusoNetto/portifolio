import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Ecommerce PHP",
            subtitle: "Janeiro 2025 - Fevereiro 2025",
            srcImg: "/assets/ecommerce-php.png",
            description: "Nos último meses estive trabalhando nesse ecommerce em PHP (Wordpress - Woocommerce)",
            technologies: "Technologies: JavaScript, HTML, CSS, PHP",
            websiteURL: "https://lusoeletronicos.com.br",
            codeURL: "https://github.com/",
        },
        {
            title: "Labirinto",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/assets/project1-craze-maze.gif",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Project Blotting",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/assets/project2-blotting.png",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
