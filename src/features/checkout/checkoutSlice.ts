import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type CheckoutForm = {
  fullName: string
  address: string
  city: string
  zipCode: string
  cardNumber: string
  expirationDate: string
  cvv: string
}

export type CheckoutField = keyof CheckoutForm

type CheckoutErrors = Partial<Record<CheckoutField, string>>

type CheckoutState = {
  form: CheckoutForm
  errors: CheckoutErrors
}

const initialForm: CheckoutForm = {
  fullName: '',
  address: '',
  city: '',
  zipCode: '',
  cardNumber: '',
  expirationDate: '',
  cvv: '',
}

const fieldLabels: Record<CheckoutField, string> = {
  fullName: 'Full name',
  address: 'Address',
  city: 'City',
  zipCode: 'ZIP code',
  cardNumber: 'Card number',
  expirationDate: 'Expiration date',
  cvv: 'CVV',
}

const initialState: CheckoutState = {
  form: initialForm,
  errors: {},
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateCheckoutField: (
      state,
      action: PayloadAction<{ field: CheckoutField; value: string }>,
    ) => {
      state.form[action.payload.field] = action.payload.value
      delete state.errors[action.payload.field]
    },
    validateCheckoutForm: (state) => {
      const errors: CheckoutErrors = {}
      const fields = Object.keys(fieldLabels) as CheckoutField[]

      fields.forEach((field) => {
        if (!state.form[field].trim()) {
          errors[field] = `${fieldLabels[field]} is required`
        }
      })

      state.errors = errors
    },
  },
})

export const { updateCheckoutField, validateCheckoutForm } =
  checkoutSlice.actions

export default checkoutSlice.reducer
