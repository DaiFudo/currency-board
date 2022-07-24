//import modules
import Select from 'react-select'
import { useStore } from 'effector-react'

//import components
import { $currency, currencySelected, currencyAdded, currencyListReset } from 'features/currency'

export const Header = () => {
  const currency = useStore($currency)

  const currencyList = currency.map((data) => {
    return {
      value: data.currency,
      label: data.currency,
      price: data.mid,
    }
  })



  return (
    <div className="w-full h-16 flex items-center justify-between px-4 bg-gray-200 rounded-xl">
      <div className="flex">
        <Select
          placeholder="Currency..."
          options={currencyList}
          onChange={(e) =>
            currencySelected({
              value: e.price,
              currency: e.label,
            })
          }
        />
        <button onClick={() => currencyAdded()} className="bg-gray-300 ml-3 px-3 rounded-lg">
          Add
        </button>
      </div>
      <div>
        <button onClick={() => currencyListReset()} className="bg-gray-300 ml-3 px-3 rounded-lg">
          Delete All
        </button>
      </div>
    </div>
  )
}
