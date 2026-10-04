import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the Little Lemon home page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /Little Lemon/i,
      level: 1,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", {
      name: /Reserve a Table/i,
    })
  ).toBeInTheDocument();
});

test("renders the booking page", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /Reserve a Table/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText(/Choose date/i)
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText(/Number of guests/i)
  ).toBeInTheDocument();
});