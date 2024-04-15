import '../styles/style-module.css';
import { useState } from 'react';

export function Text() {
        const [nome, setNome] = useState(' ');
        const [nota1, setNota1] = useState(0);
        const [nota2, setNota2] = useState(0);
        const [media, setMedia] = useState(null);
      
        const calcularMedia = () => {

          const num1 = parseFloat(nota1);
          const num2 = parseFloat(nota2);


          if (!isNaN(num1) && !isNaN(num2)) {
            const resultadoMedia = (num1 + num2) / 2;
            setMedia(resultadoMedia);
          } else {
            setMedia(null);
          }
        };

    return(
        <div>
            <h2 className='title'>Sistema de Notas</h2>
            <div className="container-text">
                <label htmlFor="name">Nome: </label>
                <input type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                id="name"
                className='entrada'/>
            </div>
            <div className="container-text">
                <label htmlFor="notaum">Nota 1: </label>
                <input type="text"
                value={nota1}
                onChange={(event) => setNota1(event.target.value)}
                id="notaum"
                className='entrada'/>
            </div>
            <div className="container-text">
                <label htmlFor="notadois">Nota 2: </label>
                <input type="text"
                value={nota2}
                onChange={(event) => setNota2(event.target.value)}
                id="notadois" 
                className='entrada'/>
            </div>

            <button className="btn" onClick={calcularMedia}>Calcular</button>

            <div className="container-text">
                <label>Média Final: </label>
                <input type="text"
                value={media}
                onChange={(event) => setMedia(event.target.value)}
                id="notadois" 
                className='entrada'/>
            </div>
        </div> 
    );
}
