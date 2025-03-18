import Consola from "~/shared/molecules/consola";
import type { Route } from "./+types/home";
import Command from "~/shared/atoms/command";

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
	const data = [
		{
			title: "Cambiar de nombre Router/Switch",
			children: (
				<>
					<Command from="router&gt;" command="enable" />
					<Command
						from="router#"
						command="config terminal"
					/>
					<Command
						from="router(config)#"
						command="hostname NAME"
					/>
				</>
			),
			width: "w-[600px]",
		},
		{
			title: "Cambiar Password Router/Switch",
			children: (
				<>
					<Command from="Switch&gt;" command="enable" />
					<Command
						from="Switch#"
						command="config terminal"
					/>
					<Command
						from="Switch(config)#"
						command="enable password MI_CLAVE"
					/>
				</>
			),
			width: "w-[600px]",
		},
		{
			title: "Configurar contraseña de manera segura",
			children: (
				<>
					<Command
						from="Switch(config)#"
						command="enable secret MI_CLAVE_SEGURA"
					/>
				</>
			),
			width: "w-[600px]",
		},
		{
			title: "Cambiar Password remota Router/Switch",
			children: (
				<>
					<Command from="Router&gt;" command="enable" />
					<Command
						from="Switch#"
						command="config terminal"
					/>
					<Command
						from="Router(config)#"
						command="line vty 0 4"
					/>
					<Command
						from="Router(config-line)#"
						command="password MI_CONTRASEÑA_VTY"
					/>
					<Command
						from="Switch(config-line)#"
						command="login"
					/>
					<Command
						from="Router(config-line)#"
						command="exit"
					/>
				</>
			),
			width: "w-[600px]",
		},
		{ title: "Deshabilitar DNS", text: "", width: "w-[600px]" },
	];

	return data.flatMap((x) => (
		<Consola title={x.title} width={x.width}>
			{x.children}
		</Consola>
	));
};
