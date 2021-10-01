import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import { useHistory } from "react-router-dom";
import '../page_styles/home.scss';
import '../page_styles/global.scss';
import { useState } from "react";

export function Home () {
  const history = useHistory();
  //const { rota, setRota } = useState();

   function navigate() {
     history.push('/new_host')
  //   if (rota == alert) {
      
  //   }
   }

  const templates = [
    {value: 'alert', label: 'Template de Alerta'},
    {value: 'new_host', label: 'Template novo Host'},
    {value: 'disable', label: 'Template de Desativação'},
  ]

  return (
    <div className="home">
      <Title title="MessageForms.com"/>
      <div className="templateSelect">
        <Select 
          options={templates}
          title="Templates"
          name="templates"
        />

        <Input name="Nome" type="text" title="Novo template" placeholder="Nome do novo template" />
      </div>

      <Button onClick={navigate} type="button" className="button">Entrar</Button>

    </div>
  )
}