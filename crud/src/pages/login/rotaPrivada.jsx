import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authProvider";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
export default function PrivateRoute({ children }) {
	const { currentUser } = useAuth();
	const { usuarioAtual } = useContext(ModalContext);
	return usuarioAtual ? children : <Navigate to="/" />;
}
