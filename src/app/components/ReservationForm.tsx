import { useMemo, useState } from "react";
import { CheckCircle2, MessageCircleMore, Send } from "lucide-react";
import { motion } from "motion/react";
import { officialPhoneDisplay, officialPhoneTel } from "../config/contact";
import { useLanguage } from "../i18n/LanguageProvider";
import {
  buildLeadPayload,
  emailJsLeadAdapter,
  type LeadSubmissionResult,
  type ReservationFormValues,
} from "../lib/leadIntegration";

type ReservationFormProps = {
  projectName: string;
  isFlagship?: boolean;
  includeSpecialty?: boolean;
};

const initialFormValues: ReservationFormValues = {
  fullName: "",
  phone: "",
  email: "",
  specialty: "",
  unitType: "",
  budget: "",
  contactMethod: "",
  message: "",
};

export function ReservationForm({
  projectName,
  isFlagship = false,
  includeSpecialty = false,
}: ReservationFormProps) {
  const { dictionary, language } = useLanguage();
  const [formValues, setFormValues] = useState<ReservationFormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const [submissionResult, setSubmissionResult] = useState<LeadSubmissionResult | null>(null);
  const isMedicalClinicSelected =
    formValues.unitType === "Medical Clinic" || formValues.unitType === "عيادة طبية";
  const shouldShowSpecialty = includeSpecialty && isMedicalClinicSelected;

  const formOptions = useMemo(
    () => ({
      unitTypes: dictionary.reservation.options.unitTypes,
      specialties: dictionary.reservation.options.specialties,
      budgets: dictionary.reservation.options.budgets,
      contactMethods: dictionary.reservation.options.contactMethods,
    }),
    [dictionary],
  );

  const validate = () => {
    const nextErrors: Partial<Record<keyof ReservationFormValues, string>> = {};
    const requiredFields: Array<keyof ReservationFormValues> = [
      "fullName",
      "phone",
      "email",
      "unitType",
      "budget",
      "contactMethod",
    ];

    if (shouldShowSpecialty) {
      requiredFields.splice(3, 0, "specialty");
    }

    requiredFields.forEach((field) => {
      if (!formValues[field].trim()) {
        nextErrors[field] = dictionary.reservation.validation.required;
      }
    });

    if (formValues.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = dictionary.reservation.validation.email;
    }

    if (formValues.phone && !/^[\d+\-\s()]{7,}$/.test(formValues.phone)) {
      nextErrors.phone = dictionary.reservation.validation.phone;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
      ...(name === "unitType" && value !== "Medical Clinic" && value !== "عيادة طبية"
        ? { specialty: "" }
        : {}),
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));
    setSubmitError("");
    setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setStatus("submitting");
      const payload = buildLeadPayload(formValues, projectName);
      const result = await emailJsLeadAdapter.submitLead(payload);
      setSubmissionResult(result);
      setStatus("success");
      setFormValues(initialFormValues);
    } catch (error) {
      const emailJsError =
        typeof error === "object" && error !== null && "text" in error
          ? String((error as { text?: unknown }).text)
          : error instanceof Error
            ? error.message
            : "";

      console.error("EmailJS submission failed", error);
      setSubmitError(emailJsError);
      setStatus("error");
    }
  };

  const fieldClassName =
    "w-full rounded-2xl border border-[#d9d9d9] bg-white px-4 py-3.5 text-sm text-[#111111] placeholder:text-[#999999] outline-none transition-colors focus:border-[#C9A96E] focus:ring-4 focus:ring-[#C9A96E]/10";

  return (
    <section className="rounded-[2rem] border border-[#e5e5e5] bg-white p-6 shadow-[0_24px_60px_rgba(17,17,17,0.09)] md:p-8">
      <div className="mb-8 max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
          {dictionary.reservation.eyebrow}
        </p>
        <h2 className="text-3xl font-serif text-[#111111] md:text-4xl">
          {isFlagship ? dictionary.reservation.title : dictionary.reservation.genericTitle}
        </h2>
        <p className="text-sm leading-7 text-[#666666] md:text-base">
          {isFlagship
            ? dictionary.reservation.description
            : dictionary.reservation.genericDescription}
        </p>
      </div>

      <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        <div className="space-y-2">
          <label className="text-sm text-[#333333]" htmlFor="fullName">
            {dictionary.reservation.fields.fullName}
          </label>
          <input
            id="fullName"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={dictionary.reservation.placeholders.fullName}
          />
          {errors.fullName ? <p className="text-sm text-red-600">{errors.fullName}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#333333]" htmlFor="phone">
            {dictionary.reservation.fields.phone}
          </label>
          <input
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={dictionary.reservation.placeholders.phone}
          />
          {errors.phone ? <p className="text-sm text-red-600">{errors.phone}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#333333]" htmlFor="email">
            {dictionary.reservation.fields.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={dictionary.reservation.placeholders.email}
          />
          {errors.email ? <p className="text-sm text-red-600">{errors.email}</p> : null}
        </div>

        {shouldShowSpecialty ? (
          <div className="space-y-2">
            <label className="text-sm text-[#333333]" htmlFor="specialty">
              {dictionary.reservation.fields.specialty}
            </label>
            <select
              id="specialty"
              name="specialty"
              value={formValues.specialty}
              onChange={handleChange}
              className={fieldClassName}
            >
              <option value="">{language === "en" ? "Select" : "اختر"}</option>
              {formOptions.specialties.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.specialty ? <p className="text-sm text-red-600">{errors.specialty}</p> : null}
          </div>
        ) : null}

        <div className="space-y-2">
          <label className="text-sm text-[#333333]" htmlFor="unitType">
            {dictionary.reservation.fields.unitType}
          </label>
          <select
            id="unitType"
            name="unitType"
            value={formValues.unitType}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option value="">{language === "en" ? "Select" : "اختر"}</option>
            {formOptions.unitTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.unitType ? <p className="text-sm text-red-600">{errors.unitType}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#333333]" htmlFor="budget">
            {dictionary.reservation.fields.budget}
          </label>
          <select
            id="budget"
            name="budget"
            value={formValues.budget}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option value="">{language === "en" ? "Select" : "اختر"}</option>
            {formOptions.budgets.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget ? <p className="text-sm text-red-600">{errors.budget}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#333333]" htmlFor="contactMethod">
            {dictionary.reservation.fields.contactMethod}
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formValues.contactMethod}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option value="">{language === "en" ? "Select" : "اختر"}</option>
            {formOptions.contactMethods.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.contactMethod ? (
            <p className="text-sm text-red-600">{errors.contactMethod}</p>
          ) : null}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm text-[#333333]" htmlFor="message">
            {dictionary.reservation.fields.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className={`${fieldClassName} min-h-36 resize-none`}
            placeholder={dictionary.reservation.placeholders.message}
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#C9A96E] px-8 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_16px_32px_rgba(201,169,110,0.24)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? (
              dictionary.common.loading
            ) : (
              <>
                <Send className="h-4 w-4" />
                {dictionary.common.submit}
              </>
            )}
          </button>
        </div>
      </form>

      {status === "success" && submissionResult ? (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 text-[#111111]"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
            <div className="space-y-4">
              <p className="text-sm leading-7 text-[#3f4f42]">
                {dictionary.common.success}
                {!submissionResult.emailJsConfigured
                  ? " EmailJS is not configured yet, so use WhatsApp or email draft for this lead."
                  : submissionResult.emailJsError
                    ? ` Email delivery needs review: ${submissionResult.emailJsError}. Please continue on WhatsApp or open the email draft.`
                  : ""}
              </p>
              <a
                href={`tel:${officialPhoneTel}`}
                className="inline-flex text-sm font-semibold text-[#0d665c] underline underline-offset-4"
              >
                {officialPhoneDisplay}
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href={submissionResult.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#128c7e] px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-sm"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  {dictionary.common.whatsappContinue}
                </a>
                <a
                  href={submissionResult.mailtoUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-[#cfdccd] bg-white px-5 py-3 text-xs uppercase tracking-[0.25em] text-[#3f4f42]"
                >
                  {dictionary.common.emailDraft}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}

      {status === "error" ? (
        <p className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {submitError ? `${dictionary.common.error} ${submitError}` : dictionary.common.error}
        </p>
      ) : null}
    </section>
  );
}
