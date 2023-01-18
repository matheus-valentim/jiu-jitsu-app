import Table from "./table";
import Header from "./header";
import ModalAdd from "./modalAdd";
import { useContext } from "react";
import ModalEditar from "./modalEditar";

import ModalAdd2 from "./modalAdd2";
import { ModalContext } from "../contexts/ModalContext";
import { useAuth } from "../contexts/authProvider";
import LoadingSpinner from "./spinner";
import ModalEditar2 from "./modalEditar2";

export default function Dashboard() {
	const { open1, open2, loading, usuarioAtual } = useContext(ModalContext);
	const confirmarEmail = usuarioAtual.nivel == "admin";
	return (
		<div className="dashboard">
			<Header />
			<Table />
			{open1 && confirmarEmail ? <ModalAdd2 /> : null}
			{open1 && !confirmarEmail ? <ModalAdd /> : null}
			{open2[0] && !confirmarEmail ? <ModalEditar /> : null}
			{open2[0] && confirmarEmail ? <ModalEditar2 /> : null}
			{loading ? <LoadingSpinner /> : null}
		</div>
	);
}
