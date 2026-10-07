import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <span className="section-label">404 · PAGE NOT FOUND</span>
      <h1>A different path forward.</h1>
      <p>
        Explore Ojasvi’s executive summary and company positioning on our
        homepage.
      </p>
      <Link className="button dark" href="/">
        Back to Ojasvi
      </Link>
    </div>
  );
}
