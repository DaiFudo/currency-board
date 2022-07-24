//import modules
import { createStore, createEffect, createEvent, sample } from 'effector'

//delete logic
const dropIndex = (list, index) => list.slice(0, index).concat(list.slice(index + 1))

//get currencies
const getCurrencyFx = createEffect(async () => {
  const response = await fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
  if (!response.ok) throw response //if error
  return response.json() //if ok
})

//events for currency list
export const currencyAdded = createEvent() //Add
export const currencyListReset = createEvent() //Remove All
export const currencyDeleted = createEvent() //Delete one
const itemAddedToArray = createEvent() //Add currency to array

//events for select
export const currencySelected = createEvent()

//all currencies from API
export const $currency = createStore([]).on(getCurrencyFx.doneData, (_, data) => data[0].rates)
//favorite currencies list
export const $currencyList = createStore([])
//active currency from select
export const $activeCurrency = createStore('').on(currencySelected, (_, currency) => currency)

sample({
  clock: currencyAdded, //when Add button pressed
  source: $activeCurrency, //get active currency from select
  fn: (currency) => ({ ...currency }), //return currency (currency name - currency, currency price - value)
  target: itemAddedToArray,
})

$currencyList
  .on(itemAddedToArray, (list, currency) => {
    //add currency to list
    const duplicate = list.find((item) => item.value === currency.value) //duplicate check
    if (duplicate) return list //if fuplicate true
    if (currency.currency) return list.concat(currency) //if item empty
  })
  .on(currencyDeleted, dropIndex) //remove one item from list
  .reset(currencyListReset, []) //remove all items from list


getCurrencyFx()
