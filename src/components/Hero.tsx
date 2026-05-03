import Image from "next/image";
import { Calendar, Home, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-amber-soft opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-cream opacity-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted">
              <Home size={14} aria-hidden /> House calls only at this time
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              Piano lessons,
              <br />
              <span className="italic text-accent">thoughtfully taught.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              I&apos;m <span className="font-medium">Eyoel Abera</span> — a
              pianist and teacher offering personalized lessons in your home.
              Whether you&apos;re starting your first scales or polishing a
              recital piece, we build a practice that feels like yours.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#book"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-charcoal px-8 text-base font-medium text-ivory shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <Calendar size={18} />
                Book a Lesson
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#about"
                className="inline-flex h-14 items-center justify-center rounded-full border border-foreground/15 px-8 text-base font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                About Eyoel
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-soft to-cream opacity-60" />
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-cream shadow-xl">
                <Image
                  src="/eyoel.png"
                  alt="Eyoel Abera"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-[65%_30%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
