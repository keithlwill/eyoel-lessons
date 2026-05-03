import { Award, Star, Trophy, GraduationCap } from "lucide-react";

const milestones = [
  {
    icon: Award,
    title: "Texas All-State",
    body: "Earned a seat in one of the most selective high school bands in the country.",
  },
  {
    icon: Star,
    title: "Carnegie Hall",
    body: "Performed on one of the world's most storied stages.",
  },
  {
    icon: Trophy,
    title: "Santa Clara Vanguard",
    body: "Marched with one of Drum Corps International's elite ensembles.",
  },
  {
    icon: GraduationCap,
    title: "University of North Texas",
    body: "Degree in Interdisciplinary Studies.",
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
              A life shaped by{" "}
              <span className="italic text-accent">music</span>.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7">
            <p>
              Eyoel has been making music for more than half his life. What
              began with a trombone in the sixth grade grew into a journey
              through some of the country&apos;s most demanding ensembles —
              earning a seat in the Texas All-State band, performing at
              Carnegie Hall, and marching with the Santa Clara Vanguard of Drum
              Corps International.
            </p>
            <p>
              Today he teaches piano in the North Texas area, holding a degree
              in Interdisciplinary Studies from the University of North Texas.
              He believes music is incredibly powerful — it transcends
              language, connects people, and can even transform lives. He hopes
              to pass that on to as many students as possible.
            </p>
          </div>
        </div>

        <div
          id="lessons"
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {milestones.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background/60 p-6 transition-colors hover:border-accent-soft md:p-7"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-accent">
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-lg leading-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
