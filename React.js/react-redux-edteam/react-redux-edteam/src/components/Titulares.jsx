import React from 'react';
import {connect} from 'react-redux';

const Titulares = ({titulares, putTitular})=> (
    <section>
        <h2>Titulares</h2>
        <div className='cancha'>
            {
                titulares.map(j => (
                    <article className='titular' key={j.id}>
                        <div>
                            <img src={j.img} alt={j.name}></img>
                            <button onClick={()=> putTitular(j)}>X</button>
                        </div>
                        <p>{j.name}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    putTitular(jugador){
        dispatch({
            type: 'PUT_TITULAR',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)