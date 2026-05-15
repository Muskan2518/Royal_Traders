import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-tight text-center">
        <span className="chip">404</span>
        <h1 className="heading-1 mt-3">Page not found</h1>
        <p className="lead mt-3">The page you are looking for does not exist or has been moved.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/services" className="btn-outline">View Services</Link>
        </div>
      </div>
    </section>
  );
}
