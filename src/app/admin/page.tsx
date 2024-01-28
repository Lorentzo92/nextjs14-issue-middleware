"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Page() {
	const { data } = useQuery<{ user: string }>({
		queryKey: ["user_info", "admin"],
	});

	return (
		<main className="flex min-h-screen items-center justify-center gap-3">
			<h1>{data?.user}</h1>
			<Link href="/" className="p-4">
				/go back
			</Link>
		</main>
	);
}
