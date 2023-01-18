import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
import { useEffect } from "react";
import { db } from "../../contexts/authProvider";
import { collection, getDocs } from "firebase/firestore";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
export default function Relatorios() {
	const { usuarioAtual } = useContext(ModalContext);
	const confirmarEmailAdmin = usuarioAtual.nivel == "admin";

	return (
		<section class="principal">
			<main class="main">
				<h1 class="h1-eventos">Relatórios:</h1>
				{confirmarEmailAdmin ? (
					<>
						<button className="sessao">
							<Link to="/relatorios/atleta" className="elemento">
								<p className="grande">Relatorio atletas</p>
							</Link>
						</button>
						<button className="sessao">
							<Link to="/relatorios/pagamento" className="elemento">
								<p className="grande">Relatorio de Pagamento</p>
							</Link>
						</button>
					</>
				) : null}
				<button className="sessao">
					<Link to="/relatorios/checagem" className="elemento">
						<p className="grande">Relatorio de Checagem</p>
					</Link>
				</button>
			</main>
			<Navbar />
		</section>
	);
}
