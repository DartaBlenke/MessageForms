import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import { IpInput } from "../components/IP";
import { Phone } from "../components/Phone";
import { Message } from "../components/Message";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import '../page_styles/alert.scss';
import '../page_styles/global.scss';
 
export function Alert () {

  const alert_values = [
    {value: 'Zabbix fora do ar', label: 'Zabbix fora do ar'},
    {value: 'DBForbix fora do ar', label: 'DBForbix fora do ar'},
    {value: 'Orabbix fora do ar', label: 'Orabbix fora do ar'},
    {value: 'Todos os Agentes fora do ar', label: 'Todos os Agentes fora do ar'},
  ]

  const company_values = [
    {value: 'Unimed', label: 'Unimed'},
    {value: 'Elgin', label: 'Elgin'},
    {value: 'CDF', label: 'CDF'},
    {value: 'Krona', label: 'Krona'},
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

          <Input name="Name" type="text" title="Nome" placeholder=" Nome" />

          <Select 
            options={alert_values}
            title="Alerta"
            name="Alert"
            value={alert}
            onChange={(e) => selectAlert(e)}
          />
      </div>

      <div className="alert-row">
        <Input name="Host" type="text" title="Host" placeholder=" Host" />

        <IpInput name="IPHost" type="text" title="IP do Host" placeholder=" XXX.XXX.XXX.XXX"/>

        <Select 
          options={company_values}
          title="Empresas"
          name="Company"
        />
      </div>

      <div className="alert-row">
        
        <Input name="AllAlerts" type="number" title="Total de Alertas" placeholder=" Quantidade de Alertas"/>
        
        <Input name="DateAlert" type="date" title="Data do Alerta" placeholder=""/>

        <Input name="DateSolution" type="date" title="Data de Solução" placeholder=""/>
      </div>

      <Message value={alert} name="CompleteMessage" title="Mensagem completa" placeholder=" Veja aqui a mensagem completa"/>

      <div className="bottom">
        <Button onClick={back} type="button" className="backbutton">Voltar</Button>
        <Button type="button" className="submitbutton">Enviar</Button>
      </div>

    </div>
  )
}
