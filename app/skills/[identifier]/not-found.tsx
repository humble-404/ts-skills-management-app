import Link from "next/link";

export default function NotFound() {
    return (
        <section className=" p-4 max-w-md mx-auto mt-5 text-center border border-primary ">
            <h1>404 - Page not found</h1>
            <Link href="/" className="btn btn-outline mt-4"> Back to home </Link>
        </section>
    );
}  