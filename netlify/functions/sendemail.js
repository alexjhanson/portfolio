const sanitizeHtml = require('sanitize-html');
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {

    console.log('sendmail endpoint');

    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      };

    if (event.httpMethod === 'OPTIONS') {
        // Handle preflight request
        headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    console.log('attempting to send email');

    let { from, subject, message } = JSON.parse(event.body);

    message = sanitizeHtml(message)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from,
        to: process.env.email,
        subject,
        text: message,
    };
    
    try {
    await transporter.sendMail(mailOptions);
    console.log('email sent');
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
    };
    } catch (error) {
        console.log('could not send email', error);
    return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to send email' }),
    };
    }

};