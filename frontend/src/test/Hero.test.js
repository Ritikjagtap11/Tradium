import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero component", () => {
  test("renders hero image", () => {
    render(<Hero />);

    const heroImg = screen.getByAltText("Hero img");

    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute(
      "src",
      "media/images/homeHero.png"
    );
  });
});