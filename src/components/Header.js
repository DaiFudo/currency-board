//import modules
import Select from 'react-select'
import { useStore } from 'effector-react'
import { confirmAlert } from 'react-confirm-alert'

//import components
import { $currency, currencySelected, currencyAdded, currencyListReset } from 'features/currency'

//import styles
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export const Header = () => {
  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => currencyListReset(),
        },
        {
          label: 'No',
          onClick: () => null,
        },
      ],
    })
  }

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
        <button
          onClick={submit}
          className="bg-gray-300 ml-3 px-3 rounded-lg"
        >
          Delete All
        </button>
      </div>
    </div>
  )
}
