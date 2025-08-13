import Link from "next/link";

export default function ContactPage() {
  const socialLinks = [
    { href: "#", label: "Instagram" },
    { href: "https://www.linkedin.com/in/janiel-franz-escalante-baygorrea-a00ab6290/", label: "Linkedin" },
  ];

  return (
    <main className="flex-grow">
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black max-w-5xl mx-auto leading-tight text-balance uppercase">
              Open to new opportunities — ready to build something exceptional for you.
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <p className="text-lg font-bold">Phone: +51 938172134</p>
                <p className="text-lg font-bold">Email: Markus@Bernhardt.Com</p>
                <p className="text-lg font-bold">Based In Lima, Perú — Working Worldwide</p>
            </div>
            <div>
                <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">(Socials)</h2>
                <div className="flex flex-col space-y-2">
                    {socialLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="text-lg font-bold hover:underline">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
