import React from 'react'
import { useForm } from 'react-hook-form'
import './style/inputSearch.css'

const InputSearch = () => {

  const { handleSubmit, register, reset } = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <div className='input__container'>
      <form onSubmit={handleSubmit(submit)} className='form-home'>
        <input type="text" {...register('searchText')} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default InputSearch