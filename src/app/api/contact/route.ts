import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: Request) {
  const formData = await request.json();

  // Extrair dados do formulário
  const { name, email, subject, message } = formData;

  // Validação básica
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Todos os campos obrigatórios devem ser preenchidos" },
      { status: 400 }
    );
  }

  // Configuração do transporter de e-mail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // E-mail para o administrador (Asim)
  const adminEmailHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nova Mensagem de Contacto | Yuri Manhiça</title>
    <style>
        /* Fallback seguro para caso o DM Sans não carregue */
        body {
            font-family: 'DM Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        /* Garantir que os estilos básicos funcionem mesmo sem o oklch */
        .dark-bg { background-color: #1c1917; }
        .dark-card { background-color: #292524; }
        .dark-border { border-color: #44403c; }
        .light-text { color: #d6d3d1; }
        .muted-text { color: #a8a29e; }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 40px 20px; font-family: 'DM Sans', 'Segoe UI', Tahoma, sans-serif; color: #d6d3d1; line-height: 1.6;">
<div style="max-width: 680px; margin: 0 auto; background-color: #292524; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); border: 1px solid #44403c;">

  <!-- Header -->
  <div style="
    background: linear-gradient(135deg, #f45c2d 0%, #d84315 100%);
    text-align: center;
    padding: 48px 32px 56px;
    border-bottom: 4px solid #ff7043;
  ">
    <h1 style="
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      letter-spacing: 0.5px;
    ">
      Nova Mensagem de Contacto Recebida
    </h1>
    <p style="
      font-size: 16px;
      color: #ffe0d6;
      margin: 8px 0 0;
      opacity: 0.9;
    ">
      Alguém entrou em contacto através do seu portfolio
    </p>
  </div>

  <!-- Content -->
  <div style="padding: 0px 40px;">

    <!-- Informações do Contacto -->
    <div style="margin-bottom: 40px;">
      <h2 style="display: flex; align-items: center; margin-bottom: 24px; color: #f45c2d; font-size: 20px; font-weight: 600;">
        <span style="width: 4px; height: 24px; background: linear-gradient(135deg, #f45c2d 0%, #d84315 100%); border-radius: 2px; margin-right: 12px;"></span>
        Informações do Contacto
      </h2>

      <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
        <div style="display: flex; justify-content: space-between; padding: 20px; background: #44403c; border-radius: 8px; border-left: 4px solid #f45c2d;">
          <span style="font-weight: 500; color: #a8a29e;">Nome:  </span>
          <span style="font-weight: 700; color: #d6d3d1;"> ${name}</span>
        </div>

        <div style="display: flex; justify-content: space-between; padding: 20px; background: #44403c; border-radius: 8px; border-left: 4px solid #f45c2d;">
          <span style="font-weight: 500; color: #a8a29e;">E-mail: </span>
          <a href="mailto:${email}" style="font-weight: 700; color: #f45c2d; text-decoration: none;"> ${email}</a>
        </div>

        <div style="display: flex; justify-content: space-between; padding: 20px; background: #44403c; border-radius: 8px; border-left: 4px solid #f45c2d;">
          <span style="font-weight: 500; color: #a8a29e;">Assunto:  </span>
          <span style="font-weight: 700; color: #d6d3d1;"> ${subject}</span>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, #44403c 50%, transparent 100%); margin: 32px 0;"></div>

    <!-- Mensagem -->
    <div style="margin-bottom: 40px;">
      <h2 style="display: flex; align-items: center; margin-bottom: 24px; color: #f45c2d; font-size: 20px; font-weight: 600;">
        <span style="width: 4px; height: 24px; background: linear-gradient(135deg, #f45c2d 0%, #d84315 100%); border-radius: 2px; margin-right: 12px;"></span>
        Mensagem
      </h2>

      <div style="background: linear-gradient(135deg, #44403c 0%, #57534e 100%); padding: 32px; border-radius: 16px; border: 1px solid #57534e;">
        <div style="color: #d6d3d1; line-height: 1.7; font-size: 15px; white-space: pre-line;">
          ${message}
        </div>
      </div>
    </div>

    <!-- Acção -->
    <div style="margin-top: 24px; text-align: center; background: #44403c; border-radius: 8px; padding: 16px 20px; font-size: 15px; color: #d6d3d1; border: 1px solid #57534e;">
      <p style="margin: 0;">
        💬 Para responder a esta mensagem, clique em 
        <a href="mailto:${email}" style="font-weight: 700; color: #f45c2d; text-decoration: none;"> Responder</a> 
        ou entre em contacto diretamente com <strong>${name}</strong>.
      </p>
    </div>

    <!-- Divider -->
    <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, #44403c 50%, transparent 100%); margin: 32px 0;"></div>

    <!-- Timestamp -->
    <div style="text-align: center; padding: 20px; background: #44403c; border-radius: 8px; border: 1px dashed #57534e; margin: 20px; font-size: 14px; color: #a8a29e;">
      <strong>Data/Hora da Mensagem:</strong> ${new Date().toLocaleString(
        "pt-BR",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }
      )}
    </div>
  </div>

  <!-- Footer -->
  <div style="text-align: center; padding: 40px 10px; background: #1c1917; border-top: 1px solid #44403c;">
    <p style="font-size: 14px; color: #a8a29e;">E-mail automático do Portfolio</p>
    <p style="margin-top: 20px; font-size: 14px; color: #a8a29e;">© ${new Date().getFullYear()} Yuri Manhiça. Todos os direitos reservados.</p>
  </div>
</div>
</body>
</html>
`;

  // E-mail de confirmação para o cliente
  const clientEmailHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirmação de Recepção | Yuri Manhiça</title>
    <style>
        /* Fallback seguro para caso o DM Sans não carregue */
        body {
            font-family: 'DM Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 40px 20px; font-family: 'DM Sans', 'Segoe UI', Tahoma, sans-serif; color: #d6d3d1; line-height: 1.6;">
<div style="max-width: 680px; margin: 0 auto; background-color: #292524; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); border: 1px solid #44403c;">
  
  <!-- Header -->
  <div style="
    background: linear-gradient(135deg, #f45c2d 0%, #d84315 100%);
    text-align: center;
    padding: 48px 32px 56px;
    border-bottom: 4px solid #ff7043;
  ">
    <h1 style="
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      letter-spacing: 0.5px;
    ">
      Mensagem Enviada com Sucesso!
    </h1>
    <p style="
      font-size: 16px;
      color: #ffe0d6;
      margin: 8px 0 0;
      opacity: 0.9;
    ">
      Obrigado por entrar em contacto
    </p>
  </div>

  <!-- Content -->
  <div style="padding: 48px 40px;">
    <p style="font-size: 16px; margin-bottom: 24px; color: #d6d3d1;">Olá <span style="color: #f45c2d; font-weight: 600">${name}</span>,</p>
    <p style="margin-bottom: 24px; color: #d6d3d1;">Agradeço imenso pela sua mensagem! Fico muito feliz por você ter entrado em contacto comigo.</p>
    
    <div style="background: #44403c; padding: 24px; border-left: 4px solid #f45c2d; border-radius: 8px; margin-bottom: 32px;">
      <p style="margin: 0; font-size: 15px; color: #d6d3d1;">
        Recebi a sua mensagem sobre <strong style="color: #f45c2d;">"${subject}"</strong> e vou analisá-la com toda a atenção. Entrarei em contacto consigo o mais breve possível através do e-mail <a href="mailto:${email}" style="color: #f45c2d; text-decoration: none; font-weight: 600;">${email}</a>.
      </p>
    </div>

    <!-- Detalhes da Mensagem -->
    <h2 style="display: flex; align-items: center; margin-bottom: 24px; color: #f45c2d; font-size: 20px; font-weight: 600;">
      <span style="width: 4px; height: 24px; background: linear-gradient(135deg, #f45c2d 0%, #d84315 100%); border-radius: 2px; margin-right: 12px;"></span>
      Resumo da Mensagem
    </h2>

    <div style="background: linear-gradient(135deg, #44403c 0%, #57534e 100%); padding: 32px; border-radius: 16px; border: 1px solid #57534e;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #57534e;">
        <span style="font-weight: 500; color: #a8a29e;">Assunto: </span>
        <span style="font-weight: 700; color: #f45c2d;">${subject}</span>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: start; padding: 12px 0;">
        <span style="font-weight: 500; color: #a8a29e; min-width: 80px;">Mensagem: </span>
        <span style="font-weight: 500; color: #d6d3d1; text-align: right; line-height: 1.6; max-width: 400px;">${message}</span>
      </div>
    </div>

    <!-- Data -->
    <div style="text-align: center; margin-top: 40px; font-size: 14px; color: #a8a29e;">
      <strong>Data do Envio: </strong>${new Date().toLocaleString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </div>
  </div>

  <!-- Footer -->
  <div style="text-align: center; padding: 40px 32px; background: #1c1917; border-top: 1px solid #44403c;">
    <p style="margin: 8px 0; font-size: 14px; color: #a8a29e;">Esta é uma confirmação automática de recepção da sua mensagem,gerada automaticamente a partir do portfolio de <strong style="color: #f45c2d;">Yuri Manhiça</strong>.</p>
    <p style="margin: 8px 0; font-size: 14px; color: #a8a29e;">Todos os direitos reservados ©</p>
  </div>

</div>
</body>
</html>
`;

  // Configurar opções de e-mail para o Asim
  const mailOptions: Mail.Options = {
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    subject: `Nova Mensagem do Portfolio - ${subject}`,
    html: adminEmailHtml,
  };

  // Configurar e-mail de confirmação para o cliente
  const clientMailOptions: Mail.Options = {
    from: `"Yuri Manhiça " <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Confirmação de mensagem enviada - ${subject}`,
    html: clientEmailHtml,
  };

  try {
    // Enviar e-mail para o Asim
    await transporter.sendMail(mailOptions);

    // Enviar e-mail de confirmação para o cliente
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return NextResponse.json(
      {
        error: "Erro ao processar a sua mensagem. Por favor, tente novamente.",
      },
      { status: 500 }
    );
  }
}
