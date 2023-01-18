import { useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { useAuth } from "../contexts/authProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { read, utils, writeFileXLSX } from "xlsx";

export default function Header() {
	const {
		setOpen1,
		evento,
		atletas,
		setLoading,
		loading,
		usuarioAtual,
		setUsuarioAtual,
	} = useContext(ModalContext);
	const { logout } = useAuth();
	const [agremiacaoNum, setAgremiacaoNum] = useState([]);
	const [agremiacoes, setAgremiacoes] = useState([]);

	const confirmarEmail =
		usuarioAtual.nivel == "admin" || usuarioAtual.nivel == "professor";
	const HandleLogout = async () => {
		localStorage.removeItem("email");
		localStorage.removeItem("senha");
		localStorage.removeItem("nivel");
		setUsuarioAtual(false);
	};

	function exportFile() {
		const filtrado = atletas;
		filtrado.map((filtro) => delete filtro.docId);
		const ws = utils.json_to_sheet(filtrado);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, "Data");
		writeFileXLSX(wb, `${evento}.xlsx`);
	}

	useEffect(() => {
		const testando = [];
		atletas.map((user, key) => {
			testando.push(user.agremiacao);
		});
		setAgremiacaoNum(Array.from(new Set(testando)));
	}, [atletas]);

	return (
		<div className="header">
			<div className="botoes-link">
				<Link to="/eventos">
					<button className="button blue voltar">Voltar</button>
				</Link>

				<h1 className="h1">{evento}</h1>
			</div>

			<div>
				<p className="header-p">{"Atletas: " + atletas.length}</p>
				<p className="header-p">{"Agremiações:" + agremiacaoNum.length}</p>
			</div>

			<div className="botoes">
				{confirmarEmail ? (
					<button
						className="button green"
						onClick={() => {
							exportFile();
						}}
					>
						Exportar
					</button>
				) : null}
				{confirmarEmail ? (
					<button
						className="button green"
						onClick={() => {
							setOpen1(true);
						}}
					>
						Adicionar Atleta
					</button>
				) : null}
				<form className="">
					<button
						className="button red logout"
						id="btnLogout"
						type="button"
						onClick={() => {
							HandleLogout();
						}}
					>
						Deslogar
					</button>
				</form>
			</div>
		</div>
	);
}
