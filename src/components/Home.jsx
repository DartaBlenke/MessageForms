import Input from './Input';
import { 
  Button,
} from 'reactstrap';
 
export function Home () {
  return (
    <main>
      <h1>MessageForms.com</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Input id="ipv4" name="Telefone" type="tel" title="Telefone" placeholder=" (DDD) 9xxxx-xxxx"/>
          </div>

          <div className="col-4">
            <Input name="Nome" type="text" title="Nome" placeholder=" Nome" />
          </div>

          <div className="col-4">
            <p>Alerta</p>
            <select className="form-select" aria-label="Alertas" required>
              <option selected>Selecione o Alerta</option>
              <option value="1">Alerta 1</option>
              <option value="2">Alerta 2</option>
              <option value="3">Alerta 3</option>
            </select>
          </div>

        </div>
        <div className="row">

          <div className="col-4">
              <Input name="Host" type="text" title="Host" placeholder=" Host" />
          </div>

          <div className="col-4">
            <Input name="IPHost" type="number" title="IP do Host" max="9" placeholder=" XXX.XXX.XXX"/>
          </div>

          <div className="col-4">
            <Input name="TotalAlertas" type="number" title="Total de Alertas"/>
          </div>

        </div>
        <div className="row">

          <div className="col-6">
            <p>Selecione uma mensagem</p>
            <select className="form-select" aria-label="Alertas" required>
              <option selected>Selecione a mensagem </option>
              <option value="1">Bom dia [nome]</option>
              <option value="2">Boa tarde [nome]</option>
              <option value="3">Boa noite [nome]</option>
            </select>
          </div>

          <div className="col-3">
            <Input name="Data" type="date" title="Data"/>
          </div>
          <div className="col-3">
            <Input name="Horas" type="time" title="Horas Ativo"/>
          </div>

        </div>
        <div className="d-grid col-3 mx-auto">
          <button type="button" className="btn btn-primary justify-self-center">Enviar</button>
        </div>

      </div>
      
    </main>
  )
}
