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
	return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

console.log(
	"Pacientes asignados a Pediatría",
	obtenPacientesAsignadosAPediatria(pacientes)
);

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
	pacientes: Pacientes[]
): Pacientes[] => {
	return pacientes.filter(
		(paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
	);
};

console.log(
	"Pacientes asignados a Pediatría menores de 10 años",
	obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
	return pacientes.some(
		(paciente) =>
			paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
	);
};

console.log(
	"¿Está activo el protocolo de urgencia?",
	activarProtocoloUrgencia(pacientes)
);

const reasignaPacientesAMedicoFamilia = (
	pacientes: Pacientes[]
): Pacientes[] => {
	return pacientes.map((paciente) => {
		if (paciente.especialidad === "Pediatra") {
			return { ...paciente, especialidad: "Medico de familia" };
		} else {
			return paciente;
		}
	});
};

console.log(
	"Reasignación de pacientes de Pediatría a Medicina",
	reasignaPacientesAMedicoFamilia(pacientes)
);

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
	return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
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
	return pacientes.reduce(
		(resultado, paciente) => {
			if (paciente.especialidad === "Pediatra") {
				resultado.pediatria += 1;
			} else if (paciente.especialidad === "Medico de familia") {
				resultado.medicoDeFamilia += 1;
			} else if (paciente.especialidad === "Cardiólogo") {
				resultado.cardiologia += 1;
			}
			return resultado;
		},
		{
			medicoDeFamilia: 0,
			pediatria: 0,
			cardiologia: 0,
		}
	);
};

console.log(
	"Número de consultas por especialidad (tienen que sumar 6):",
	cuentaPacientesPorEspecialidad(pacientes)
);
