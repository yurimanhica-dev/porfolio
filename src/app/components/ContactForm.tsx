/* eslint-disable @typescript-eslint/no-unused-vars */
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // No seu ContactForm, atualize a função handleSubmit:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        //console.log("Formulário enviado com sucesso!");
        // Mostrar mensagem de sucesso para o usuário
        toast.success(
          "Mensagem enviada com sucesso! Entrarei em contacto em breve."
        );
      } else {
        toast("Erro ao enviar mensagem. Por favor, tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <div>
      {/* Contact Form */}
      <div>
        <h3 className="text-xl font-semibold mb-6 uppercase dark:text-accent-foreground">
          Envie uma Mensagem
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Digite seu email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Assunto *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Digite o assunto"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="Digite sua mensagem"
              required
            />
            <p>* Campos obrigatórios</p>
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              isFormValid && !isSubmitting
                ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
