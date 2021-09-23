import '../styles/global.scss';
import { 
  Button, 
  Input,
} from 'reactstrap';

export function Home () {
  return (
    <main>
      <h1>MessageForms.com</h1>
      <div className="container">
        
        <p>Nome</p>
        <Input id="inputs" required placeholder="Digite o nome aqui"></Input>
        <p>Data do Alerta</p>
        <Input id="inputs" type="date" required></Input>
        <p>Total de Alertas</p>
        <Input id="inputs" type="number" required></Input>
        <p>Horas Ativo</p>
        <Input id="inputs" type="time" required></Input>
        <p>Telefone</p>
        <Input id="inputs" type="tel" required placeholder="(DDD) 9xxxx-xxxx"></Input>

        <Button color="primary">Enviar!</Button>

      </div>
    </main>
  )
}
