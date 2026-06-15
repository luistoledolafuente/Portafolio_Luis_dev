interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return { success: false, error: 'EmailJS no está configurado correctamente' };
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: params.name,
          from_email: params.email,
          subject: params.subject,
          message: params.message,
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return { success: false, error: text || 'Error al enviar el mensaje' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Error de conexión al enviar el mensaje' };
  }
}
