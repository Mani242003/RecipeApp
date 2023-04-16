import {configureStore,combineReducers} from "@reduxjs/toolkit"

import mealReducers from '../slices/meals'

const reducer=combineReducers(
    {
        meals:mealReducers,
    }
)

export const store=configureStore(
    {
        reducer,
    }
)

