import Command from "~/shared/atoms/command";

export default [
	{
		title: "modo privilegiado",
		children: (
			<>
				<Command from="&gt;" command="enable" />
				<Command from="#" command="" />
			</>
		),
	},
	{
		title: "modo de configuración",
		children: (
			<>
				<Command from="#" command="config terminal" />{" "}
				<Command from="(config)" command="" />
			</>
		),
	},
	{
		title: "Cambiar de nombre Router/Switch",
		children: <Command from="(config)#" command="hostname NAME" />,
	},
	{
		title: "Cambiar Password Router/Switch",
		children: (
			<Command
				from="(config)#"
				command="enable password MI_CLAVE"
			/>
		),
	},
	{
		title: "Configurar contraseña de manera segura",
		children: (
			<Command
				from="(config)#"
				command="enable secret MI_CLAVE_SEGURA"
			/>
		),
	},
	{
		title: "Cambiar Password remota Router/Switch",
		children: (
			<>
				<Command from="(config)#" command="line vty 0 4" />
				<Command
					from="(config-line)#"
					command="password MI_CONTRASEÑA_VTY"
				/>
				<Command from="(config-line)#" command="login" />
				<Command from="(config-line)#" command="exit" />
			</>
		),
	},
	{
		title: "Service Encriptar contraseñas Switch",
		children: (
			<Command
				from="(config)#"
				command="service password-encryption"
			/>
		),
	},
	{
		title: "Direccionamiento de puerta de enlace Switch",
		children: (
			<Command
				from="(config)#"
				command="ip default-gateway 192.168.1.1"
			/>
		),
	},
	{
		title: "Configurar Banner MOTD Switch n' Router",
		children: (
			<Command from="(config)#" command="banner motd #Texto#" />
		),
	},
	{
		title: "Configuración de direccionamiento de IPv4",
		children: (
			<>
				<Command
					from="(config)#"
					command="interface GigabitEthernet1/0"
				/>
				<Command
					from="(config-if)#"
					command="ip address ip submask"
				/>
                                <Command
					from="example"
					command="ip address 172.16.0.2 255.255.0.0"
				/>
			</>
		),
	},
];
