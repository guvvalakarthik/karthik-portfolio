import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(cleanup);

describe("portfolio", () => {
  it("presents the target role and all five project case studies", () => {
    render(<App />);

    expect(screen.getAllByText(/Full-Stack AI Engineer/i).length).toBeGreaterThan(0);
    for (const project of [
      "CareerPilot AI",
      "TrackForge",
      "TomatoGuard",
      "SourceLens",
      "Vidhya Vedha",
    ]) {
      expect(screen.getByRole("heading", { name: project })).toBeInTheDocument();
    }
  });

  it("includes both internships and direct contact paths", () => {
    render(<App />);

    expect(screen.getAllByText("Wexa AI").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Xelron AI").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", { name: /guvvalakarthik2004@gmail.com/i }),
    ).toHaveAttribute("href", "mailto:guvvalakarthik2004@gmail.com");
    expect(screen.getByRole("link", { name: /r?sum?/i })).toHaveAttribute(
      "href",
      "/Guvvala_Karthik_Resume.pdf",
    );
  });
});
