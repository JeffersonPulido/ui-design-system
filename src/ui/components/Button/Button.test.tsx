import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button component", () => {
    it("renders label correctly", () => {
        render(<Button label="Guardar" />);

        expect(
            screen.getByRole("button", { name: "Guardar" }),
        ).toBeInTheDocument();
    });
});
