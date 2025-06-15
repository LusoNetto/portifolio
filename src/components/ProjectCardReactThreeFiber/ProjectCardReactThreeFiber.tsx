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

    const StyledCanvaCard = styled("div")(({ theme }) => ({
        objectFit: "contain",
        padding: "10px",
    }))

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledCanvaCard><Canvas /></StyledCanvaCard>
        </StyledCard>
    )
}

export default ProjectCardReactThreeFiber
