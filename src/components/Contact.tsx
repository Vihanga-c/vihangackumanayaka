import type { ComponentType } from "react";

const CONTACT_METHODS = [
  {
    id: "mobile",
    label: "Mobile Phone",
    value: "+94 71 234 5678",
    href: "tel:+94712345678",
  },
  {
    id: "email",
    label: "Email",
    value: "vihanga.kumanayaka@example.com",
    href: "mailto:vihanga.kumanayaka@example.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/vihanga-kumanayaka",
    href: "https://www.linkedin.com/in/vihanga-kumanayaka",
  },
];

function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const METHOD_ICONS: Record<string, ComponentType> = {
  mobile: PhoneIcon,
  email: EmailIcon,
  linkedin: LinkedInIcon,
};

export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner">
        <h2 id="contact-title" className="contact-title">
          Contact Me
        </h2>
        <div className="contact-methods">
          {CONTACT_METHODS.map((method) => {
            const Icon = METHOD_ICONS[method.id]!;
            return (
              <div key={method.id} className={`contact-method ${method.id}`}>
                <span className="contact-method-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="contact-method-label">{method.label}</span>
                <a className="contact-method-link" href={method.href}>
                  {method.value}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;