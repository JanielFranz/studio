import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-10xl mx-auto leading-tight text-balance uppercase">
          I'M A DEDICATED SOFTWARE ENGINEER CRAFTING INNOVATIVE SOLUTIONS — WHILE MASTERING DISCIPLINE, POWER, AND STRATEGY AS A COMPETITIVE KICKBOXING FIGHTER.
        </h1>
      </section>

      <section className="container mx-auto px-6 py-0">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/800x800.png"
              alt="Portrait of Markus Bernhardt"
              width={800}
              height={800}
              className="w-full h-auto object-cover rounded-md"
              data-ai-hint="man photographer"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-sm tracking-widest uppercase text-muted-foreground">(About)</h2>
            <p className="text-foreground/80 leading-relaxed text-balance text-lg">
              I&apos;m Janiel Franz, a Peruvian software engineer with expertise in creating robust, scalable solutions using Domain-Driven Design (DDD) and modern development practices
            </p>
            <p className="text-foreground/80 leading-relaxed text-balance text-lg">
              I&apos;m currently doing an internship at Luz del Sur, , while also working with my team at VirtuoLabs to create impactful solutions for businesses
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
