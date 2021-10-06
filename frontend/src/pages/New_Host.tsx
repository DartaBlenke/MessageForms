import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import { Check } from "../components/Check";
import { IpInput } from "../components/IP"
import { Phone } from "../components/Phone"
import { Called } from "../components/Called"
import '../page_styles/new_host.scss';
import '../page_styles/global.scss';
import { useHistory } from "react-router-dom";
import { Message } from "../components/Message";

export function New_Host () {
  const company_values = [
    {value: 'company1', label: 'Selecione a empresa'},
    {value: 'company2', label: 'Elgin'},
    {value: 'company3', label: 'CDF'},
    {value: 'company4', label: 'Krona'},
    {value: 'company5', label: 'Unimed'},
  ]

  const service_values = [
    {value: 'disable1', label: 'Selecione o serviço'},
    {value: 'disable2', label: 'Monitoramento Zabbix'},
    {value: 'disable3', label: 'Monitoramento DBForbix'},
    {value: 'disable4', label: 'Monitoramento Orabbix'},
    {value: 'disable5', label: 'Todos os serviços'},
  ]

  const message_values = [
    {value: 'mensagem1', label: 'Escolha a sua mensagem'},
    {value: 'mensagem2', label: 'Olá, bom dia [nome], mensagem de alerta...'},
    {value: 'mensagem3', label: 'Olá, boa tarde [nome], mensagem de alerta...'},
    {value: 'mensagem4', label: 'Olá, boa noite [nome], mensagem de alerta...'},
  ]

  const history = useHistory();
  function back() {
    history.push('/')
  }

  return (
    <div className="new_host">
      <div className="header">
        <Title title="Template Novo Host"/>
      </div>
      <div className="new-row">
          <Phone name="Telefone" type="text" title="Telefone" placeholder=" (DDD) 9xxxx-xxxx" />

          <Input name="Name" type="text" title="Nome" placeholder=" Nome" />

          <Select 
            options={company_values}
            title="Empresas"
            name="empresas"
          />
      </div>

      <div className="new-row">
        <Input name="Host" type="text" title="Host" placeholder=" Host" />

        <IpInput name="IPHost" type="text" title="IP do Host" placeholder=" XXX.XXX.XXX.XXX" />

        <Select 
            options={service_values}
            title="Serviços"
            name="servicos"
          />
      </div>

      <div className="new-row">
        <Select
          options={message_values}
          title="Selecione a mensagem"
          name="Mensagens"
        />

        <Input name="criacaoData" type="date" title="Data de Criação" placeholder="" />

        <Called name="chamadoNumero" type="text" title="Chamado" placeholder="Número do chamado" />
      </div>

      <div className="checkBox">
        <Check id="needAdd" name="check" type="radio" title="Necessário adicionar ao Zabbix" placeholder=""/>

        <Check id="added" name="check" type="radio" title="Foi adicionado ao Zabbix" placeholder=""/>

        <Check id="wasAdd" name="check" type="radio" title="Já está no Zabbix" placeholder=""/>
      </div>
      
      <Message name="CompleteMessage" title="Mensagem completa" placeholder="Veja aqui a mensagem completa"/>
      
      <div className="bottom">
        <Button onClick={back} type="button" className="backbutton">Voltar</Button>
        <Button type="button" className="submitbutton">Enviar</Button>
      </div>

    </div>

  )
}