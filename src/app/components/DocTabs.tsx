"use client";
// Libraries //
import { useState } from "react";
// Interfaces //
import { ITab } from "../interfaces";

interface Props {
    tabs: ITab[];
}

export function DocTabs({ tabs }: Props) {
    const [active, setActive] = useState(tabs[0].id);

    return (
        <div className="space-y-6">
            <div className="flex gap-2 border-b border-[rgb(var(--border))] overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={`
                            px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition cursor-pointer
                            ${
                                active === tab.id
                                    ? "border-blue-500 text-blue-500"
                                    : "border-transparent text-[rgb(var(--muted))] hover:text-blue-500 hover:bg-blue-950"
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div>{tabs.find((tab) => tab.id === active)?.content}</div>
        </div>
    );
}
