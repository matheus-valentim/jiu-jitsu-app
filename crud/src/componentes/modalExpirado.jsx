import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Expirado() {
	const {
		setOpen1,
		setAtletas,
		atletas,
		evento,
		setEvento,
		todasAgremiacoes,
		setTodasAgremiacoes,
		usuarioAtual,
		loading,
		eventos,
	} = useContext(ModalContext);
	return (
		<div
			id="modalBackground"
			className="modalBackground"
			onClick={(e) => {
				if (e.target.id === "modalBackground") {
					setOpen1(false);
				}
			}}
		>
			<div className="modalContainerFlex">
				{eventos.map((eventoo, key) => {
					return (
						<button
							onClick={() => {
								setEvento(eventoo.nome);
								localStorage.setItem("pessoas", eventoo.nome);
							}}
							className="expirado-container"
						>
							<Link
								to="/dashboard"
								className="expirado"
								onClick={() => {
									setOpen1(false);
								}}
							>
								<p className="grande">{eventoo.nome}</p>
								<p>{eventoo.data}</p>
							</Link>
						</button>
					);
				})}
			</div>
		</div>
	);
}
