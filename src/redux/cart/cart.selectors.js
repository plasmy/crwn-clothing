import { createSelector } from 'reselect'

const selectCart = state => state.selectCart

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCarItemsCount = createSelector(
    [selectCartItems], cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)