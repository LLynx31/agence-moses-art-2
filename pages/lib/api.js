export const sendContactForm = async (isFullName, isEmail, isTelephone, isSecteur, isMessage) => fetch('/api/send-email', {
    method: "POST",
    body: JSON.stringify({isFullName, isEmail, isTelephone, isSecteur, isMessage}),
    headers: {
        "Content-Type": "application/json",
    },

})