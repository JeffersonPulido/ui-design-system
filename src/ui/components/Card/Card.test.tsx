// Libraries //
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// Component //
import { Card } from "../Card";

describe("Card component", () => {
    const baseProps = {
        title: "Card title",
        description: "Card description",
    };

    it("renders title and description", () => {
        render(<Card {...baseProps} />);

        expect(screen.getByText("Card title")).toBeInTheDocument();

        expect(screen.getByText("Card description")).toBeInTheDocument();
    });

    it("renders children content", () => {
        render(
            <Card title={baseProps.title}>
                <span>Custom content</span>
            </Card>,
        );

        expect(screen.getByText("Custom content")).toBeInTheDocument();
    });

    it("renders image when image prop is provided", () => {
        render(
            <Card
                {...baseProps}
                image="https://test.com/image.png"
                imageAlt="Test image"
            />,
        );

        const image = screen.getByAltText("Test image");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "https://test.com/image.png");
    });

    it("uses title as alt text if imageAlt is not provided", () => {
        render(<Card {...baseProps} image="https://test.com/image.png" />);

        expect(screen.getByAltText("Card title")).toBeInTheDocument();
    });

    it("applies custom accent color styles", () => {
        const { container } = render(
            <Card {...baseProps} accentColor="#ff0000" />,
        );

        const card = container.querySelector("article") as HTMLElement;

        expect(card).toHaveStyle({
            borderLeft: "4px solid #ff0000",
            borderColor: "#ff0000",
        });
    });

    it("applies custom background and text colors", () => {
        const { container } = render(
            <Card {...baseProps} backgroundColor="#000" textColor="#fff" />,
        );

        const card = container.querySelector("article") as HTMLElement;

        expect(card).toHaveStyle({
            backgroundColor: "#000",
            color: "#fff",
        });
    });

    it("renders actions buttons (max 2)", () => {
        const onClick1 = jest.fn();
        const onClick2 = jest.fn();
        const onClick3 = jest.fn();

        render(
            <Card
                {...baseProps}
                actions={[
                    { label: "Action 1", onClick: onClick1 },
                    { label: "Action 2", onClick: onClick2 },
                    { label: "Action 3", onClick: onClick3 },
                ]}
            />,
        );

        expect(
            screen.getByRole("button", { name: "Action 1" }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: "Action 2" }),
        ).toBeInTheDocument();

        expect(
            screen.queryByRole("button", { name: "Action 3" }),
        ).not.toBeInTheDocument();
    });

    it("calls action onClick when button is clicked", () => {
        const onClick = jest.fn();

        render(
            <Card {...baseProps} actions={[{ label: "Action", onClick }]} />,
        );

        fireEvent.click(screen.getByRole("button", { name: "Action" }));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("applies hover styles on mouse enter", () => {
        const { container } = render(<Card {...baseProps} />);

        const card = container.querySelector("article") as HTMLElement;

        fireEvent.mouseEnter(card);
        fireEvent.mouseLeave(card);

        expect(card).toBeInTheDocument();
    });
});
