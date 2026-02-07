// Libraries //
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// Component //
import { Button } from "./Button";

describe("Button component", () => {
    it("renders label correctly", () => {
        render(<Button label="Guardar" />);

        expect(
            screen.getByRole("button", { name: "Guardar" }),
        ).toBeInTheDocument();
    });

    it("calls onClick when clicked", async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<Button label="Enviar" onClick={onClick} />);

        await user.click(screen.getByRole("button"));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when disabled prop is true", () => {
        render(<Button label="Guardar" disabled />);

        const button = screen.getByRole("button");

        expect(button).toBeDisabled();
    });

    it("is disabled and shows loading text when loading", () => {
        render(<Button label="Guardar" loading />);

        const button = screen.getByRole("button");

        expect(button).toBeDisabled();
        expect(button).toHaveTextContent("Cargando…");
        expect(button).toHaveAttribute("aria-busy", "true");
    });

    it("renders icon on the left by default", () => {
        render(<Button label="Editar" icon={<span data-testid="icon" />} />);

        const button = screen.getByRole("button");
        const icon = screen.getByTestId("icon");

        expect(button.firstChild).toBe(icon);
    });

    it("renders icon on the right when iconPosition is right", () => {
        render(
            <Button
                label="Editar"
                icon={<span data-testid="icon" />}
                iconPosition="right"
            />,
        );

        const button = screen.getByRole("button");
        const icon = screen.getByTestId("icon");

        expect(button.lastChild).toBe(icon);
    });

    it("applies hover styles on mouse enter", async () => {
        render(<Button label="Hover me" />);

        const button = screen.getByRole("button");

        await userEvent.hover(button);

        expect(button).toHaveStyle(
            `background-color: rgb(37, 99, 235)`,
        );
    });

    it("applies custom color when color prop is provided", () => {
        render(<Button label="Custom" color="#ff0000" />);

        const button = screen.getByRole("button");

        expect(button).toHaveStyle("background-color: #ff0000");
    });

    it("uses aria-label when provided", () => {
        render(<Button label="Guardar" ariaLabel="Guardar cambios" />);

        expect(
            screen.getByRole("button", { name: "Guardar cambios" }),
        ).toBeInTheDocument();
    });
});
