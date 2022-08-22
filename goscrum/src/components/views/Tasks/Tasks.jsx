import React from 'react'
import { Header } from '../../Header/Header'
import "./Tasks.styles.css"

export const Tasks = () => {
  return (
    <>
      <Header />
      <main id='tasks'>
          <section className='wrapper_list'>
            <div className='list_header'>
                <h2>Mis tareas</h2>
            </div>
            <div className='list'>
                <div className='card'>
                  <div className='close'>x</div>
                  <h3>Tarea 1</h3>
                  <h6>24/1/2022 15:54 hs.</h6>
                  <h5>Agustin Messina!</h5>
                  <button type='button'>Nueva</button>
                  <button type='button'>Alta</button>
                  <p>Description fake</p>
                </div>
              </div>
          </section>
      </main>
    </>
  )
}
