import { Music, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Music,
    title: "Classical foundations",
    body: "Technique, sight-reading, and the repertoire that builds a confident pianist.",
  },
  {
    icon: Sparkles,
    title: "Personal style",
    body: "Lessons shaped around the music you actually want to play — pop, jazz, film scores, your own writing.",
  },
  {
    icon: Users,
    title: "All ages welcome",
    body: "From young beginners to adults returning to the keys after years away.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border/60 bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
              About
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Music that meets <span className="italic text-accent">you</span>{" "}
              where you are.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7">
            <p>
              Eyoel has spent years studying and performing piano across
              classical and contemporary traditions. He teaches with patience,
              precision, and a genuine love for the instrument — meeting
              students at the bench in their own homes.
            </p>
            <p>
              Every lesson is a conversation. Beginners learn how to listen.
              Returning players rebuild fluency. Advanced students refine voice,
              touch, and interpretation.
            </p>
          </div>
        </div>

        <div id="lessons" className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background/60 p-6 transition-colors hover:border-accent-soft md:p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-accent">
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/70">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
