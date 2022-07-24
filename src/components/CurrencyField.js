import { useList } from "effector-react"

import { $currencyList } from 'features/currency'

export const CurrencyField = () => {

  const aList = useList($currencyList, (currency) => (
    <div
      key={currency.label}
      className="h-16 flex items-center justify-between mt-4  px-5  rounded-lg bg-gray-400"
    >
      <p>{currency.currency}</p>
      <p>{currency.value} zł</p>
    </div>
  ))

  return (
    <div className="max-w-full overflow-auto h-full bg-gray-300 mt-2 rounded-xl p-4">
      {aList}
    </div>
  )
}
