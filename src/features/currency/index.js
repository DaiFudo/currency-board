import { createStore, createEffect, createEvent } from "effector"



const getCurrencyFx = createEffect(async () => {
    const response = await fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
    if (!response.ok) throw response
    return response.json()
})

export const $currency = createStore([])
    .on(getCurrencyFx.doneData, (_, data) => data)

export const currencyAdded = createEvent()

getCurrencyFx()
