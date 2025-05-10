import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-lg mt-4">Page Not Found</p>
      <Link
          href="/"
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
        >
          Volver al inicio
        </Link>
    </div>
  );
}
