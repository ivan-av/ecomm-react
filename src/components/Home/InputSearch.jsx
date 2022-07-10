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
        <input className='form-input__home' placeholder='What are you looking for?' type="text" {...register('searchText')} />
        <button className='form-button__home'><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  )
}

export default InputSearch