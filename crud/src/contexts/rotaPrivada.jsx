import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";
import { ModalContext } from "./ModalContext";
import { useContext } from "react";

export default function PrivateRoute({ children }) {
	const { currentUser } = useAuth();
	const { usuarioAtual } = useContext(ModalContext);
	return usuarioAtual.email ? children : <Navigate to="/" />;
}
