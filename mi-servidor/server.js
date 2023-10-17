const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors'); // Importa el módulo cors

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8100' // Reemplaza esto con el origen correcto de tu aplicación Ionic
}));


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'martynpipe0@gmail.com',
    pass: 'Patogallina_9',
    clientId: '947522121995-dr0vgh2rtd6b15fq2gm6hk8bbrmec0h8.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04LMrxb7BvVn7CgYIARAAGAQSNwF-L9Irt3vved4BSuH80GjOPbO5E9ShtNUkbzphdGQ5gF2RpMdEQBhcofXEE1CaxIkKANt-wjs'
  }
});

app.post('/correo', (req, res) => {
  const { destinatario, asunto, cuerpo } = req.body;

  const mailOptions = {
    from: 'martynpipe0@gmail.com',
    to: destinatario,
    subject: asunto,
    text: cuerpo
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error " + error);
      res.status(500).json({ mensaje: 'Error al enviar el correo' });
    } else {
      console.log("Correo enviado: " + info.response);
      res.json({ mensaje: 'Correo enviado con éxito' });
    }
  });
});
