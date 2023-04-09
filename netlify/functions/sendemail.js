const sanitizeHtml = require('sanitize-html');
const nodemailer = require('nodemailer');
const {google} = require('googleapis')

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

    const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
    oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});
    console.log('attempting to send email');

    let { from, subject, message } = JSON.parse(event.body);

    message = sanitizeHtml(message)

    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.USER,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken,
                },
            });

            const mailOptions = {
                from,
                to: process.env.EMAIL,
                subject,
                text: message,
            };

            await transporter.sendMail(mailOptions);

            console.log('email sent');
            
            return {
                statusCode: 200,
            };
        } catch(e) {
            console.log('could not send email', e);
            return {
                statusCode: 500,
            };
        }
    }

    let result = await sendMail()
    return result;
}