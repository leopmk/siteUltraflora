export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe Ultraflora <noreply@gobarber.com>',
  },
};

// Tem essas opções de gerenciamento para mandar e-mail
// Amazon SES, Mailgun, Sparkpost, Mandril (Mailchimp), Gmail

// Porém será usado o Mailtrap, é somente para DEV
