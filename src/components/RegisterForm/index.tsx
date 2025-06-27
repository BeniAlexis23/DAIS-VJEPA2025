"use client";

import { useState } from "react";
import Link from "next/link";

const docentes: string[] = [
    "Seleccione Docente",
    "ALMIDON ORTIZ CARLOS ALCIDES",
    "ANGOMA ASTUCURI MIRIAM",
    "ARANGÜENA YLLANES MAGALY ROXANA",
    "ASTO HUAMÁN LEONIDAS",
    "CARDENAS LINO CESAR ANDY",
    "COLQUEPISCO PAUCAR NILO TEODORICO",
    "DAGA CHACA MARISOL",
    "DURAN CARHUAMACA AMANDA",
    "FERREYROS YUCRA JAIR EMERSON",
    "HERNANDEZ PEVES JUAN GUSTAVO",
    "HUANCAHUIRE BRACO CLAUDIO ISAIAS",
    "HUARANCCA CONTRERAS PATRICIA PAULINA",
    "LARICO UCHAMACO GUIDO RAÚL",
    "OCHOA CARBAJAL HERNAN",
    "OSEDA GAGO DULIO",
    "PACHECO PUMALEQUE ALEX ABELARDO",
    "POMA BAUTISTA INGRID ROCIO",
    "RAMIREZ PACHECO LUIS ENRIQUE",
    "REYNOSO PALPA JENNY ROCIO",
    "ROQUE TITO EDWIN",
    "SALCEDO RODAS PERCY ISMAEL",
    "SANCHEZ CASTILLO EDDYE ARTURO",
    "VICENTE RAMOS WAGNER ENOC",
    "VILCA PIZARRO JOEL LINDER",
    "ZAMUDIO ESPINOSA ZULMA GISELLA",
];

const integrantes = [
    "Seleccione Número Integrantes",
    "1",
    "2",
    "3",
    "4",
];


const disciplinas: { [key: string]: string[] } = {
    "Matemáticas Aplicadas": ["Matemática Básica I", "Matemática Superior", "Estadística Inferencial"],
    "Estadística y Probabilidades": ["Investigación Operativa I", "Simulación de Sistemas"],
    "Ciencias de la Computación": ["Algoritmo y Fundamentos de Programación", "Programación Orientada a Objetos", "Administración de Base de Datos", "Business Intelligence", "Big Data", "Machine Learning", "Seguridad Informática", "Ingeniería de Software II", "Ética Deontologica", "Auditoría de Sistemas"],
    "Telecomunicaciones": ["Introducción al Networking", "Administración de Redes de Comunicación"],
    "Ingeniería de Sistemas y Comunicaciones": ["Análisis de Sistemas", "Desarrollo de Aplicaciones con DevOps", "Desarrollo de Aplicaciones Móviles", "Gestión de Servicios de las TI", "Ingeniería de Costos"],
    "Hardware y Arquitectura de Computadoras": ["Teoría General de Sistemas", "Arquitectura de Computadoras"],
    "Otras Ingenierías y Tecnologías": ["Metodología de Investigación Científica", "Plan de Negocios Start Up", "Desarrollo de Tesis", "Proyecto de Tesis", "Métodos de Estudios Universitarios", "Derechos Fundamentales", "Prácticas Preprofesionales I", "Prácticas Preprofesionales II", "Comunicación", "Filosofía y Ética"],
};

const ciclos = [
    "Seleccione Ciclo Académico",
    "I",
    "III",
    "V",
    "VII",
    "IX",
    "X",
];

const turnos = [
    "Seleccione Turno y Sección",
    "Mañana - A",
    "Mañana - A1",
    "Mañana - A2",
    "Tarde - B",
    "Tarde - B1",
    "Tarde - B2",
    "Noche - A",
    "Noche - A1",
    "Noche - A2",
    "Noche - B",
    "Noche - B1",
    "Noche - B2"
]

const RegisterForm = () => {
    const [selectedDisciplina, setSelectedDisciplina] = useState("");

    return (
        <div className="shadow-lg rounded-lg p-8 max-w-md w-full">
            <h1 className="text-4xl font-semibold mb-4 text-center">Registro de Proyectos</h1>

            <div className="flex gap-4 mb-4 justify-center">
                <Link href="https://drive.google.com/file/d/1QR3EZHhhIVib2lFS0Nhpt8ZsK7upqN6v/view?usp=sharing" target="_blank" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Bases
                </Link>
                <Link href="https://drive.google.com/drive/folders/1jnUhM9u4hP6ezKEqM8fetqAppjC5ihik?usp=sharing" target="_blank" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Formatos
                </Link>
            </div>

            <form className="flex flex-col gap-4">
                <select className="border rounded px-4 py-2">
                    {docentes.map((docente, index) => (
                        <option key={index} value={docente}>{docente}</option>
                    ))}
                </select>

                <input type="text" placeholder="Nombre del Proyecto" className="border rounded px-4 py-2" />

                <select className="border rounded px-4 py-2">
                    {integrantes.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>

                <textarea placeholder="Nombres Completos de los integrantes" className="border rounded px-4 py-2 min-h-[100px] resize-y" />

                <select className="border rounded px-4 py-2" onChange={(e) => setSelectedDisciplina(e.target.value)}>
                    <option value="">Seleccione Disciplina</option>
                    {Object.keys(disciplinas).map((disc, index) => (
                        <option key={index} value={disc}>{disc}</option>
                    ))}
                </select>

                <select className="border rounded px-4 py-2" disabled={!selectedDisciplina}>
                    <option value="">Seleccione Curso</option>
                    {selectedDisciplina && disciplinas[selectedDisciplina].map((curso, index) => (
                        <option key={index} value={curso}>{curso}</option>
                    ))}
                </select>

                <select className="border rounded px-4 py-2">
                    {ciclos.map((ciclo, index) => (
                        <option key={index} value={ciclo}>{ciclo}</option>
                    ))}
                </select>

                <select className="border rounded px-4 py-2">
                    {turnos.map((turno, index) => (
                        <option key={index} value={turno}>{turno}</option>
                    ))}
                </select>

                <div>
                    <label className="block mb-1 text-sm font-medium text-white">
                        Cargar archivos PDF y PPT (máx. 2)
                    </label>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => {
                            const files = e.target.files;
                            if (files && files.length > 2) {
                                alert("Solo puedes subir hasta 2 archivos.");
                                e.target.value = ""; // Limpiar selección
                            }
                        }}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                        accept=".pdf,.pptx,.ppt"
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Registrar Proyecto
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;