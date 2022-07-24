//import modules
import React from 'react'

//import components
import { CurrencyField } from 'components/CurrencyField'
import { Header } from 'components/Header'

export const Home = () => {
  return (
    <div className='w-[95%] h-[95%] flex flex-col'>
        <Header />
        <CurrencyField />
    </div>
  )
}
