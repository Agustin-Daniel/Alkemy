import { render, screen } from "react-dom";
import { Donate } from "./Donate";

it("renderizado h1 correctamente", () => {
  render(<Donate />);
  expect(
    screen.getByRole("heading", {
      name: "ColaborĂ¡ con el proyecto",
      level: 1,
    })
  ).toBeInTheDocument();
});

it("renderizado un a", () => {
  render(<Donate />);
  expect(screen.getByRole("link")).toHaveAttribute("href");
});