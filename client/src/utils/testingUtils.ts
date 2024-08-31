import { screen } from "@testing-library/react";

export const expectText = (match: RegExp | string) => {
  expect(screen.getByText(match)).toBeInTheDocument();
};

export const expectTitle = (match: RegExp | string) => {
  expect(screen.getByTitle(match)).toBeInTheDocument();
};
