import Navbar from "../../componentes/navbar";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/authProvider";
import { db } from "../../contexts/authProvider";
import { read, utils, writeFileXLSX } from "xlsx";
import { Link } from "react-router-dom";
import {
	collection,
	getDocs,
	deleteDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import { useState } from "react";
export default function Atletas() {
	const [sexo, setSexo] = useState(/[a-z]/i);
	const [faixa, setFaixa] = useState(/[a-z]/i);
	const [categoria, setCategoria] = useState(/[a-z]/i);
	const [classe, setClasse] = useState(/[a-z]/i);
	const [arr, setArr] = useState([]);
	const [ativo, setAtivo] = useState("");

	const {
		setEvento,
		setOpenEvento,
		openEvento,
		eventos,
		setEventos,
		evento,
		setLoading,
		loading,
		atletas,
		setAtletas,
	} = useContext(ModalContext);
	useEffect(() => {
		const getUsers = async () => {
			setLoading(true);
			if (evento) {
				const usersCollectionRef = collection(
					db,
					"eventos",
					evento.trim(),
					"usuarios"
				);

				const data = await getDocs(usersCollectionRef);
				setAtletas(data.docs.map((doc) => ({ ...doc.data(), docId: doc.id })));
			}
			setLoading(false);
		};

		getUsers();
	}, [evento]);
	function exportFile() {
		const filtrado = arr;
		filtrado.map((filtro) => delete filtro.docId);
		const ws = utils.json_to_sheet(filtrado);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, "Data");
		writeFileXLSX(wb, `Atleta.xlsx`);
	}
	async function filtrarClasse(classe) {
		<div>teste</div>;
		setArr(
			atletas.filter(
				(user) =>
					new RegExp(sexo, "i").test(user.sexo) &&
					new RegExp(faixa, "i").test(user.faixa) &&
					new RegExp(categoria, "i").test(user.categoria) &&
					new RegExp(classe, "i").test(user.classe)
			)
		);
	}
	async function filtrar() {
		setArr(
			atletas.filter(
				(user) =>
					new RegExp(sexo, "i").test(user.sexo) &&
					new RegExp(faixa, "i").test(user.faixa) &&
					new RegExp(categoria, "i").test(user.categoria) &&
					new RegExp(classe, "i").test(user.classe)
			)
		);
	}
	useEffect(() => {
		setLoading(true);
		setArr(atletas);
		setLoading(false);
	}, [atletas]);
	useEffect(() => {
		const getUsers = async () => {
			setLoading(true);
			const usersCollectionRef = collection(db, "eventos");
			const data = await getDocs(usersCollectionRef);
			setEventos(data.docs.map((doc) => ({ ...doc.data() })));
			setLoading(false);
		};
		getUsers();
	}, []);

	return (
		<div className="table-container">
			<Link className="button blue" to="/relatorios">
				Voltar
			</Link>
			<button onClick={exportFile} className="button2 blue">
				Exportar
			</button>
			<div className="title-relatorio">
				<select
					name=""
					className="relatorio-select"
					id=""
					onChange={(e) => {
						setEvento(e.target.value);
					}}
				>
					<option value="" disabled selected>
						Eventos
					</option>
					{eventos
						? eventos.map((eventoNome, key) => {
								return (
									<option value={eventoNome.nome}>{eventoNome.nome}</option>
								);
						  })
						: null}
				</select>
			</div>
			<div className="relatorio-container">
				<div className="">
					<select
						className="relatorio-select"
						onChange={(e) => {
							setFaixa(e.target.value);
						}}
					>
						<option value="" disabled selected>
							Faixa
						</option>
						<option value="[a-z]">TODOS</option>
						<option value="branca">BRANCA</option>
						<option>CINZA</option>
						<option>AMARELA</option>
						<option>LARANJA</option>
						<option>LARANJA-VERDE</option>
						<option>AZUL</option>
						<option>ROXA</option>
						<option>MARROM</option>
						<option>PRETA</option>
						<option>BRANCA E CINZA</option>
					</select>
				</div>
				<div className="">
					<select
						className="relatorio-select"
						onChange={(e) => {
							setCategoria(e.target.value);
						}}
					>
						<option value="" disabled selected>
							Categoria
						</option>
						<option value="[a-z]">TODOS</option>
						<option>GALO</option>
						<option>PLUMA</option>
						<option>PENA</option>
						<option>LEVE</option>
						<option>MÉDIO</option>
						<option>MEIO-PESADO</option>
						<option>PESADO</option>
						<option>SUPER-PESADO</option>
						<option>PESADÍSSIMO</option>
						<option value="ligeiro">LIGEIRO</option>
					</select>
				</div>

				<div className="">
					<select
						className="relatorio-select"
						onChange={(e) => {
							setClasse(e.target.value);
						}}
					>
						<option value="" disabled selected>
							Classe
						</option>

						<option value="[a-z]">TODOS</option>
						<option value="pre mirim">PRÉ MIRIM 4/5</option>
						<option>MIRIM 6/7</option>
						<option>INFANTIL A 8/9</option>
						<option>INFANTIL 10/11 </option>
						<option>INF-JUVENIL 12/13 </option>
						<option>INF-JUVENIL 14/15 </option>
						<option>JUVENIL 16/17 </option>
						<option>ADULTO </option>
						<option>MASTER</option>
						<option>MASTER 1 </option>
						<option>MASTER 2 </option>
						<option>MASTER 3 </option>
						<option>MASTER 4</option>
						<option>MASTER 5</option>
						<option>NO GI JUVENIL </option>
						<option>NO GI ADULTO </option>
						<option>NO GI MASTER</option>
						<option>NO GI MASTER 1</option>
						<option>NO GI MASTER 2</option>
					</select>
				</div>
				<div className="">
					<select
						className="relatorio-select"
						onChange={(e) => {
							setSexo(e.target.value);
						}}
					>
						<option value="" disabled selected>
							Sexo
						</option>

						<option value="[a-z]">TODOS</option>
						<option value="masc">MASC</option>
						<option>FEM</option>
					</select>
				</div>
				<button className="botao-relatorio " onClick={filtrar}>
					Filtrar
				</button>
			</div>

			{!loading ? (
				<table className="records" id="teste" border="1px solid black">
					<thead>
						<tr className="trStyck">
							<th>Pontos</th>
							<th>Colocação</th>
							<th>Nome</th>
							<th>Agremiação</th>
							<th>Sexo</th>
							<th>Faixa</th>
							<th>Categoria</th>
							<th>Classe</th>
							<th>Ouro</th>
							<th>Prata</th>
							<th>Bronze</th>
							<th>WO</th>
							<th>Festival</th>
							<th>Pagamento</th>
							<th>Professor Responsável</th>
							<th>Telefone do Professor</th>
						</tr>
					</thead>
					<tbody>
						{arr.map((funcionario, key) => {
							return (
								<tr id={key}>
									<td>{funcionario.pontos}</td>
									<td>{funcionario.colocacao}</td>
									<td>{funcionario.nome}</td>
									<td>{funcionario.agremiacao}</td>
									<td>{funcionario.sexo}</td>
									<td>{funcionario.faixa}</td>
									<td>{funcionario.categoria}</td>
									<td>{funcionario.classe}</td>
									<td>{funcionario.ouro}</td>
									<td>{funcionario.prata}</td>
									<td>{funcionario.bronze}</td>
									<td>{funcionario.wo}</td>
									<td>{funcionario.festival}</td>
									<td>{funcionario.pagamento}</td>
									<td>{funcionario.professorResponsavel}</td>
									<td>{funcionario.telefoneProfessor}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : null}
		</div>
	);
}
