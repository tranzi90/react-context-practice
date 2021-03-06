import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
            label="Buy Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={price * 100}
            panelLabel="Buy Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
