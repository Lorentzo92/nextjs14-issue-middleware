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
			user: "user",
		}),
		queryKey: ["user_info", "user"],
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
}
