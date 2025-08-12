import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl mx-auto leading-tight text-balance uppercase">
          Markus Bernhardt is an award-winning photographer capturing modern stories with minimalist precision, blending clean aesthetics and timeless emotion to create striking, story-driven visuals.
        </h1>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/800x1000.png"
              alt="Portrait of Markus Bernhardt"
              width={800}
              height={1000}
              className="w-full h-auto object-cover rounded-md"
              data-ai-hint="man photographer"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-sm tracking-widest uppercase text-muted-foreground">(About)</h2>
            <p className="text-foreground/80 leading-relaxed text-balance text-lg">
              I&apos;m Markus Bernhardt, a Swiss visual artist with over ten years of experience creating refined, emotionally resonant images that connect on a deeply human level.
            </p>
            <p className="text-foreground/80 leading-relaxed text-balance text-lg">
              My work lives at the intersection of art and authenticity. I specialize in capturing people, not just their appearance but their presence. Whether I&apos;m working with individuals, creatives, entrepreneurs, or brands, I strive to create images that hold depth, intention, and quiet strength.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
