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
  submitStatus: 'idle' | 'success'
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
  submitStatus: 'idle',
}

function getRequiredFieldErrors(form: CheckoutForm) {
  const errors: CheckoutErrors = {}
  const fields = Object.keys(fieldLabels) as CheckoutField[]

  fields.forEach((field) => {
    if (!form[field].trim()) {
      errors[field] = `${fieldLabels[field]} is required`
    }
  })

  return errors
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
      state.submitStatus = 'idle'
    },
    validateCheckoutForm: (state) => {
      state.errors = getRequiredFieldErrors(state.form)
    },
    submitCheckout: (state) => {
      const errors = getRequiredFieldErrors(state.form)

      state.errors = errors
      state.submitStatus = Object.keys(errors).length === 0 ? 'success' : 'idle'
    },
  },
})

export const { submitCheckout, updateCheckoutField, validateCheckoutForm } =
  checkoutSlice.actions

export default checkoutSlice.reducer
