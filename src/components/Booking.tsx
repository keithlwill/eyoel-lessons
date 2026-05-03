import { Calendar, MessageSquare, Phone } from "lucide-react";

const BOOKING_URL = "#";
const PHONE_PRIMARY = "+14692885675";
const PHONE_PRIMARY_DISPLAY = "(469) 288-5675";

export default function Booking() {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream/40 via-ivory to-ivory"
      />
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
            Book
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Schedule your <span className="italic text-accent">first lesson</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Pick a time that works for you. New students start with a short
            consultation so we can tailor the first lesson to your goals.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <a
            href={BOOKING_URL}
            className="group flex flex-col rounded-2xl border border-foreground/15 bg-charcoal p-8 text-ivory transition-transform hover:-translate-y-1 hover:border-accent md:col-span-2"
          >
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory">
              <Calendar size={20} />
            </div>
            <h3 className="font-serif text-2xl">Book online</h3>
            <p className="mt-2 max-w-md text-base leading-relaxed text-ivory/70">
              See available times and reserve a slot in under a minute.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-soft">
              Open booking calendar
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>

          <div className="flex flex-col gap-4">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="group flex flex-1 flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-accent">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-serif text-lg text-foreground">Call</p>
                <p className="mt-1 text-sm text-muted">
                  {PHONE_PRIMARY_DISPLAY}
                </p>
              </div>
            </a>
            <a
              href={`sms:${PHONE_PRIMARY}`}
              className="group flex flex-1 flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-accent">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="font-serif text-lg text-foreground">Text</p>
                <p className="mt-1 text-sm text-muted">
                  Quick questions welcome
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
