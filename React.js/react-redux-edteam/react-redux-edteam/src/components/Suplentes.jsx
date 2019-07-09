import React from 'react';
import {connect} from 'react-redux';

const Suplentes = ({suplentes,putSuplente})=> (
    <section>
        <h2>Suplentes</h2>
        <div className='cancha'>
            {
                suplentes.map(j => (
                    <article className='suplente' id={j.id}>
                        <div>
                            <img src={j.img} alt={j.name}></img>
                            <button onClick={()=>putSuplente(j)}>X</button>
                        </div>
                        <p>{j.name}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    putSuplente(jugador){
        dispatch({
            type: 'PUT_SUPLENTE',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)