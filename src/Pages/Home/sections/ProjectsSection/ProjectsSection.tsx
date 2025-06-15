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
            srcImg: "https://blog.wpsec.com/wp-content/uploads/2019/04/WordPress-PHP.png",
            description: "Nos último meses estive trabalhando nesse ecommerce em PHP (Wordpress - Woocommerce)",
            technologies: "Tecnologias: JavaScript, HTML, CSS, PHP, Wordpress, Woocommerce",
            websiteURL: "https://lusoeletronicos.com.br",
            codeURL: "https://lusoeletronicos.com.br",
        },
        {
            title: "Chatbot usando IA",
            subtitle: "Maio 2025 - Junho 2025",
            srcImg: "https://www.agenciaeplus.com.br/wp-content/uploads/2021/07/ferramentas-de-chatbot.jpg",
            description: "Projeto de integração entre Flowise (IA/NLP), n8n (automação) e React.js (frontend) para criar um chatbot inteligente e escalável: ✅ Chatbot inteligente com respostas baseadas em IA (Flowise). ✅ Integração de APIs via n8n. ✅ Frontend customizável em React.js.",
            technologies: "Tecnologias: Flowise, n8n, React.js, TypeScript",
            websiteURL: "https://www.linkedin.com/feed/update/urn:li:activity:7315489174197813248/",
            codeURL: "https://github.com/LusoNetto/chatbot-with-flowise-and-n8n",
        },
        {
            title: "Blog com Microsserviços em React.js e Node.js",
            subtitle: "Março 2025 - Abril 2025",
            srcImg: "https://miro.medium.com/v2/resize:fit:1000/1*MuQ0a7znNLiFMZZa0Qg99Q.jpeg",
            description: "Este projeto é uma aplicação de blog que utiliza uma arquitetura de microsserviços para gerenciar posts e comentários. O sistema é composto por serviços independentes para posts e comentários, além de um frontend em React para interação com o usuário.",
            technologies: "Tecnologias: React.js e Node.js",
            websiteURL: "https://www.linkedin.com/feed/update/urn:li:activity:7303531107768008704/",
            codeURL: "https://github.com/LusoNetto/blog-microservices-with-react-and-nodejs",
        },
        {
            title: "Sistema de gestão de livros usando MongoDB, Express.js, React.js, Node.js",
            subtitle: "Maio 2025 - Junho 2025",
            srcImg: "https://media.licdn.com/dms/image/v2/D4D12AQGp_UCp3W82YA/article-cover_image-shrink_720_1280/B4DZXxf.sMHsAI-/0/1743513448088?e=2147483647&v=beta&t=nsToxH_KNK36f6j_xfNqeqM67oQL05VmQHQKZT7ozwQ",
            description: "Este projeto é uma aplicação que utiliza a mern stack (MongoDB, Express.js, React.js, Node.js) para gerenciar livros (Adicionar, Visualizar, Atualizar, Deletar).",
            technologies: "Tecnologias: MongoDB, Express.js, React.js, Node.js",
            websiteURL: "https://www.linkedin.com/feed/update/urn:li:activity:7305995919240359937/",
            codeURL: "https://github.com/LusoNetto/nodejs-expressjs-reactjs-mongodb-typescript-book-store",
        },
        {
            title: "API de usúarios em GraphQL",
            subtitle: "Fevereiro 2025 - Março 2025",
            srcImg: "https://miro.medium.com/v2/resize:fit:826/1*CxzEKSbjvSsp5Z6utvD6Iw.png",
            description: "Uma API de usuários usando GraphQL e typescript, onde é possivel: criar, visualizar, atualizar e deletar usuários",
            technologies: "Tecnologias: TypeScript e GraphQL",
            websiteURL: "https://www.linkedin.com/feed/update/urn:li:activity:7304685576379637760/",
            codeURL: "https://github.com/LusoNetto/users-api-graphql",
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
                        <Grid key={index} size={{md: 6}}>
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
