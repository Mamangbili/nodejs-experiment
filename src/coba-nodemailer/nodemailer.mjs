import nodemailer from 'nodemailer'



const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "legendaryma30@gmail.com",
      pass: "enwm fgnm ukcr afgb",
    },
})

const info = await transporter.sendMail({
    from :'"Fred Foo 👻" <raywaynita30@gmail.com>',
    to : "habilr30@gmail.com",
    subject : "testing subject",
    text : "awe",
    html : "<h1> ini coba html </h1>",
})

console.log(info)