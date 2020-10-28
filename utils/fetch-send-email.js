import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY =
  "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";

const sendEmail = async ({ name, email, message }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email
            }
          ],
          subject: `Consulta de ${name} desde brandovidal.com`
        }
      ],
      from: {
        email: "noreply@brandovidal.com",
        name: "Test Bot Brandovidal"
      },
      content: [
        {
          type: "text/plain",
          value: `${message}`
        }
      ]
    })
  });
};

export { sendEmail };
