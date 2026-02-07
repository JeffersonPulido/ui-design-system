import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
    it("render default component input type text", () => {
        render(
            <Input
                id="name"
                label="name"
                value=""
                onChange={jest.fn()}
                variant="input"
                type="text"
            />,
        );

        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });

    it("render label and required", () => {
        render(
            <Input
                id="email"
                label="Email"
                required
                value=""
                onChange={jest.fn()}
                variant="input"
                type="text"
            />,
        );

        expect(screen.getByText("Email *")).toBeInTheDocument();
    });

    it("exec onChange and change value", () => {
        const onChange = jest.fn();

        render(
            <Input
                id="username"
                label="username"
                value=""
                onChange={onChange}
                variant="input"
                type="text"
            />,
        );

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "Jeff" } });

        expect(onChange).toHaveBeenCalledWith("Jeff");
    });

    it("Dont exec onChange if value is the same", () => {
        const onChange = jest.fn();

        render(
            <Input
                id="username"
                label="username"
                value="Jeff"
                onChange={onChange}
                variant="input"
                type="text"
            />,
        );

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "Jeff" } });

        expect(onChange).not.toHaveBeenCalled();
    });

    it("Dont allow change when is disabled", () => {
        const onChange = jest.fn();

        render(
            <Input
                id="username"
                label="username"
                value=""
                disabled
                onChange={onChange}
                variant="input"
                type="text"
            />,
        );

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "Test" } });

        expect(onChange).not.toHaveBeenCalled();
        expect(input).toBeDisabled();
    });

    it("Render textarea", () => {
        render(
            <Input
                id="desc"
                label="description"
                value=""
                onChange={jest.fn()}
                variant="textarea"
            />,
        );

        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("Render select with options", () => {
        render(
            <Input
                label="role"
                id="role"
                value=""
                onChange={jest.fn()}
                variant="select"
                options={[
                    { label: "Admin", value: "admin" },
                    { label: "User", value: "user" },
                ]}
            />,
        );

        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(screen.getByText("Admin")).toBeInTheDocument();
    });

    it("Show helperText when have errors", () => {
        render(
            <Input
                label="name"
                id="name"
                value=""
                onChange={jest.fn()}
                helperText="Campo obligatorio"
                variant="input"
                type="text"
            />,
        );

        expect(screen.getByText("Campo obligatorio")).toBeInTheDocument();
    });

    it("Show error and hide helperText", () => {
        render(
            <Input
                id="name"
                label="name"
                value=""
                onChange={jest.fn()}
                helperText="Helper"
                error="Error obligatorio"
                variant="input"
                type="text"
            />,
        );

        expect(screen.getByText("Error obligatorio")).toBeInTheDocument();
        expect(screen.queryByText("Helper")).not.toBeInTheDocument();
    });

    it("Render input with focus and blur", () => {
        render(
            <Input
                id="focus"
                label="focus"
                value=""
                onChange={jest.fn()}
                variant="input"
                type="text"
            />,
        );

        const input = screen.getByRole("textbox");

        fireEvent.focus(input);
        fireEvent.blur(input);

        expect(input).toBeInTheDocument();
    });

    it("handles focus and blur on textarea", () => {
        render(
            <Input
                id="description"
                label="Description"
                value=""
                onChange={jest.fn()}
                variant="textarea"
            />,
        );

        const textarea = screen.getByRole("textbox");

        fireEvent.focus(textarea);
        fireEvent.blur(textarea);

        expect(textarea).toBeInTheDocument();
    });

    it("handles focus and blur on select", () => {
        render(
            <Input
                id="role"
                label="Role"
                value=""
                onChange={jest.fn()}
                variant="select"
                options={[
                    { label: "Admin", value: "admin" },
                    { label: "User", value: "user" },
                ]}
            />,
        );

        const select = screen.getByRole("combobox");

        fireEvent.focus(select);
        fireEvent.blur(select);

        expect(select).toBeInTheDocument();
    });

    it("Render input type number with min=0", () => {
        render(
            <Input
                label="age"
                id="age"
                value="1"
                onChange={jest.fn()}
                variant="input"
                type="number"
            />,
        );

        const input = screen.getByRole("spinbutton");
        expect(input).toHaveAttribute("min", "0");
    });
});
