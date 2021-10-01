import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import '../page_styles/disable.scss';
import '../page_styles/global.scss';

export function Disable() {
  const companyValues = [
    {value: 'company1', label: 'Unimed'},
    {value: 'company2', label: 'Elgin'},
    {value: 'company3', label: 'CDF'},
    {value: 'company4', label: 'Krona'},
  ]

  const disableValues = [
    {value: 'disable1', label: 'Host desativado do monitormaneto conforme solicitação do cliente'},
    {value: 'disable2', label: 'Monitoramento migrado'},
  ]

  const messageValues = [
    {value: 'mensagem1', label: 'Olá, bom dia [nome], mensagem de alerta...'},
    {value: 'mensagem2', label: 'Olá, boa tarde [nome], mensagem de alerta...'},
    {value: 'mensagem3', label: 'Olá, boa noite [nome], mensagem de alerta...'},
  ]

  return (
    <div className="disable">
      <Title title="Template Desativação"/>
      <div className="disable-row">
          <Input name="Telefone" type="tel" title="Telefone" placeholder=" (DDD) 9xxxx-xxxx"/>

          <Input name="Nome" type="text" title="Nome" placeholder=" Nome" />

          <Select 
            options={companyValues}
            title="Empresas"
            name="empresas"
          />
      </div>

      <div className="disable-row">
        <Input name="Host" type="text" title="Host" placeholder=" Host" />

        <Input name="IPHost" type="number" title="IP do Host" placeholder=" XXX.XXX.XXX.XXX"/>

        <Select 
            options={disableValues}
            title="Movito da desativação"
            name="desativacao"
          />
      </div>

      <div className="disable-row">
      
        <Select
          options={messageValues}
          title="Selecione a mensagem"
          name="Mensagens"
        />

        <Input name="desativacaoData" type="date" title="Data de Desativação" placeholder=""/>

        <Input name="chamadoNumero" type="text" title="Chamado" placeholder="Número do chamado"/>
      </div>

      <Input className="completeMessage" name="CompleteMessage" type="text" title="Mensagem completa" placeholder="Veja aqui a mensagem completa"/>

      <div className="bottom">
        <Button type="button" className="backbutton">Voltar</Button>
        <Button type="button" className="submitbutton">Enviar</Button>
      </div>

    </div>
  )
}