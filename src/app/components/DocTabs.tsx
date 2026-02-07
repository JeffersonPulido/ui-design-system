"use client";
// Libraries //
import { useState } from "react";
// Interfaces //
import { ITab } from "../interfaces";
// Providers //
import { useThemeMode } from "../providers/MuiProvider";

interface Props {
    tabs: ITab[];
}

export function DocTabs({ tabs }: Props) {
    const [active, setActive] = useState(tabs[0].id);
    const { mode } = useThemeMode();

    const isDark = mode === "dark";

    return (
        <div className="space-y-6">
            <div className="flex gap-1 border-b overflow-x-auto">
                {tabs.map((tab) => {
                    const isActive = active === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className={`
                                px-4 py-2 text-sm font-medium whitespace-nowrap transition
                                border-b-2
                                cursor-pointer
                                ${
                                    isActive
                                        ? isDark
                                            ? "border-gray-100 text-gray-100"
                                            : "border-gray-900 text-gray-900"
                                        : isDark
                                          ? "border-transparent text-gray-400 hover:text-gray-100"
                                          : "border-transparent text-gray-500 hover:text-gray-900"
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <div>{tabs.find((tab) => tab.id === active)?.content}</div>
        </div>
    );
}
