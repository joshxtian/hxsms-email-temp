import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import {render} from 'mjml-react';

import * as email1 from './email';
import * as form1 from './form';

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/',(req,res)=>{
  res.render('../src/index.html');
});

app.post('/send', (req,res)=>{
  const {html}  = render(email1.generate(), {validationLevel: 'soft'});
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "",
      pass: ""
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  let mailOptions = transporter.sendMail({
    from: '"Test"<joshua@hububble@gmail.com>',
    to: req.body.email,
    subject: "TEST",
    text: `TEST`,
    html: html
  });

  transporter.sendMail(mailOptions,()=>{
    console.log("sent")
  });

  console.log(req.body.email)
})

app.get('/email', (req, res) => {
  const {html}  = render(email1.generate(), {validationLevel: 'soft'});
  console.log(html);
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
