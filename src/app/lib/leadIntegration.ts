import emailjs from "@emailjs/browser";
import {
  officialEmail,
  officialWhatsAppBaseUrl,
} from "../config/contact";

export type ReservationFormValues = {
  fullName: string;
  phone: string;
  email: string;
  specialty: string;
  unitType: string;
  budget: string;
  contactMethod: string;
  message: string;
};

export type LeadPayload = ReservationFormValues & {
  project: string;
  source: string;
  createdAt: string;
};

export type LeadSubmissionResult = {
  ok: boolean;
  payload: LeadPayload;
  mailtoUrl: string;
  whatsappUrl: string;
  emailJsConfigured: boolean;
  emailJsError?: string;
};

export type LeadAdapter = {
  submitLead: (payload: LeadPayload) => Promise<LeadSubmissionResult>;
};

const defaultEmailJsConfig = {
  serviceId: "service_c1m9x7s",
  templateId: "template_tx75pxf",
  publicKey: "kBKCoTMPgVC9bCLo8",
  toEmail: "info@goldcitydevelopments.com",
} as const;

const emailJsConfig = {
  serviceId:
    (import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined) ??
    defaultEmailJsConfig.serviceId,
  templateId:
    (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined) ??
    defaultEmailJsConfig.templateId,
  publicKey:
    (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined) ??
    defaultEmailJsConfig.publicKey,
  toEmail:
    (import.meta.env.VITE_LEAD_TO_EMAIL as string | undefined) ??
    defaultEmailJsConfig.toEmail ??
    officialEmail,
};

export function buildLeadPayload(
  values: ReservationFormValues,
  project: string,
): LeadPayload {
  return {
    ...values,
    project,
    source: "website-reservation-form",
    createdAt: new Date().toISOString(),
  };
}

function buildEmailBody(payload: LeadPayload) {
  return [
    `Project: ${payload.project}`,
    `Full Name: ${payload.fullName}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Specialty: ${payload.specialty || "-"}`,
    `Unit Type: ${payload.unitType}`,
    `Budget: ${payload.budget}`,
    `Preferred Contact Method: ${payload.contactMethod}`,
    `Message: ${payload.message || "-"}`,
    `Source: ${payload.source}`,
    `Created At: ${payload.createdAt}`,
  ].join("\n");
}

function buildLeadSubject(project: string) {
  return project === "Seven B Mall" ? "New Lead - Seven B Mall" : `New Lead - ${project}`;
}

export function buildMailtoUrl(payload: LeadPayload) {
  const subject = encodeURIComponent(buildLeadSubject(payload.project));
  const body = encodeURIComponent(buildEmailBody(payload));
  return `mailto:${officialEmail}?subject=${subject}&body=${body}`;
}

export function buildWhatsAppUrl(payload: LeadPayload) {
  const message = encodeURIComponent(
    [
      "Hello Gold City Developments, I submitted a reservation inquiry.",
      `Project: ${payload.project}`,
      `Name: ${payload.fullName}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Specialty: ${payload.specialty || "-"}`,
      `Unit Type: ${payload.unitType}`,
      `Budget: ${payload.budget}`,
      `Preferred Contact: ${payload.contactMethod}`,
      `Notes: ${payload.message || "-"}`,
    ].join("\n"),
  );

  return `${officialWhatsAppBaseUrl}?text=${message}`;
}

export const emailJsLeadAdapter: LeadAdapter = {
  async submitLead(payload) {
    const emailJsConfigured =
      Boolean(emailJsConfig.serviceId) &&
      Boolean(emailJsConfig.templateId) &&
      Boolean(emailJsConfig.publicKey);

    let emailJsError: string | undefined;

    if (emailJsConfigured) {
      try {
        await emailjs.send(
          emailJsConfig.serviceId!,
          emailJsConfig.templateId!,
          {
            to_email: emailJsConfig.toEmail,
            subject: buildLeadSubject(payload.project),
            title: buildLeadSubject(payload.project),
            name: payload.fullName,
            time: payload.createdAt,
            project: payload.project,
            full_name: payload.fullName,
            phone: payload.phone,
            email: payload.email,
            reply_to: payload.email,
            specialty: payload.specialty || "-",
            unit_type: payload.unitType,
            budget: payload.budget,
            contact_method: payload.contactMethod,
            message: buildEmailBody(payload),
            notes: payload.message || "-",
            source: payload.source,
            created_at: payload.createdAt,
          },
          {
            publicKey: emailJsConfig.publicKey!,
          },
        );
      } catch (error) {
        emailJsError =
          typeof error === "object" && error !== null && "text" in error
            ? String((error as { text?: unknown }).text)
            : error instanceof Error
              ? error.message
              : "EmailJS could not send this lead.";
        console.error("EmailJS delivery failed", error);
      }
    }

    return {
      ok: !emailJsError,
      payload,
      mailtoUrl: buildMailtoUrl(payload),
      whatsappUrl: buildWhatsAppUrl(payload),
      emailJsConfigured,
      emailJsError,
    };
  },
};
