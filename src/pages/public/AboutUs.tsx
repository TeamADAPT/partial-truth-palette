export default function AboutUs() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">About MyBizAI</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground mb-8 text-center">
          We are on a mission to democratize business success through artificial intelligence.
        </p>

        <div className="grid md:grid-cols-2 gap-12 my-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              We envision a world where anyone with an idea can build a successful enterprise.
              By leveraging the power of AI, we remove the technical and operational barriers
              that often stifle innovation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p>
              Founded in 2024, MyBizAI emerged from a simple observation: great ideas fail not
              because they lack merit, but because execution is hard. We built a platform that
              acts as a co-founder, team, and mentor all in one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
