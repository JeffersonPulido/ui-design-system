"use client";

// Libraries //
import { IconButton, Tooltip } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
// Provider //
import { useThemeMode } from "../providers/MuiProvider";

export const ThemeToggle = () => {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <Tooltip title={mode === "light" ? "Modo oscuro" : "Modo claro"}>
            <IconButton size="small" onClick={toggleTheme}>
                {mode === "light" ? (
                    <DarkModeIcon fontSize="small" />
                ) : (
                    <LightModeIcon fontSize="small" />
                )}
            </IconButton>
        </Tooltip>
    );
};
