const DOMPurify = require('dompurify');
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {

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

    let { from, subject, message } = JSON.parse(event.body);

    message = DOMPurify.sanitize(message);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.email,
        pass: process.env.password,
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
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
    };
    } catch (error) {
    return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to send email' }),
    };
    }

};