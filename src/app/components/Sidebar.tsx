"use client";
// Libraries //
import {
    List,
    ListItemButton,
    ListItemText,
    Typography,
    Box,
    Divider,
} from "@mui/material";
// Interfaces //
import { IComponent } from "../interfaces";

interface Props {
    components: IComponent[];
    activeId?: string | null;
}

export const Sidebar = ({ components, activeId }: Props) => {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box className="px-4 py-6">
            <Typography
                variant="overline"
                sx={{ fontWeight: 600, mb: 2, display: "block" }}
            >
                Componentes
            </Typography>

            <Divider sx={{ my: 2 }}/>

            <List disablePadding>
                {components.map((component) => {
                    const isActive = component.id === activeId;

                    return (
                        <ListItemButton
                            key={component.id}
                            onClick={() => handleScroll(component.id)}
                            selected={isActive}
                            sx={{
                                borderRadius: 1,
                                mb: 0.5,
                                transition: "all .2s",
                                bgcolor: isActive
                                    ? "action.selected"
                                    : "transparent",
                            }}
                        >
                            <ListItemText
                                primary={component.name}
                                primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: isActive ? 600 : 500,
                                }}
                            />
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    );
};
