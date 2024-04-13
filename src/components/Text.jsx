import '../styles/style-module.css';
import { Button } from './Button.jsx';

export function Text() {
    return(
        <div>
            <h2 className='title'>Sistema de Notas</h2>
            <div className="container-text">
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" className='entrada'/>
            </div>
            <div className="container-text">
                <label htmlFor="notaum">Nota 1: </label>
                <input type="text" id="notaum" className='entrada'/>
            </div>
            <div className="container-text">
                <label htmlFor="notadois">Nota 2: </label>
                <input type="text" id="notadois" className='entrada'/>
            </div>

            <Button/>
        </div> 
    );
}
