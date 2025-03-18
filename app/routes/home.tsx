import Consola from "~/shared/molecules/consola";
import type { Route } from "./+types/home";
import Command from "~/shared/atoms/command";
import data from "./data";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<>
			<Consolas />
		</>
	);
}
const Consolas = () => {
	return data.flatMap((x) => (
		<Consola title={x.title} width={"w-[600px]"}>
			{x.children}
		</Consola>
	));
};
