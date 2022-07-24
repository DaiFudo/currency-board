//import modules
import { useList } from "effector-react"
import { confirmAlert } from 'react-confirm-alert'

//import components
import { $currencyList, currencyDeleted } from 'features/currency'

//import styles
import 'react-confirm-alert/src/react-confirm-alert.css'

export const CurrencyField = () => {

  const submit = (index) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => currencyDeleted(index),
        },
        {
          label: 'No',
          onClick: () => null,
        },
      ],
    })
  }

  const aList = useList($currencyList, (currency, index) => (
    <div
      key={currency.currency}
      className="h-16 flex items-center justify-between mt-4  px-5  rounded-lg bg-gray-400"
    >
      <p>{currency.currency}</p>
      <div className="flex">
        <p className="mr-3">{currency.value} zł</p>
        <button onClick={() => submit(index)} className="px-3 bg-gray-500 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  ))

  return (
    <div className="max-w-full overflow-auto h-full bg-gray-300 mt-2 rounded-xl p-4">
      {aList}
    </div>
  )
}
