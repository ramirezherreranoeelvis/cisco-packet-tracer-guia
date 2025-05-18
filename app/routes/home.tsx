import Consola from "~/shared/molecules/consola";
import type { Route } from "./+types/home";
import data from "./data";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className="h-[100vh] flex justify-center items-center">
			<div
				className="flex justify-center items-center flex-wrap gap-y-4 gap-x-8 
					   max-w-[95%] max-h-[70%] overflow-auto"
			>
				<Consolas />
			</div>
		</div>
	);
}
const Consolas = () => {
	return data.flatMap((x) => (
		<Consola title={x.title} width={"w-[570px]"}>
			{x.children}
		</Consola>
	));
};
