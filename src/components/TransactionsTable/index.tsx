import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
export function TransactionsTable() {


    useEffect(() => {
        api.get("transactions")
            .then(response => console.log(response.data))
    },[])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr >
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/01/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$1.200</td>
                        <td>Casa</td>
                        <td>19/01/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}