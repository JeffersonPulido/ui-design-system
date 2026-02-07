"use client";
// Libraries //
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useThemeMode = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useThemeMode must be used inside MuiProvider");
    }
    return ctx;
};

export const MuiProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme") as ThemeMode | null;
        if (stored) {
            setMode(stored);
            document.documentElement.classList.toggle(
                "dark",
                stored === "dark",
            );
        }
    }, []);

    const toggleTheme = () => {
        const next = mode === "light" ? "dark" : "light";
        setMode(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
