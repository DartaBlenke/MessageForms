import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Title } from "../components/Title";
import { useHistory } from "react-router-dom";
import '../page_styles/home.scss';
import '../page_styles/global.scss';
import { useState } from "react";
import React from "react";
import axios from "axios";

export function Home () {
  const history = useHistory();
  const [ route, setRoute ] = useState('/alert');

  function selectRoute(event: React.FormEvent) {
    setRoute(((event.target) as any).value);
  }

   function navigate() {
     history.push(route)
   }

  const templates = [
    {value: '/alert', label: 'Template de Alerta'},
    {value: '/new_host', label: 'Template novo Host'},
    {value: '/disable', label: 'Template de Desativação'},
  ]

  function api() {
    axios.get('http://localhost:8080/').then(response => {
      console.log(response.data);
    })
  }

  return (
    <div className="home">
      <Title title="MessageForms.com"/>
      <div className="templateSelect">
        <Select 
          onChange={(e) => selectRoute(e) }
          options={templates}
          title="Templates"
          name="templates"
        />

        {api()}

        <Input name="Nome" type="text" title="Novo template" placeholder="Nome do novo template" />
      </div>

      <Button onClick={navigate} type="button" className="button">Entrar</Button>

    </div>
  )
}