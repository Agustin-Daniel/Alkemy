import React from 'react'
import { Header } from '../../Header/Header'
import "./Tasks.styles.css"
import { useResize } from '../../../hooks/useResize'
import { cardsData } from '../Tasks/cardsData'
import { Card } from '../../Card/Card'
import { TaskForm } from '../../TaskForm/TaskForm'

export const Tasks = () => {

  const { isPhone } = useResize()

  // const limitString = str => {
  //   if (str.length > 170)
  //     return { string: str.slice(0, 167).concat("..."), addButton: true }
  //   return { string: str, addButton: false}
  // }

  const renderAllCards = () => {
    return cardsData.map( data => <Card key={data.id}  data={data} />)
  }

  return (
    <>
      <Header />
      <main id='tasks'>
          <TaskForm />
          <section className='wrapper_list'>
            <div className='list_header'>
                <h2>Mis tareas</h2>
            </div>
            { isPhone ? (
              <div className='list phone'> {renderAllCards()} </div>
            ) : (
              <div className='list phone'> {renderAllCards()} </div>
            )}
          </section>
      </main>
    </>
  )
}
