import { useEffect, useState } from 'react'
import { Header } from '../../Header/Header'
import "./Tasks.styles.css"
import { useResize } from '../../../hooks/useResize'
import { Card } from '../../Card/Card'
import { TaskForm } from '../../TaskForm/TaskForm'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import debounce from 'lodash.debounce'

const { REACT_APP_APPI_ENDPOINT } = process.env

export const Tasks = () => {


  const [list, setList] = useState(null)
  const [renderList, setRenderList] = useState(null)
  const [tasksfromWho, setTasksfromWho] = useState("ALL")
  const [search, setSearch] = useState("")
  const [loadding, setLoadding] = useState(false)
  const { isPhone } = useResize()

  useEffect(() => {
    setLoadding(true);
    fetch(`${REACT_APP_APPI_ENDPOINT}task${tasksfromWho === "ME" ? "/me" : ""}`, {
      headers: {
          "Content-Type": "application/json",
          "Authorization" : "Bearer " + localStorage.getItem("token")
      },
  })
  .then(response  => response.json())
  .then(data => {
    setList(data.result)
    setRenderList(data.result)
    setTimeout(() => {
      setLoadding(false)
    }, 3000)
  })
}, [tasksfromWho])


  useEffect(() => {
    if (search) {
      setRenderList(list.filter(data => data.title.startsWith(search)))
    } else {
      setRenderList(list)
    }
}, [search, list])


  const renderAllCards = () => {
    return renderList?.map( data => <Card key={data._id}  data={data} />)
  }

  const renderColumnCards = (text) => {
    return renderList?.filter(data => data.status === text)
    .map( data => <Card key={data._id}  data={data} />)
  }


  const handleChangeImportance = (event) =>{
    if (event.currentTarget.value === "ALL") {
      setRenderList(list)
    } else {
      setRenderList(list.filter(data => data.importance === event.currentTarget.value))
    }
  }

  const handleSearch = debounce((event) => {
    setSearch(event?.target?.value)
  }, 1000)

  return (
    <>
      <Header />
      <main id='tasks'>
          <TaskForm />
          <section className='wrapper_list'>
            <div className='list_header'>
                <h2>Mis tareas</h2>
            </div>
            <div className="filters">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={(event) => setTasksfromWho(event.currentTarget.value)}
              >
                <FormControlLabel
                  value="ALL"
                  control={<Radio />}
                  label="Todas"
                />
                <FormControlLabel
                  value="ME"
                  control={<Radio />}
                  label="Mis tareas"
                />
              </RadioGroup>
            </FormControl>
            <div className="search">
              <input
                type="text"
                placeholder="Buscar por título..."
                onChange={handleSearch}
              />
            </div>
            <select name="importance" onChange={handleChangeImportance}>
              <option value="">Seleccionar una prioridad</option>
              <option value="ALL">Todas</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </select>
          </div>
            { isPhone ? (

              !renderList?.length ? <div>No hay tareas creadas</div> : 

              loadding ? <><Skeleton height={90} /><Skeleton height={90} /><Skeleton height={90} /></> :

              <div className='list phone'> {renderAllCards()} </div>

            ) : (

              <div className='list_goup'>
                {!renderList?.length ? <div>No hay tareas creadas</div> :
                
                loadding ? <><Skeleton height={90} /><Skeleton height={90} /><Skeleton height={90} /></> :

                <>
                <div className='list'>
                  <h4>Nuevas</h4>
                  {renderColumnCards("NEW")}
                </div>
                <div className='list'>
                  <h4>En proceso</h4>
                  {renderColumnCards("IN PROGRESS")}
                </div>
                <div className='list'>
                  <h4>Finalizadas</h4>
                  {renderColumnCards("FINISHED")}
                </div>
                </>
                }

              </div>
            )}
          </section>
      </main>
    </>
  )
}
