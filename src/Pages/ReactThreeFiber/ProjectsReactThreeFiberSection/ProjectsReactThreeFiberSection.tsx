import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ProjectCardReactThreeFiber from "../../../components/ProjectCardReactThreeFiber/ProjectCardReactThreeFiber";
import SimpleBoxRotation from "../projects/SimpleBoxRotation/SimpleBoxRotation";


const ProjectsReactThreeFiberSection = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,

  }));
  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="react-three-fiber-projects" pt={5} pb={3}>
          <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos em React Three Fiber</Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          <ProjectCardReactThreeFiber title="Cubo rotacionando" subtitle="Rotaciona em x, y e z" Canvas={SimpleBoxRotation} />
        </Grid>

      </ Container>
    </ StyledExperience>

  );
};

export default ProjectsReactThreeFiberSection;