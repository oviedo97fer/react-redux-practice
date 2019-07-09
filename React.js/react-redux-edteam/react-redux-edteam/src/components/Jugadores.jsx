import React from 'react';
import {connect} from 'react-redux';


const Jugadores = ({jugadores, addTitular, addSuplente}) => (
    <section>
        <h2>Jugadores</h2>
        <div className='contenedor-jugadores'>
            {jugadores.map(j=>(
                <article className='jugador' key={j.id}>
                <img src={j.img} alt={j.name}/>
                <h3>{j.name}</h3>
                <div>
                    <button onClick={()=> addTitular(j)}>Titular</button>
                    <button onClick={() => addSuplente(j)}>Suplente</button>
                </div>
                </article>
            ))}
        </div>
    </section>
);

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
    addTitular(jugador){
        dispatch({
            type: 'ADD_TITULAR',
            jugador
        })
    },
    addSuplente(jugador){
        dispatch({
            type: 'ADD_SUPLENTE',
            jugador
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);