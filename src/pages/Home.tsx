import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import '../page_styles/home.scss';
import '../page_styles/global.scss';

export function Home () {
  const templates = [
    {value: 'template-alert', label: 'Template de Alerta'},
    {value: 'template-host', label: 'Template novo Host'},
    {value: 'template-disable', label: 'Template de Desativação'},
  ]

  return (
    <div className="container">
      <Title title="MessageForms.com"/>
      <div className="row">
        <Select 
          options={templates}
          title="Templates"
          name="templates"
        />

        <Input  name="Nome" type="text" title="Novo template" placeholder="Nome do novo template" />
      </div>

      <Button type="button" className="button">Entrar</Button>

    </div>
  )
}