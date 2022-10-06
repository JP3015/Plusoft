import React from 'react'
import emptyBox from '../images/empty-box.png'

export default function NotFound() {
    return (
        <div className="page">
            <section>
                <div className='notFound-page'>
                    <img src={emptyBox} alt='empty box' />
                    <h1>Oops! Essa página não foi encontrada.</h1>
                    <h3>Parece que nada foi encontrado aqui.</h3>
                </div>
            </section>
        </div>
    )
}
