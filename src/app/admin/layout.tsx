import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const queryClient = new QueryClient();

	// pretetch some stuff
	await queryClient.prefetchQuery({
		queryFn: async () => ({
			user: "admin",
		}),
		queryKey: ["user_info", "admin"],
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
}
