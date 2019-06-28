const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'myriam.mansouri@gmail.com',
        subject: 'Thanks for joining in!',
        html: `Welcome to Mitodo, ${name}. Let me know how you get along with the app.`,
        text: `Welcome to Mitodo, ${name}. Let me know how you get along with the app.`
      };
      
    sgMail.send(msg);
}

const sendCancelationEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'myriam.mansouri@gmail.com',
        subject: 'Sad to see you go',
        html: `Sad to see you go ${name}. We hope to see you soon.`,
        text: `Sad to see you go ${name}. We hope to see you soon.`
      };
      
    sgMail.send(msg);
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}