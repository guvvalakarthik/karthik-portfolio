import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(cleanup);

describe("portfolio", () => {
  it("presents the target role and all five project case studies", () => {
    render(<App />);

    expect(screen.getAllByText(/Full-Stack AI Engineer/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("img", { name: /Guvvala Karthik, Full-Stack AI Engineer/i }),
    ).toHaveAttribute("src", "/guvvala-karthik.png");
    for (const project of [
      "CareerPilot AI",
      "TrackForge",
      "TomatoGuard",
      "SourceLens",
      "Vidhya Vedha",
    ]) {
      expect(screen.getByRole("heading", { name: project })).toBeInTheDocument();
    }

    expect(screen.getAllByText("Created Jul 2026")).toHaveLength(2);
    expect(screen.getByText("Created Dec 2025")).toBeInTheDocument();
    expect(screen.getByText("Created Feb 2026")).toBeInTheDocument();
    expect(screen.getByText("Created Oct 2025")).toBeInTheDocument();
    expect(screen.getByText("Narayana Junior College | 2020-2022")).toBeInTheDocument();
  });

  it("includes both internships and direct contact paths", () => {
    render(<App />);

    expect(screen.getAllByText("Wexa AI").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Xelron AI").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", { name: /guvvalakarthik2004@gmail.com/i }),
    ).toHaveAttribute("href", "mailto:guvvalakarthik2004@gmail.com");
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      "/Guvvala_Karthik_Resume.pdf",
    );
  });

  it("shows technology choices that match the project manifests", () => {
    render(<App />);

    expect(screen.getAllByText("PostgreSQL + pgvector").length).toBeGreaterThan(0);
    expect(screen.getByText("SQLAlchemy + Alembic")).toBeInTheDocument();
    expect(screen.getAllByText("ONNX Runtime").length).toBeGreaterThan(0);
    expect(screen.getByText("Sentence Transformers")).toBeInTheDocument();
    expect(screen.getAllByText("MongoDB + Mongoose").length).toBeGreaterThan(0);
  });
});
