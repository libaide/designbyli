import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import Noise from "@/components/Noise";
import Section from "@/components/Section";
import FadeInOnView from "@/components/FadeInOnView";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-white text-black">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={35}
        className="absolute inset-0 z-0 opacity-70"
      />

      <div className="relative z-10 py-16">
        <Container>
          <FadeInOnView>
            <Section title="Get in touch" align="center">
              <div className="flex justify-center">
                <ContactForm />
              </div>
            </Section>
          </FadeInOnView>
        </Container>
      </div>
    </main>
  );
}
