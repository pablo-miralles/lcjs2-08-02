import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
	id: number;
	nombre: string;
	apellidos: string;
	sexo: string;
	temperatura: number;
	frecuenciaCardiaca: number;
	especialidad: Especialidad;
	edad: number;
}

const pacientes: Pacientes[] = [
	{
		id: 1,
		nombre: "John",
		apellidos: "Doe",
		sexo: "Male",
		temperatura: 36.8,
		frecuenciaCardiaca: 80,
		especialidad: "Medico de familia",
		edad: 44,
	},
	{
		id: 2,
		nombre: "Jane",
		apellidos: "Doe",
		sexo: "Female",
		temperatura: 36.8,
		frecuenciaCardiaca: 70,
		especialidad: "Medico de familia",
		edad: 43,
	},
	{
		id: 3,
		nombre: "Junior",
		apellidos: "Doe",
		sexo: "Male",
		temperatura: 36.8,
		frecuenciaCardiaca: 90,
		especialidad: "Pediatra",
		edad: 8,
	},
	{
		id: 4,
		nombre: "Mary",
		apellidos: "Wien",
		sexo: "Female",
		temperatura: 36.8,
		frecuenciaCardiaca: 120,
		especialidad: "Medico de familia",
		edad: 20,
	},
	{
		id: 5,
		nombre: "Scarlett",
		apellidos: "Somez",
		sexo: "Female",
		temperatura: 36.8,
		frecuenciaCardiaca: 110,
		especialidad: "Cardiólogo",
		edad: 30,
	},
	{
		id: 6,
		nombre: "Brian",
		apellidos: "Kid",
		sexo: "Male",
		temperatura: 39.8,
		frecuenciaCardiaca: 80,
		especialidad: "Pediatra",
		edad: 11,
	},
];

console.log("Pacientes array original", pacientes);

const obtenPacientesAsignadosAPediatria = (
	pacientes: Pacientes[]
): Pacientes[] => {
	let resultado: Pacientes[] = [];
	for (let i = 0; i < pacientes.length; i++) {
		if (pacientes[i].especialidad === "Pediatra") {
			resultado = [...resultado, pacientes[i]];
		}
	}

	return resultado;
};

console.log(
	"Pacientes asignados a Pediatría",
	obtenPacientesAsignadosAPediatria(pacientes)
);

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
	pacientes: Pacientes[]
): Pacientes[] => {
	let resultado: Pacientes[] = [];
	for (let i = 0; i < pacientes.length; i++) {
		if (
			pacientes[i].especialidad === "Pediatra" &&
			pacientes[i].edad < 10
		) {
			resultado = [...resultado, pacientes[i]];
		}
	}

	return resultado;
};

console.log(
	"Pacientes asignados a Pediatría menores de 10 años",
	obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
	let activarProctolo = false;

	for (let i = 0; i < pacientes.length; i++) {
		if (
			pacientes[i].frecuenciaCardiaca > 100 &&
			pacientes[i].temperatura > 39
		) {
			activarProctolo = true;
			break;
		}
	}

	return activarProctolo;
};

console.log(
	"¿Está activo el protocolo de urgencia?",
	activarProtocoloUrgencia(pacientes)
);

const reasignaPacientesAMedicoFamilia = (
	pacientes: Pacientes[]
): Pacientes[] => {
	let nuevaListaDePacientes: Pacientes[] = [];
	for (let i = 0; i < pacientes.length; i++) {
		if (pacientes[i].especialidad === "Pediatra") {
			nuevaListaDePacientes = [
				...nuevaListaDePacientes,
				{
					...pacientes[i],
					especialidad: "Medico de familia",
				},
			];
		} else {
			nuevaListaDePacientes = [...nuevaListaDePacientes, pacientes[i]];
		}
	}

	return nuevaListaDePacientes;
};

console.log(
	"Reasignación de pacientes de Pediatría a Medicina",
	reasignaPacientesAMedicoFamilia(pacientes)
);

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
	let hayPacientes = false;

	let i = 0;
	while (i < pacientes.length) {
		if (pacientes[i].especialidad === "Pediatra") {
			hayPacientes = true;
		}
		i++;
	}

	return hayPacientes;
};

console.log("¿Hay pacientes de Pediatría?", hayPacientesDePediatria(pacientes));

interface NumeroPacientesPorEspecialidad {
	medicoDeFamilia: number;
	pediatria: number;
	cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
	pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
	const resultado: NumeroPacientesPorEspecialidad = {
		medicoDeFamilia: 0,
		pediatria: 0,
		cardiologia: 0,
	};

	for (let i = 0; i < pacientes.length; i++) {
		switch (pacientes[i].especialidad) {
			case "Pediatra":
				resultado.pediatria += 1;
				break;
			case "Medico de familia":
				resultado.medicoDeFamilia += 1;
				break;
			case "Cardiólogo":
				resultado.cardiologia += 1;
				break;
		}
	}

	return resultado;
};

console.log(
	"Número de consultas por especialidad (tienen que sumar 6):",
	cuentaPacientesPorEspecialidad(pacientes)
);
