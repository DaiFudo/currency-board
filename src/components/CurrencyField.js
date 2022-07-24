import React from 'react'

export const CurrencyField = () => {
  const a = ['asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd']

  const aList = a.map((item) => <div className="h-16 bg-black">{item}</div>)

  return (
    <div className="max-w-full overflow-auto h-full bg-gray-300 mt-2 rounded-xl grid grid-cols-1 p-4 gap-4">
      {aList}
    </div>
  )
}
