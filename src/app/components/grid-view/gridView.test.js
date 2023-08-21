import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridView from "./gridView";

const mockData = [
  {
    name: "test1",
    [`poster-image`]: "img1",
  },
  {
    name: "test2",
    [`poster-image`]: "img2",
  },
  {
    name: "test3",
    [`poster-image`]: "img3",
  },
  {
    name: "test4",
    [`poster-image`]: "img4",
  },
];

describe("Component: Grid View", () => {
  render(<GridView data={mockData} />);
  const container = screen.getByTestId("grid-id");

  test("GridView-default", () => {
    expect(container).toBeInTheDocument();
  });
});
