import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import '../page_styles/new_host.scss';
import '../page_styles/global.scss';
import { Check } from "../components/Check";

export function New_Host () {
  const company_values = [
    {value: 'company1', label: 'Unimed'},
    {value: 'company2', label: 'Elgin'},
    {value: 'company3', label: 'CDF'},
    {value: 'company4', label: 'Krona'},
  ]

  const service_values = [
    {value: 'disable1', label: 'Monitoramento Zabbix'},
    {value: 'disable2', label: 'Monitoramento DBForbix'},
    {value: 'disable3', label: 'Monitoramento Orabbix'},
    {value: 'disable4', label: 'Todos os serviços'},
  ]

  const message_values = [
    {value: 'mensagem1', label: 'Olá, bom dia [nome], mensagem de alerta...'},
    {value: 'mensagem2', label: 'Olá, boa tarde [nome], mensagem de alerta...'},
    {value: 'mensagem3', label: 'Olá, boa noite [nome], mensagem de alerta...'},
  ]

  return (
    <div className="container">
      <Title title="Template Novo Host"/>
      <div className="row">
          <Input name="Telefone" type="tel" title="Telefone" placeholder=" (DDD) 9xxxx-xxxx"/>

          <Input  name="Nome" type="text" title="Nome" placeholder=" Nome" />

          <Select 
            options={company_values}
            title="Empresas"
            name="empresas"
          />
      </div>

      <div className="row">
        <Input name="Host" type="text" title="Host" placeholder=" Host" />

        <Input name="IPHost" type="number" title="IP do Host" placeholder=" XXX.XXX.XXX.XXX"/>

        <Select 
            options={service_values}
            title="Serviços"
            name="servicos"
          />
      </div>

      <div className="row">
  
        <Select
          options={message_values}
          title="Selecione a mensagem"
          name="Mensagens"
        />

        <Input name="criacaoData" type="date" title="Data de Criação" placeholder=""/>

        <Input name="chamadoNumero" type="text" title="Chamado" placeholder="Número do chamado"/>
      </div>

      <div className="checkBox">
  
        <Check name="zabbixAdd" type="checkbox" title="Necessário adicionar ao Zabbix" placeholder=""/>

        <Check name="zabbixFeito" type="checkbox" title="Foi adicionado ao Zabbix" placeholder=""/>

        <Check name="zabbixOk" type="checkbox" title="Já está no Zabbix" placeholder=""/>
      </div>
      

      <Input className="competeMessage" name="CompleteMessage" type="text" title="Mensagem completa" placeholder="Veja aqui a mensagem completa"/>

      <Button type="button" className="button">Enviar</Button>

    </div>

    
  )
}