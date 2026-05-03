import { Phone, MapPin, AlertCircle } from "lucide-react";

const PHONE_PRIMARY = "+14692885675";
const PHONE_PRIMARY_DISPLAY = "(469) 288-5675";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-border/60 bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
              Contact
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Get in <span className="italic text-accent">touch</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/70">
              Questions about lessons, scheduling, or whether the studio is a
              fit? Reach out by phone or text — Eyoel responds within one
              business day.
            </p>

            <div
              role="note"
              className="mt-8 flex items-start gap-3 rounded-2xl border border-accent-soft/60 bg-cream/50 p-5 text-sm leading-relaxed text-foreground/80"
            >
              <AlertCircle
                size={18}
                aria-hidden
                className="mt-0.5 shrink-0 text-accent"
              />
              <p>
                <span className="font-medium text-foreground">
                  House calls only at this time.
                </span>{" "}
                Lessons take place at your home or chosen location. A studio
                space is not currently available.
              </p>
            </div>
          </div>

          <ul className="space-y-3 lg:col-span-7">
            <li>
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="group flex items-center gap-5 rounded-2xl border border-border bg-background px-6 py-5 transition-colors hover:border-accent"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-accent">
                  <Phone size={20} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted">
                    Phone
                  </span>
                  <span className="mt-1 block font-serif text-xl text-foreground">
                    {PHONE_PRIMARY_DISPLAY}
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-5 rounded-2xl border border-dashed border-border bg-background/40 px-6 py-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-accent">
                <MapPin size={20} />
              </span>
              <span className="flex-1">
                <span className="block text-xs uppercase tracking-[0.2em] text-muted">
                  Service area
                </span>
                <span className="mt-1 block font-serif text-xl text-foreground">
                  North Texas area
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
