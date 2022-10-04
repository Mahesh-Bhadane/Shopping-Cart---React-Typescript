import { render, screen } from "@testing-library/react";
import React from "react";
import Admin from "./admin";
import user from "@testing-library/user-event";

describe("AdminForm", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<Admin />);
  });

  it("test for title", async () => {
    user.type(getTitle(), "Admin Form");
  });
});

function getTitle() {
  return screen.getByRole("textbox", { name: /title/i });
}
