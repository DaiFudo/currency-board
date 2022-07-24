//import modules
import { useList } from "effector-react"

//import components
import { $currencyList, currencyDeleted } from 'features/currency'

export const CurrencyField = () => {

  const aList = useList($currencyList, (currency, index) => (
    <div
      key={currency.currency}
      className="h-16 flex items-center justify-between mt-4  px-5  rounded-lg bg-gray-400"
    >
      <p>{currency.currency}</p>
      <div className="flex">
        <p className="mr-3">{currency.value} zł</p>
        <button onClick={() => currencyDeleted(index)} className="px-3 bg-gray-500 rounded-lg">
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
