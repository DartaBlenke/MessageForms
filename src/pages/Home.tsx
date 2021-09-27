import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import '../styles/home.scss';
import '../styles/global.scss';
 
export function Home () {
  const alertValues = [
    {value: 'valor1', label: 'alerta 1'},
    {value: 'valor2', label: 'alerta 2'},
    {value: 'valor3', label: 'alerta 3'},
    {value: 'valor4', label: 'alerta 4'},
  ]

  const messageValues = [
    {value: 'valor1', label: 'mensagem 1'},
    {value: 'valor2', label: 'mensagem 2'},
    {value: 'valor3', label: 'mensagem 3'},
    {value: 'valor4', label: 'mensagem 4'},
  ]

  return (
    <div className="container">
      <h1>MessageForms.com</h1>
      <div className="row">
          <Input name="Telefone" type="tel" title="Telefone" placeholder=" (DDD) 9xxxx-xxxx"/>

          <Input  name="Nome" type="text" title="Nome" placeholder=" Nome" />

          <Select 
            options={alertValues}
            title="Alerta"
            name="Alerta"
          />
      </div>

      <div className="row">
        <Input name="Host" type="text" title="Host" placeholder=" Host" />

        <Input name="IPHost" type="number" title="IP do Host" placeholder=" XXX.XXX.XXX"/>

        <Input name="TotalAlertas" type="number" title="Total de Alertas" placeholder=" Quantidade de Alertas"/>
      </div>

      <div className="row">
      
        <Select
          options={messageValues}
          title="Selecione a mensagem"
          name="Mensagens"
        />

        <Input name="Data" type="date" title="Data" placeholder=""/>

        <Input name="Horas" type="time" title="Horas Ativo" placeholder=""/>
      </div>

      <Input className="mensagemCompleta" name="CompleteMessage" type="text" title="Mensagem completa" placeholder="Veja aqui a mensagem completa"/>

      <Button type="button" className="button">Enviar</Button>

    </div>
  )
}
