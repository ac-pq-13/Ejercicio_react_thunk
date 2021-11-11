import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { list } from '../../actions/persons/list'
import { list2 } from '../../actions/pets/list2'

const Persons = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(list())
    dispatch(list2())
  }, [dispatch])

  const person = useSelector((store) => store.person)
  const pet = useSelector((store)=> store.pet)
  return (
    <>
      <div>
      Persons:
      <ul>
        {!person.loading && person.data.length > 0 ?
          person.data.map((d) => (
            <li>{`${d.nombres} ${d.apellidos}`}</li>
          ))
        : <h4>Loading ..!</h4>}
      </ul>
      </div>
        <div>
          Mascotas:
          <ul>
        {!pet.loading && pet.data.length > 0 ?
          pet.data.map((p) => (
            <li>{`${p}`}</li>
          ))
        : <h4>Loading ..!</h4>}
        </ul>
        </div>
    </>
  )
}

export default Persons
