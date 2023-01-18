import { useState } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../contexts/authProvider";
import data from "../data.json";
import { read, utils, writeFileXLSX } from "xlsx";

export default function Checagem() {
	function exportFile() {
		const ws = utils.json_to_sheet(data);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, "Data");
		writeFileXLSX(wb, `Checagem.xlsx`);
	}
	return (
		<div className="checagem">
			<div className="div-checagem">
				<Link className="button button-checagem blue" to="/relatorios">
					Voltar
				</Link>
				<button onClick={exportFile} className="button blue">
					Exportar
				</button>
			</div>

			<div id="1 COPA DSW KIDS 2022 OFICIAL_17364" align="center">
				<table border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col />
					</colgroup>
					<tbody>
						<tr>
							<td class="h1-checagem">CHECAGEM - COPA DSW KIDS 2022</td>
						</tr>
						<tr>
							<td class="  h3-checagem">&nbsp;</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								01- PRE MIRIM - 4 e 5 anos // FEM //00.BRANCA / CINZA
								//00.FESTIVAL
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Laura Firmino Cunha Da Cruz
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Helena Augusto Vianna</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lavínia Vieira Regufe Da Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ana Liz Moreira Mendonça Paulino
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Eduarda Diniz Velozo</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Luiza Souza Ramos<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Ayla Queiroz Costa</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lavínia De Albuquerque Trindade</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Sophia Dos Santos Parente.</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Benjamin Lacerda Cardoso</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Vitoria Souza Braz</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Giovana Cardin</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Heloisa Rodrigues Mota</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Yasmin Prado Gonçalves
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								01- PRE MIRIM - 4 e 5 anos // MAS //00.BRANCA / CINZA
								//00.FESTIVAL
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gabriel Souza Santana</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Thiago Ferracioli Dos Santos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Matheus Santos De Souza</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Isaac Felipe Aniceto</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE CAVALO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">João André Ribeiro Najar Fogaça</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arthur Galvão Machado</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE UFA JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Emanuel Victor Picado Batista Abreu
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Breno Lobo Campos De Souza</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								João Gabriel Mota Oliveira Da Costa
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bernardo Silva Verdan Do Nascimento
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GVJJA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Samuel Mendes Santiago Barbosa
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Eduardo Coutinho Faria</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Joao Lucas De Oliveira Machado</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								João Guilherme Rodrigues Coutinho
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Oliver Brandão Carramão</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Henrique De Souza Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Anthony De Oliveira Martins.
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Benjamin Santos Andrade.</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Brayan Cerqueira</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Giovanna Candido Lima</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Rodrigo De Oliveira Cardozo</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Guilherme Colares</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Enzo Marques Fortunato
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Leonardo Ubiratan</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								02- MIRIM - 6 e 7 anos // FEM //00.BRANCA / CINZA //00.FESTIVAL
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Kiara Lopes Martins De Menezes
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE CAVALO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Joana Ribeiro Najar Queiroz Neves
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Luísa Novoa Cerri Gonçalves
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Geovanna Marins Rangel</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Isadora Viana De Oliveira Dos Santos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Manoela Passos Carrete
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maya De Almeida Pontes</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Valentina De Souza Jardim</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Helena Lins Oliveira<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAFER BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Malu Werneck Telles De Oliveira</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NAÇÃO KIDS FIGHT TEAM
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lara Vitória Fernandes Pereira</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Agatha Yamin Simões Da Cruz Da Silva
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Eloá Cristina Tavares Da Silva 14/12/2014
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Laura Mendes De Oliveira 17/08/2016
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Julia Sally</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Sophia Amaral Candeia</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Maria Eduarda Purguer Do Nascimento 12/04/2015
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Sofia Crescêncio Da Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Mariana Pires</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Larissa Santos Da Silva</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								02- MIRIM - 6 e 7 anos // MAS //00.BRANCA / CINZA //00.FESTIVAL
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Arthur Cunha Lugath De França
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Arthur Silva De Oliveira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Heitor Meireles Do Couto
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Jean Pierre Dos Santos De Oliveira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bernardo Malens Rodrigues
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Bernardo Marcondes Silva</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Caio Nicácio Ventura</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Daniel Rodrigues De Oliveira</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gabriel Fonseca De Melo</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Heitor De Oliveira Cardoso</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Barbosa Duarte</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Samuel Deslandes Felix</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bernardo De Araujo De Freire Silva
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Isabella Lúcia Santos Dias Cordeiro
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Arthur Rihan Dias De Almeida
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Davi Pampulonia Barata Ribeiro
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Araujo Rodrigues</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Jean Paulo Rangel Da Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Da Conceição Salles Leal</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Davi De Oliveira Mathias
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enrico Cardoso De Souza</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Gabriel Moura Do Nascimento
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Isaac Moreira Passos<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Kaio Costa Teixeira<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lucas Gabriel Dos Santos Lima</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bento Campos Figueiredo
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bryan Gomes Demétrio Cunha
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Dante Castro Diaz Nápoles
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Enrico Soares Sarzedas
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Enzo Araká G Veiga<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Felipe Benevides Vieira De Souza
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Mosart Rafael Ramos Domingues Chagas
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GVJJA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Enzo Bastos<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Samuel Paixão De Andrade</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Dorneles De Carvalho</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Calçado</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Ferreira Sodré</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bernardo Monteiro De Carvalho Pires
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Davi Ferreira Dos Santos De Almeida
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Menezes Ferreira</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Heitor Calebe Oliveira Benvindo</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Luis Fernando Dos Santos Pereira</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Théo Freitas Mantuan</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAFER BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Bernardo Paes Campos</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Joao Henrique Ribeiro De Carvalho Vitor
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NAÇÃO KIDS FIGHT TEAM
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Diego Tadeu Soares Japiassu</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lucas Ribeiro Da Costa</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Fernandes</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Veras Ferreira</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Arthur Vieira Matos<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bento Do Nascimento Brito
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Arthur Nicolás De Oliveira Alves
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bernardo De Almeida Azevedo
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bernardo Vilar Da Silva Vieira 04/01/2016
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Bezerra Da Silva 20/05/2015</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Camacho Soares 01/08/2015</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gustavo Da Silva Moura</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								João Miguel Vieira Purgur
								<span>&nbsp; </span>Camisa 06/04/15
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Joaquim Rocha De Oliveira</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Matheus Garcia Belchior</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Miguel Vittor Rocha Ignacio Caldas
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Nicolas Crescencia Da Silva</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Samuel Barroso De Moura De Castro
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Noah Mattos Loreti</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Jhuan Pablo Goulart<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Adryan L. Da Silva<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								João Miguel<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">João Victor Farias</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Vitor Azevedo Fontes</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //00.BRANCA / CINZA
								//03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Sofia Marques Amorim Da Silva
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Thayla Maria Mendes Costa</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Ana Gabrielly Leucht</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Djule Mendes Dos Santos</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //00.BRANCA / CINZA
								//06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Julia Ferreira De Carvalho -</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Ana Luiza De Souza Barros</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Tyfani De Figueredo</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //00.BRANCA / CINZA
								//08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Nicoly Fagundes Neves</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">TEAM BROTHERS</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Eliza Cardoso Costa</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //01.BRANCA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Joanna Matias De Oliveira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Esther Rodrigues Santos</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Laura Macedo Marinho<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Izabella Soares Mota Ribeiro
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lenita Corrêa Guedes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Sophia Mendes Oliveira
								<span>&nbsp; </span>15/11/2012
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Alice De Azevedo Fontes</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //01.BRANCA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Livia Pinto De Brito<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Manu Ellen Ruiz P De Castro</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Maria Victória Santana De Oliveira
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Emanuele Colares</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //01.BRANCA //09.SUPER PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Luiza Oliveira De Sousa</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Sophia Souza<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //01.BRANCA //10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ludmylla Oliveira Medeiros
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //02.CINZA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Asheley Gonçalves Dos Santos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Valentina De Oliveira Lima</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //02.CINZA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Elisa De Souza Frota<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Ana Luyza Ferreira Da Silva</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //02.CINZA //09.SUPER PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Isabela Cabreira<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Rebeca De Paula Neves</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // FEM //03.AMARELA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Yasmim Da Silva Conceição Amarela
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Manuella Lacerda Ugulino
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NAÇÃO KIDS FIGHT TEAM
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Esther Ribeiro Fermiano</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Clara Ribeiro Da Costa</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //01.BRANCA //02.GALO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Gabriel Correa De Amorim
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Richard Da Silva De Oliveira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gabriel Oliveira Campos</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //01.BRANCA //03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bernardo Pereira França
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Sergio Guilherme Dos Santos Silva
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Heitor Barboza Pinho<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ryan Carodos Gomes<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GVJJA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Joao Gabriel Mello Telles Ribeiro
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Enzo Gomes Petrucio Martins Teixeira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Fernandes Sirieira Camara</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lucas Borges Pereira Da Silva.</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Raphael Elisio Carvalho</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arthur Da Silva De Jesus</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //01.BRANCA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Guilherme Otávio Souza De Moraes
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">CT-MG JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Saulo Duarte Porfirio Florentino
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE CAVALO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Antônio Gabriel Ribeiro Souto</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Fernando Ribeiro Mesquita
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Nycael De Oliveira Gomes
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Jhonata Isaías Nascimento
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Tallys Pedrosa<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Nicolas Teles Faria De Oliveira</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Francisco Gabriel</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bernardo<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //01.BRANCA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arthur Fernandes Mendes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Heitor Gil Matos Amorim
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">João Gabriel Laprovitera Castro</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Luan Miguel Ferreira Dos Santos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Tierry De Farias</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Paulo Bernardo Da Conceição Frajberg
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Rhian Samuel Barboza<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Paulo Victor Gomes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ (B)</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Nicolas De Paula Machado
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJ. VENCEDORES EM CRISTO (B)
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Calebe Calixto</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //01.BRANCA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Hugo De Souza Frota<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Bernardo Martins Araújo</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Calheiros Tavares</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Yuri Carvalho Da Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ (B)</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Miguel Costa Barros<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //01.BRANCA //07.MEIO PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Murilo Pontes Barreto</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Caio Lucas Barra Carvalho
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GVJJA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Teixeira De Azevedo</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Joao Mateus Lima De Oliveira</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Lucas Leucht<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //01.BRANCA //08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Henrique Alves Da Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Davi Lucas Carvalho Baptista
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arthur Pereira Ribeiro</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Mayck Duarte</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Kauã Rebouças</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Joao Pedro Osiris De Barros Dias</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //01.BRANCA //10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Gabriel Nunes Baltazar</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">José Lucas Fiuza Da Silva</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Kayo Victor Batista Raposo</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Bryan Brandão De Araújo
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Ryan Joanes Fernandes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU (B)</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gabriel Vicenzzo</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU (C)</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Matheus Torres Dos Santos</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //02.CINZA //03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Gabriel Dos Santos Miguel
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE CAVALO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Pedro Henrique De Almeida Lima
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Caio De Souza Mendonça De Luna</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Felipe Fontolan Ferraz Fernandes
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //02.CINZA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Andrew Luiz Souza Teixeira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arthur Rodrigues De Mello Cunha</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Miguel Diniz Velozo<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Caio De Oliveira Cardoso
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Antony De Oliveira Carvalho</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Andreny S. Santos<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //02.CINZA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Guilherme Costa Nunes
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Luiz Kalleb Amaral</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Tales Francisco De Oliveira Marques
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //02.CINZA //07.MEIO PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Kauê Gutierres Souza Bastos</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GVJJA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Fonseca Mendes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Jorge Duarte</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Arthur Cabral<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //02.CINZA //09.SUPER PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Cabral</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Leonardo Ezequiel Da Silva Freitas
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //02.CINZA //10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Joao Gabriel Alves Ferraz</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Bernardo De Souza Oliveira Nunes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Bento Petrucci</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Paulo Henrique Souza De Freitas</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //03.AMARELA //03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Bernardo Lacerda Ugulino</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NAÇÃO KIDS FIGHT TEAM
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gustavo Fernandes Pereira</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								03- INFANTIL A - 8 e 9 anos // MAS //03.AMARELA //10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">CT-MG JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Josué Santos Da Silva Gomes</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //00.BRANCA / CINZA
								//09.SUPER PE<span>SADO</span>
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Carolina Cardoso De Almeida
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //01.BRANCA //03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Maria Eliza Lacerda Smiderli
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Alicia Silva Nascimento</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Isabelle Gonçalves Da Silva</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //01.BRANCA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Mariana Calheiros Aliandro</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Ana Julia Medeiros</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ana Carolina Vasconcelos Dos Santos 20/07/2011
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ana Clara Cruz De Oliveira Alves
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //01.BRANCA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Lia Baihense Oliveira Rodrigues
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Sophia Leutz Pinheiro</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Mirella Dos Santos</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Samanta Dos Santos</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //01.BRANCA //09.SUPER
								PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Lorrane Victória Farias De Azevedo
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ana Clara De Oliveira Lopes
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //01.BRANCA
								//10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Marina Neves Barbosa</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Antonia Andrade</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Sophia Victória Rocha Soares</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Lorenna Da Silva Pereira Costa
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJ. VENCEDORES EM CRISTO (B)
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ana Beatriz Da Silva Rodrigues 04/03/2012
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //02.CINZA //01. LIGEIRO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Evelyn Everlaine Gonçalves Dos Santos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Melyssa Ramalho Alburquerque</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Ellen Moura Cruz</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //02.CINZA //02.GALO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">CT-MG JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Eduarda Evangelista Lopes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Lunna Victoria Da Conceicao Villas Boas
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //02.CINZA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Beatriz Barros Correia
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Izabella De Matos Silva</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //02.CINZA //07.MEIO PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Clara Lirio Sanches</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ester De Oliveira Azevedo
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //03.AMARELA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Roberta Dos Santos Da Silva
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // FEM //03.AMARELA //09.SUPER
								PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Nicolly Vitória G. De Lima</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Tereza De Oliveira Leite</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">TEAM BROTHERS</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Eduarda Cardoso Costa</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //00.BRANCA / CINZA //01.
								LIGEIRO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Taurino Da Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Jorge Lucas Barbosa Duarte</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //00.BRANCA / CINZA
								//03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gabriel Machado</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Nycolas Gabriel De Oliveira Gomes
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Pedro Almeida De Souza
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Carlos Willian Isidoro Santiago.
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Ferreira Sousa</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Derick Rodrigues De Souza</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //00.BRANCA / CINZA
								//07.MEIO PE<span>SADO</span>
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA SÃO GONÇALO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Paulo Renato Da Silva Batista
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Gustavo Ramos Machado
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //00.BRANCA / CINZA
								//08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arthur Machado Da Mota</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Matheus De Souza Da Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Carlos Eduardo Conceicao Da Silva
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Juan Gabriel Rabelo Cantuaria Gadioli
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //01.BRANCA //02.GALO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Pedro Lucas De Souza Cardoso Lycurgo
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GVJJA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Francisco De Mello Sardella</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Kauã Victor Vieira Ramos</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //01.BRANCA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Da Conceição Salles Leal</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Fabrinny De Lima Catarino</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Lucas Da Silva Prado.</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Isaque Campos Gomes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Guilherme Diolindo Dos Santos</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //01.BRANCA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Carlos José De Lima Junior
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Lucas Marins Giannerini Coutinho
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Marley Simplicio Lavra</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Jonata Lima De Oliveira Data</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Gonçalves Marques</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Izaias Normando Da Conceição</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Samuel André Pinheiro De Oliveira 18/11/2010
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //01.BRANCA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Heitor Nascimento Moreira</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								João Vitor De Souza Cardoso Lycurgo
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Nícolas Almeida Valladão</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Guilherme Do Nascimento Alvis Águia
								<span>&nbsp; </span>30/07/2011
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">João Gabriel Dos Santos Oliveira</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //01.BRANCA
								//10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Marcelo Iarley De Melo Do Amaral Sabino
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Daniel Fernandes Matheus</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Rodrigo Vaz Lopes De Souza</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Isaac Soares Fialho</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">João Pedro Batista De Freitas</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lorran Da Conceição Alves</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Paulo Victor Tavares<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ (B)</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Luiz Henrique Santos Da Silva</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Luiz Ruan Aredes De Lima</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ (C)</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Yan Lucas De Souza Guimarães</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //02.CINZA //02.GALO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Wanderson De Oliveira Machado Leite
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Tiago Santos Moreira</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Erick Pereira Sales</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //02.CINZA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Wallace Borges Santos De Melo
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Isaac Bragança Ferreira</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Nicolas André De Oliveira Siqueira
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pablo De Oliveira Thomaz.</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Luan Viana De Souza</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //02.CINZA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Guilherme Mendes Ranzeiro</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Samuel Alencar Das Chagas
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //02.CINZA //10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arhtur Satos Vargas</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Pedro Viegas Leal<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Joao Victor Da Silva Bernardes</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Benner Da Mata Fortes Pessoa</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //03.AMARELA //01. LIGEIRO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAFER BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Emanuel Mariano Ferreira</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //03.AMARELA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arthur Da Silva Senra</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //03.AMARELA //07.MEIO
								PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE CAVALO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Henrique Carreira Silva</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //03.AMARELA //08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE CAVALO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Araújo Coutinho Gomes</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								04- INFANTIL B - 10 e 11 anos // MAS //03.AMARELA
								//10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Miguel Silva Do Nascimento
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //00.BRANCA / CINZA
								//03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Laiz Bruna Da Costa</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lavínia Catarino Campos</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Manuella Cristina Marins Santos</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //00.BRANCA / CINZA
								//05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Manuela Quintanilha Cabral Ramos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //00.BRANCA / CINZA
								//07.MEIO PES<span>ADO</span>
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Nicolly Vitória Silva De Oliveira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Yasmim Kyara&nbsp; Costa Da Matta
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Polianna Aparecida Dos Santos Oliveira
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //01.BRANCA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Raphaela Almeida Dias</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Maisa Nascimento<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Victoria Leucht<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ana Clara Dantos Capôs
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Júlia Gomes</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //01.BRANCA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Tayla Vitória Farias Corrêa
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Maria Eduarda Oliveira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Nicole Tavares Mendes
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //01.BRANCA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Sara Carolina Deslandes Felix</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Izadora Rocha Mourão<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Marta Mirella Militão</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //02.CINZA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Ana Beatriz De Carvalho Coutinho
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Sara Almeida Monteiro</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //02.CINZA //10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Jasminy Alves Siqueira</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //03.AMARELA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Larah Araujo Rodrigues</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Roberta Dos Santos Rieger Matos</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Luiza Gonçalves Silva 19/09/2009</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //03.AMARELA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Laura Dos Santos<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //03.AMARELA
								//10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Thaynara De Souza De Jesus</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // FEM //04. LAR/VER //07.MEIO
								PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Lilly Guimarães De Albuquerque
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //00.BRANCA / CINZA
								//08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Johann Oliveira De Moreas
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Pedro Henrique Xavier De Almeida
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Rodrigues Soares</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Kauã Modesto Pereira<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //00.BRANCA / CINZA
								//09.SUPER PES<span>ADO</span>
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Pedro Calille<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Salles Cordeiro</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Israel Magalhães Silva
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //01.BRANCA //03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Juan Corrêa Guedes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Rodrigo Oliveira Campos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Isac Loureiro Tavares Dos Santos
								<span>&nbsp; </span>07/04/2010
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">João Kaike De Assis</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //01.BRANCA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Passos Zambon</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Guilherme Purguer Gomes Leite 10/12/2010
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Richard Vinicius Barboza Dias</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Jhuan Rupp Silva Lima
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Jorge Luiz Coutinho Dos Santos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJETO LUTADORES DA FÉ (B)</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Kayke Da Silva Pereira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Yuri Gustavo Modesto Rosa Eugênio
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //01.BRANCA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Davy Almeida De Moura
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Lannes Petrutes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Lameira Domingos</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAFER BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel De Souza Faria</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Arthur Carvalho<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Cristhian Da Fonseca</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Luiz Cláudio Espírito Santo
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Oliveira Souza De Lima</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //01.BRANCA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Caio De Oliveira Portugal</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Matheus Ribeiro Melo<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Deryck Mendes Costa</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Alexsandro Tertuliano De Souza</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //01.BRANCA //07.MEIO PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Luan Da Costa Gomes</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Matheus Ribeiro Mesquita
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Breno Fernandes Manhães</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Igor Gomes<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Caio Henrique Da Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GRACIE BARRA ITAIPUAÇU (B)</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Miguel Tenório Das Neves Santana
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //01.BRANCA //08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Joaquim Silvestre De Souza</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //01.BRANCA //10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Nicolas Lopes Da Conceição
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Sidnei De Melo Neto<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Matheus Martins Sardinha</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Hugo Matias Eller Chagas Nóbrega De Souza
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Felipe Teixeira Igreja</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Matheus Martins Cunha</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Felipe Prudencio</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Kayke Jais Dias<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //02.CINZA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">JESUS JITSU/ORIENTE MARICA</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Samuel Asafe De Matos Silva</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gabriel Pereira Sixel</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Pedro Antony Diniz</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //02.CINZA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gabriel De Souza Rodrigues</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								João Paulo Goes Freitas Ferreira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAFER BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Caio Victor Lannes Dos Santos</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //02.CINZA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Jean Luka Marins</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Viana De Souza</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //03.AMARELA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Ribeiro Da Conceição</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NAÇÃO KIDS FIGHT TEAM
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Miguel Ferreira De Souza</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								João Victor<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //03.AMARELA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								GRACIE BARRA ITAIPUAÇU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Nathan Amaral Do Carmo
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //03.AMARELA //07.MEIO
								PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NAÇÃO KIDS FIGHT TEAM
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Marcos Gabriel Pereira Da Silva Dos Santos
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gustavo Reis De Oliveira</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //03.AMARELA
								//10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Arthur Santana Saraiva</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //04. LAR/VER //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE UFA JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Caio Franklin De Paulo Cunha
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NAÇÃO KIDS FIGHT TEAM
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Enzo Ferreira Simões</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Victor Hugo Ribeiro Fermiano</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">OLIVEIRA JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lucas Da Cruz Rodrigues</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Maicon Araújo<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								05- INF JUV A - 12 e 13 anos // MAS //04. LAR/VER //09.SUPER
								PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">EQUIPE LUIZ PAULO JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Igor Sacramento Da Silva</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // FEM //00.BRANCA / CINZA
								//07.MEIO PES<span>ADO</span>
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Myrella Macário Dos Santos</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Patricia Victoria Araujo Dos Santos
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Rhaissa Soares Da Silva</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // FEM //00.BRANCA / CINZA
								//09.SUPER PES<span>ADO</span>
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Marcela Neves Barbosa
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Lorena Vitoria Almeida Silveira</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // FEM //01.BRANCA //03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAX TOP TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Julia Cardoso Barreto</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // FEM //04. LAR/VER //03.PLUMA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Thayna Costa Cavalcante</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Luísa Gomes<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // FEM //04. LAR/VER //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// FEM //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Jheniffer Oliveira Nolasco</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Maria Julia Peixoto De Souza</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //00.BRANCA / CINZA //01.
								LIGEIRO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Kauê Carvalho De Lustosa
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								João Pedro Carvalho Alves
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //00.BRANCA / CINZA
								//08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Kaue Mendes Da Silva<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //01.BRANCA //05.LEVE
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ARION TEAM JJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Ruan Gonçalves Gustavo</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Gustavo Richard Santos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Calebe Julian Andrade</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //01.BRANCA //08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Otávio De Souza Soriano</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO LUTADORES DA FÉ
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Gustavo Da Luz Pereira
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								ROBINHO JJ MARICÁ<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Yudi Gomes Pereira Barreira</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //02.CINZA //10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Paulo Henrique Vieira Parente</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAFER BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Gustavo Paulino Soares Monteiro</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //03.AMARELA //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">GFTEAM ITABORAI</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Kaio Ferreira Machado</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Danilo Mendes Dos Santos
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PROJETO RICARDO VERÍSSIMO JIU-JITSU
								<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Arthur Santos<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //03.AMARELA //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">FJU BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Michael Coelho Da Silva Fernandes
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">KAIROS BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Junior Fernandes De Souza</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Matheus Calheiros Aliandro</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //03.AMARELA
								//10.PESADISSIMO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">ÁGAPE JIU JITSU</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Calebe Dos Santos<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Bernardo Da Silveira De Assis</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //04. LAR/VER //04.PENA
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">MAFER BJJ</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">Davi Mariano Ferreira</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //04. LAR/VER //06.MEDIO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								NOVA UNIÃO<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Hugo Barreto<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class="  h3-checagem">
								06- INF JUV B - 14 e 15 anos // MAS //04. LAR/VER //08.PESADO
							</td>
						</tr>
						<tr>
							<td class=" sexo-checagem">// MAS //</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">
								PEDROSA JIU-JITSU<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Kauã Da Silva Mendes<span>&nbsp;</span>
							</td>
						</tr>
						<tr>
							<td class=" agremiacao-checagem">PROJ. VENCEDORES EM CRISTO</td>
						</tr>
						<tr>
							<td class=" atleta-checagem">
								Jean Phelipe Da Conceição Azevedo
							</td>
						</tr>
						<tr>
							<td class="xl1517364"></td>
						</tr>

						<tr height="0">
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
