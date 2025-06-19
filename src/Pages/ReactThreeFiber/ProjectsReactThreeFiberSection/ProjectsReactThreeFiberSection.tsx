import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ProjectCardReactThreeFiber from "../../../components/ProjectCardReactThreeFiber/ProjectCardReactThreeFiber";
import SimpleSphere from "../projects/SimpleSphere/SimpleSphere";
import SimpleTorus from "../projects/SimpleTorus/SimpleTorus";
import SimpleTorusKnot from "../projects/SimpleTorusKnot/SimpleTorusKnot";
import SimpleCube from "../projects/SimpleCube/SimpleCube";
import PedalReverbMVAVE from "../projects/PedalReverbMVAVE/PedalReverbMVAVE";
import ProjectBigCardReactThreeFiber from "../../../components/ProjectBigCardReactThreeFiber/ProjectBigCardReactThreeFiber";


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
          <ProjectCardReactThreeFiber title="Cubo" subtitle="Click para mudar de cor (Rotaciona e se movimenta)" Canvas={SimpleCube} />
          <ProjectCardReactThreeFiber title="Esfera" subtitle="Click para mudar de cor (Rotaciona e se movimenta)" Canvas={SimpleSphere} />
          <ProjectCardReactThreeFiber title="Torus" subtitle="Click para mudar de cor (Rotaciona e se movimenta sozinha)" Canvas={SimpleTorus} />
          <ProjectCardReactThreeFiber title="Torus Knot" subtitle="Click para mudar de cor (Rotaciona e se movimenta sozinha)" Canvas={SimpleTorusKnot} />
          <ProjectBigCardReactThreeFiber title="Pedal de Reverb M-VAVE" subtitle="(Liga e desliga luz, Rotaciona e se movimenta)" Canvas={PedalReverbMVAVE} />
        </Grid>
      </ Container>
    </ StyledExperience>

  );
};

export default ProjectsReactThreeFiberSection;