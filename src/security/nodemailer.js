import nodemailer from "nodemailer"
export const gerarTokenSenha = async () => {
    let token = Math.random().toString(16)
        token = Math.random().toString(16)
  

    return token
}


// Crie um objeto transportador
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use false para STARTTLS; true para SSL na porta 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  }
});

// Configure o objeto mailOptions


// Envie o email
export async function enviarEmail(texto){
    
    const mailOptions = {
  from: 'clara124g@email.com',
  to: 'm.claraoliveiraramos@gmail.com',
  subject: 'Enviando Email usando Node.js',
  text: texto
};

console.log("enviando")
   const email =  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Erro:', error);
  } else {
    console.log('Email enviado: ', info.response);
  }
});
} 