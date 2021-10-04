import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import '../page_styles/alert.scss';
import '../page_styles/global.scss';
import { useHistory } from "react-router-dom";
import { IpInput } from "../components/IP";
import { Phone } from "../components/Phone";
import { Message } from "../components/Message";
import { useState } from "react";
 
export function Alert () {

  const alertValues = [
    {value: 'Zabbix fora do ar', label: 'Zabbix fora do ar'},
    {value: 'DBForbix fora do ar', label: 'DBForbix fora do ar'},
    {value: 'Orabbix fora do ar', label: 'Orabbix fora do ar'},
    {value: 'Todos os Agentes fora do ar', label: 'Todos os Agentes fora do ar'},
  ]

  const messageValues = [
    {value: 'mensagem1', label: 'Olá, bom dia [nome], mensagem de alerta...'},
    {value: 'mensagem2', label: 'Olá, boa tarde [nome], mensagem de alerta...'},
    {value: 'mensagem3', label: 'Olá, boa noite [nome], mensagem de alerta...'},
  ]

  const history = useHistory();
  function back() {
    history.push('/')
  }

  const [ phone, setPhone ] = useState('');

  function phoneNumber(event: React.FormEvent) {
    setPhone(((event.target) as any).value);
  }

  const [ alert, setalert ] = useState('');

  function selectAlert(event: React.FormEvent) {
    setalert(((event.target) as any).value);
  }

  return (
    <div className="alert">
      <Title title="Template Alerta"/>
      <div className="alert-row">
          <Phone 
            name="Telefone" 
            type="text"
            value={phone} 
            onChange={(e) => phoneNumber(e)} 
            title="Telefone" 
            placeholder=" (DDD) 9xxxx-xxxx"
          />

          <Input name="Nome" type="text" title="Nome" placeholder=" Nome" />

          <Select 
            options={alertValues}
            title="Alerta"
            name="Alerta"
            value={alert}
            onChange={(e) => selectAlert(e)}
          />
      </div>

      <div className="alert-row">
        <Input name="Host" type="text" title="Host" placeholder=" Host" />

        <IpInput name="IPHost" type="text" title="IP do Host" placeholder=" XXX.XXX.XXX.XXX"/>

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

      <Message value={alert} name="CompleteMessage" title="Mensagem completa" placeholder=" Veja aqui a mensagem completa"/>

      <div className="bottom">
        <Button onClick={back} type="button" className="backbutton">Voltar</Button>
        <Button type="button" className="submitbutton">Enviar</Button>
      </div>

    </div>
  )
}
