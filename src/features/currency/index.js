import { createStore, createEffect, createEvent, sample } from 'effector'

const getCurrencyFx = createEffect(async () => {
  const response = await fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
  if (!response.ok) throw response
  return response.json()
})

export const currencyAdded = createEvent()
export const currencySelected = createEvent()
const currencyPushed = createEvent()
export const currencyListReset = createEvent()

export const $currency = createStore([]).on(getCurrencyFx.doneData, (_, data) => data[0].rates)
export const $currencyList = createStore([])
export const $activeCurrency = createStore('').on(currencySelected, (_, currency) => currency)

sample({
  clock: currencyAdded,
  source: $activeCurrency,
  fn: (currency) => ({ ...currency }),
  target: currencyPushed,
})

$currencyList
  .on(currencyPushed, (list, currency) => {
    const duplicate = list.find((item) => item.value === currency.value)
    if (duplicate) return list
    if (currency) return list.concat(currency)
  })
  .reset(currencyListReset, [])

getCurrencyFx()
