import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Brand } from "../../components/brand";

type BrandComponentProps = {
  variant: "primary" | "secondary";
};

const BrandComponent = ({ variant }: BrandComponentProps) => (
  <MemoryRouter>
    <Brand variant={variant} />
  </MemoryRouter>
);

describe("Brand Component", () => {
  it("should render the link with primary variant", () => {
    render(<BrandComponent variant="primary" />);
    const link = screen.getByRole("link", { name: /Thunder Task/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("text-cyan-400");
    expect(link).toHaveClass("bg-white");
  });

  it("should render the link with secondary variant", () => {
    render(<BrandComponent variant="secondary" />);
    const link = screen.getByRole("link", { name: /Thunder Task/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("text-white");
    expect(link).toHaveClass("bg-cyan-400");
  });
});
