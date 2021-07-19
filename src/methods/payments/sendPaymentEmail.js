const sgMail = require('@sendgrid/mail')

function sendPaymentEmail(email, amount) {
    amount = amount.substring(0, amount.length - 2) + "." + amount.substring(amount.length - 2);
    //sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.setApiKey("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");
    //sgMail.setApiKey("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")
    const msg = {
        to: email, // Change to your recipient
        from: 'info@synnovate.ca', // Change to your verified sender
        subject: 'Bill amount $' + amount,
        text: '. Your bill amount is ' + amount,
        html: 'This is an autogenerated email for your invoice. <br/><strong>You bill amount is ' + amount + '</strong><br/>Thank you for using Gas Dispenser App.',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = sendPaymentEmail