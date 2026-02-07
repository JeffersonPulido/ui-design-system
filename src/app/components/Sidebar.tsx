"use client";
// Libraries //
import {
    List,
    ListItemButton,
    ListItemText,
    Typography,
    Box,
} from "@mui/material";
// Interfaces //
import { IComponent } from "../interfaces";

interface Props {
    components: IComponent[];
}

export const Sidebar = ({ components }: Props) => {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box className="h-full px-4 py-6">
            <Typography
                variant="overline"
                sx={{ fontWeight: 600, mb: 2, display: "block" }}
            >
                Componentes
            </Typography>

            <List disablePadding>
                {components.map((component) => (
                    <ListItemButton
                        key={component.id}
                        onClick={() => handleScroll(component.id)}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                        }}
                    >
                        <ListItemText
                            primary={component.name}
                            primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 500,
                            }}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
};
