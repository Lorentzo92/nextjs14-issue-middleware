import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center gap-3">
			<Link href="/admin" className="p-4">
				/admin
			</Link>
			<Link href="/user" className="p-4">
				/user
			</Link>
		</main>
	);
}
