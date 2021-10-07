import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import '../page_styles/disable.scss';
import '../page_styles/global.scss';
import { useHistory } from "react-router-dom";
import { Called } from "../components/Called";
import { IpInput } from "../components/IP";
import { Phone } from "../components/Phone";
import { Message } from "../components/Message";

export function Disable() {
  const company_values = [
    {value: 'company1', label: 'Unimed'},
    {value: 'company2', label: 'Elgin'},
    {value: 'company3', label: 'CDF'},
    {value: 'company4', label: 'Krona'},
  ]

  const disable_values = [
    {value: 'disable1', label: 'Host desativado do monitormaneto conforme solicitação do cliente'},
    {value: 'disable2', label: 'Monitoramento migrado'},
  ]

  const message_values = [
    {value: 'mensagem1', label: 'Olá, bom dia [nome], mensagem de alerta...'},
    {value: 'mensagem2', label: 'Olá, boa tarde [nome], mensagem de alerta...'},
    {value: 'mensagem3', label: 'Olá, boa noite [nome], mensagem de alerta...'},
  ]

  const history = useHistory();
  function back() {
    history.push('/')
  }

  return (
    <div className="disable">
      <Title title="Template Desativação"/>
      <div className="disable-row">
          <Phone name="Telefone" type="tel" title="Telefone" placeholder=" (DDD) 9xxxx-xxxx"/>

          <Input name="Name" type="text" title="Nome" placeholder=" Nome" />

          <Select 
            options={company_values}
            title="Empresas"
            name="empresas"
          />
      </div>

      <div className="disable-row">
        <Input name="Host" type="text" title="Host" placeholder=" Host" />

        <IpInput name="IPHost" type="text" title="IP do Host" placeholder=" XXX.XXX.XXX.XXX"/>

        <Select 
            options={disable_values}
            title="Movito da desativação"
            name="disable"
          />
      </div>

      <div className="disable-row">
      
        <Select
          options={message_values}
          title="Selecione a mensagem"
          name="Mensagens"
        />

        <Input name="DisableDate" type="date" title="Data de Desativação" placeholder=""/>

        <Called name="Called" type="text" title="Chamado" placeholder="Número do chamado"/>
      </div>

      <Message name="CompleteMessage" title="Mensagem completa" placeholder="Veja aqui a mensagem completa"/>

      <div className="bottom">
        <Button onClick={back} type="button" className="backbutton">Voltar</Button>
        <Button type="button" className="submitbutton">Enviar</Button>
      </div>

    </div>
  )
}