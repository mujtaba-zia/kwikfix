import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-page px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-slate-900 md:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-600">
        That page does not exist or may have moved. Head back to Kwikfix Services to book cleaning in Calgary.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-btn-primary transition hover:bg-brand-blue-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
