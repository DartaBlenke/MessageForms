import { Input } from "../components/Input";
import { Button } from "../components/Button";
import '../styles/home.scss';
import '../styles/global.scss';
 
export function Home () {
  return (
    <div id="page-home">
      <h1>MessageForms.com</h1>
      <div className="container">
            <Input name="Telefone" type="tel" title="Telefone" placeholder=" (DDD) 9xxxx-xxxx"/>

            <Input  name="Nome" type="text" title="Nome" placeholder=" Nome" />

            <p>Alerta</p>
            <select className="form-select" aria-label="Alertas" required>
              <option selected>Selecione o Alerta</option>
              <option value="1">Alerta 1</option>
              <option value="2">Alerta 2</option>
              <option value="3">Alerta 3</option>
            </select>

            <Input name="Host" type="text" title="Host" placeholder=" Host" />

            <Input name="IPHost" type="number" title="IP do Host" placeholder=" XXX.XXX.XXX"/>

            <Input name="TotalAlertas" type="number" title="Total de Alertas" placeholder=" Quantidade de Alertas"/>

            <p>Selecione uma mensagem</p>
            <select className="form-select" aria-label="Alertas" required>
              <option selected>Selecione a mensagem </option>
              <option value="1">Bom dia [nome]</option>
              <option value="2">Boa tarde [nome]</option>
              <option value="3">Boa noite [nome]</option>
            </select>

            <Input name="Data" type="date" title="Data" placeholder=""/>

            <Input name="Horas" type="time" title="Horas Ativo" placeholder=""/>

          <Button type="button" className="btn btn-primary justify-self-center">Enviar</Button>


      </div>
      
    </div>
  )
}
