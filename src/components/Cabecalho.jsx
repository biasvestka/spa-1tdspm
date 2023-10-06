import { Link } from "react-router-dom";
import {AiFillHome as H} from "react-icons/ai"


export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React / Coded By - PF0670</h1>
        <ul>
          <li>
            <link to= "/">HOME - <H/> </link>
          </li>
          <li>
            <link to= "/produtos">PRODUTOS</link>
          </li>
          <li>
            <link to="/editar/produtos/1">PRODUTO - 1</link>
          </li>
          <li>
            <link to="/editar/produtos/2">PRODUTO - 2</link>
          </li>
          <li>
            <link to="/editar/produtos/3">PRODUTO - 3</link>
          </li>
        </ul>
      </header>
    </>
  );
}
