export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-serif text-xl text-ivory">Eyoel Abera</p>
          <p className="mt-1 text-sm text-ivory/60">
            Piano instruction · House calls only
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-ivory/40">
          © {year} Eyoel Abera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
