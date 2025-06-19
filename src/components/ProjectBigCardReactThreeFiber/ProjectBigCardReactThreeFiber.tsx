import { Typography, styled } from "@mui/material";
import React, { JSX } from "react";

export interface ProjectCardReactThreeFiberProps {
    title: string;
    subtitle: string;
    Canvas: () => JSX.Element;
};

const ProjectBigCardReactThreeFiber: React.FC<ProjectCardReactThreeFiberProps> = ({
    title,
    subtitle,
    Canvas
}) => {

    const StyledCanvaCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        width: "100%",
        height: "100%",
        padding: "20px",
    }));

    return (
        <StyledCanvaCard>
            <div style={
                {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                }
            }>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography >
                    {subtitle}
                </Typography>
                <Typography >
                    Foi usado como base esse modelo de pedal:
                </Typography>
                <img style={{
                    width: "25%",
                }} src="https://carrefourbr.vtexassets.com/arquivos/ids/159899188/d5c1a27191214e95bf2b57553905f30e.jpg" alt="pedal-photo" />
                <Typography >
                    APERTE O BOTÃO PARA LIGAR:
                </Typography>
            </div>
            <Canvas/>
        </StyledCanvaCard>
    );
};

export default ProjectBigCardReactThreeFiber;
