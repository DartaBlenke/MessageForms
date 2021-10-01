import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import '../page_styles/alert.scss';
import '../page_styles/global.scss';
 
export function Alert () {
  const alertValues = [
    {value: 'alerta1', label: 'Alerta de Zabbix fora do ar'},
    {value: 'alerta2', label: 'Alerta de DBForbix fora do ar'},
    {value: 'alerta3', label: 'Alerta de Orabbix fora do ar'},
    {value: 'alerta4', label: 'Alerta de todos os Agentes fora do ar'},
  ]

  const messageValues = [
    {value: 'mensagem1', label: 'Olá, bom dia [nome], mensagem de alerta...'},
    {value: 'mensagem2', label: 'Olá, boa tarde [nome], mensagem de alerta...'},
    {value: 'mensagem3', label: 'Olá, boa noite [nome], mensagem de alerta...'},
  ]

  return (
    <div className="alert">
      <Title title="Template Alerta"/>
      <div className="alert-row">
          <Input name="Telefone" type="tel" title="Telefone" placeholder=" (DDD) 9xxxx-xxxx"/>

          <Input name="Nome" type="text" title="Nome" placeholder=" Nome" />

          <Select 
            options={alertValues}
            title="Alerta"
            name="Alerta"
          />
      </div>

      <div className="alert-row">
        <Input name="Host" type="text" title="Host" placeholder=" Host" />

        <Input name="IPHost" type="number" title="IP do Host" placeholder=" XXX.XXX.XXX.XXX"/>

        <Input name="TotalAlertas" type="number" title="Total de Alertas" placeholder=" Quantidade de Alertas"/>
      </div>

      <div className="alert-row">
      
        <Select
          options={messageValues}
          title="Selecione a mensagem"
          name="Mensagens"
        />

        <Input name="Data" type="date" title="Data do Alerta" placeholder=""/>

        <Input name="DataSolucao" type="datetime-local" title="Data de Solução" placeholder=""/>
      </div>

      <Input className="completeMessage" name="CompleteMessage" type="text" title="Mensagem completa" placeholder="Veja aqui a mensagem completa"/>

      <div className="bottom">
        <Button type="button" className="backbutton">Voltar</Button>
        <Button type="button" className="submitbutton">Enviar</Button>
      </div>

    </div>
  )
}
