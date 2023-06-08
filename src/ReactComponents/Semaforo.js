
import { useState } from 'react';

function Semaforo () {
    const [clickeado1 , setClickeado1] = useState(false);
    const [clickeado2 , setClickeado2] = useState(false);
    const [clickeado3 , setClickeado3] = useState(false);



    return (
        <div className="container col-1">
            <hr className="featurette-divider border-light"></hr>
            <hr className="featurette-divider border-light"></hr>
            <hr className="featurette-divider border-light"></hr>
            <hr className="featurette-divider border-light"></hr>                
            <hr className="featurette-divider border-light"></hr>
            <div className="bg-black container sem rounded-2 m-2">
                <div className="row"><button type="button" className={`btn btn-danger rounded-circle spcs ratio ratio-1x1 ${clickeado1 && 'sombra'}`} onClick={() => {setClickeado1(!clickeado1); setClickeado2(false); setClickeado3(false)} }></button></div>
                <div className="row"><button type="button" className={`btn btn-warning rounded-circle spcs ratio ratio-1x1 ${clickeado2 && 'sombra'}`} onClick={() => {setClickeado2(!clickeado2); setClickeado1(false); setClickeado3(false)}}></button></div>
                <div className="row"><button type="button" className={`btn btn-success rounded-circle spcs ratio ratio-1x1 ${clickeado3 && 'sombra'}`} onClick={() => {setClickeado3(!clickeado3); setClickeado1(false); setClickeado2(false)}}></button></div>
            </div>
        </div>
    )
}



export default Semaforo