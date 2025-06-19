import { Typography, styled } from "@mui/material";
import React, { JSX } from "react";

export interface ProjectCardReactThreeFiberProps {
    title: string;
    subtitle: string;
    Canvas: () => JSX.Element;
}

const ProjectCardReactThreeFiber: React.FC<ProjectCardReactThreeFiberProps> = ({
    title,
    subtitle,
    Canvas
}) => {

    const StyledCanvaCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        color: theme.palette.primary.contrastText,
        width: "30%",
        height: "100%",
        padding: "20px",
        [theme.breakpoints.down(1025)]: {
            width: "100%",
        },
        
    }))

    return (
        <StyledCanvaCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <Canvas></Canvas>
        </StyledCanvaCard>
    )
}

export default ProjectCardReactThreeFiber
