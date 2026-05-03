import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
type IconComponent = ComponentType<IconProps>;

function InstagramIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

type LinkItem = {
  label: string;
  href: string;
  icon: IconComponent;
  hint: string;
};

const links: LinkItem[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/eyoel.abera/",
    icon: InstagramIcon,
    hint: "@eyoel.abera",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eyo_music_/",
    icon: InstagramIcon,
    hint: "@eyo_music_",
  },
];

export default function Links() {
  return (
    <section id="links" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
              Links
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Listen &amp;{" "}
              <span className="italic text-accent">follow along</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/70">
              Recordings, performances, and a window into the studio.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8">
            {links.map(({ label, href, icon: Icon, hint }) => (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-background"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-accent transition-colors group-hover:bg-accent group-hover:text-ivory">
                    <Icon size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-lg text-foreground">
                      {label}
                    </span>
                    <span className="block text-sm text-muted">{hint}</span>
                  </span>
                  <span
                    aria-hidden
                    className="text-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
