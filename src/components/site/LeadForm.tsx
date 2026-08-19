import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { CtaButton } from "./Cta";
import { NOVA, SERVICES } from "@/lib/nova";
import { cn } from "@/lib/utils";

type Values = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zip: string;
  service: string;
};

const EMPTY: Values = { firstName: "", lastName: "", phone: "", email: "", zip: "", service: "" };

export function LeadForm({
  defaultService,
  variant = "light",
}: {
  defaultService?: string | undefined;
  variant?: "light" | "dark";
}) {
  const [values, setValues] = useState<Values>({ ...EMPTY, service: defaultService ?? "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);
  const dark = variant === "dark";

  const set = (key: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: event.target.value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<keyof Values, string>> = {};
    if (!values.firstName.trim()) next.firstName = "Required";
    if (!values.lastName.trim()) next.lastName = "Required";
    if (!/^[\d\s().+-]{10,}$/.test(values.phone.trim())) next.phone = "Enter a valid phone";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Enter a valid email";
    if (!/^\d{5}$/.test(values.zip.trim())) next.zip = "5-digit ZIP";
    if (!values.service) next.service = "Choose one";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const fieldBase = cn(
    "h-12 w-full border-b bg-transparent px-0 text-[0.95rem] outline-none transition-colors duration-300",
    dark
      ? "border-line-inverse text-navy-foreground placeholder:text-navy-foreground/40 focus:border-navy-foreground"
      : "border-input text-foreground placeholder:text-muted-foreground/60 focus:border-navy",
  );
  const labelCls = cn("eyebrow text-[0.6rem]", dark ? "text-navy-foreground/45" : "text-muted-foreground");

  if (sent) {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-5 p-9 lg:p-12",
          dark ? "bg-navy-soft/40 text-navy-foreground" : "bg-sand",
        )}
      >
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-full",
            dark ? "bg-navy-foreground text-navy" : "bg-navy text-navy-foreground",
          )}
        >
          <Check className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <h3 className="display-sm">Request received.</h3>
        <p className={cn("max-w-md text-sm leading-relaxed", dark ? "text-navy-foreground/70" : "text-muted-foreground")}>
          Thank you, {values.firstName}. A Nova specialist will reach out shortly to schedule your free
          estimate. If it's easier, call us directly at {NOVA.phone}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className={cn(
        "p-7 sm:p-9 lg:p-12",
        dark ? "bg-navy-soft/30 text-navy-foreground ring-1 ring-line-inverse" : "bg-background shadow-[var(--shadow-lift)]",
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="display-sm">Request your free estimate</h3>
        <span className={cn("text-xs", dark ? "text-navy-foreground/50" : "text-muted-foreground")}>
          Takes about a minute
        </span>
      </div>

      <div className="mt-9 grid gap-7 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName} labelCls={labelCls}>
          <input className={fieldBase} value={values.firstName} onChange={set("firstName")} autoComplete="given-name" />
        </Field>
        <Field label="Last name" error={errors.lastName} labelCls={labelCls}>
          <input className={fieldBase} value={values.lastName} onChange={set("lastName")} autoComplete="family-name" />
        </Field>
        <Field label="Phone" error={errors.phone} labelCls={labelCls}>
          <input className={fieldBase} value={values.phone} onChange={set("phone")} inputMode="tel" autoComplete="tel" />
        </Field>
        <Field label="Email" error={errors.email} labelCls={labelCls}>
          <input className={fieldBase} value={values.email} onChange={set("email")} inputMode="email" autoComplete="email" />
        </Field>
        <Field label="ZIP code" error={errors.zip} labelCls={labelCls}>
          <input className={fieldBase} value={values.zip} onChange={set("zip")} inputMode="numeric" autoComplete="postal-code" maxLength={5} />
        </Field>
        <Field label="Service of interest" error={errors.service} labelCls={labelCls}>
          <select className={cn(fieldBase, "appearance-none")} value={values.service} onChange={set("service")}>
            <option value="">Select</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.label} className="text-foreground">
                {s.label}
              </option>
            ))}
            <option value="Not sure yet" className="text-foreground">
              Not sure yet
            </option>
          </select>
        </Field>
      </div>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <CtaButton type="submit" variant={dark ? "light" : "primary"} size="lg" className="w-full sm:w-auto">
          Get My Free Estimate
        </CtaButton>
        <p
          className={cn(
            "flex items-center gap-2 text-xs leading-relaxed",
            dark ? "text-navy-foreground/50" : "text-muted-foreground",
          )}
        >
          <ShieldCheck className="h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
          No obligation. Your details stay with Nova.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  labelCls,
  children,
}: {
  label: string;
  error?: string | undefined;
  labelCls: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <div className="mt-1">{children}</div>
      {error ? <span className="mt-1.5 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
