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
    user: 'service.duocexpress@gmail.com',
    pass: 'Martinysuviolin',
    clientId: '947522121995-10lgaemnvok3foupnq6qqm0l5amne948.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04NBPfa9e1roWCgYIARAAGAQSNwF-L9Ir5yVD-jEo7hV-GBNAUUPWFvSz80SqJRjHKsZ82bfb8Ji9P30M1rUMHw5YX_ELr7AeeaE'
  }
});

app.post('/correo', (req, res) => {
  const { destinatario, asunto, cuerpo } = req.body;

  const mailOptions = {
    from: 'service.duocexpress@gmail.com',
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
