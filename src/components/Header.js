//import modules
import React from 'react'
import Select from 'react-select'
import { useStore } from 'effector-react'

//import components
export const Header = () => {



  return (
    <div className="w-full h-16 flex items-center px-4 bg-gray-200 rounded-xl">
      <Select
        defaultValue='Currency'
        className="exchange_select"
        options={options}
        onChange={(e) =>
          setActiveCurrencySell({
            value: e.sell,
            currency: e.label,
          })
        }
      />
      <div></div>
    </div>
  )
}
