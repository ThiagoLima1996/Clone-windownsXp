import './Clock.css'
import { useState, useEffect } from 'react';

const Clock = () => {
    // chamado do relogio- obs: não retirar a formatação da hora aqui se não assim que abrir a pagina os segundos vão aparecer
    const [hora, setHora] = useState(new Date().toLocaleTimeString(
        "pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
    }))
    // função para poder atualizar o relogia automaticamento sem precisar usar f5
    function clock() {
        setHora(new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        }))
    }
    //função que atualiza a hora no estilo react.js
    useEffect(() => {
        setInterval(() => {
          clock()
        }, 1000)
      })

    return (
        <div className="clock" id='clock'>
            {hora}
        </div>
    );
}

export default Clock;