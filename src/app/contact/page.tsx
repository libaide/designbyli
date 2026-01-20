import ContactForm from "@/components/ContactForm"; // adjust path if yours lives elsewhere

export default function ContactPage() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold text-black">Contact</h1>
        <p className="mt-3 text-neutral-700">
          Send me a message and I’ll get back to you soon.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
