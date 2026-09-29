export default function CTASection() {
    return (
        <section className="w-full bg-linear-to-r from-primary to-violet-600 px-6 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="mx-auto max-w-md text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                    Ready to supercharge your workflow?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Join over 10,000 professional developers and start orchestrating your custom agents today.
                </p>

                <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                    <label htmlFor="cta-email" className="sr-only">
                        Work email
                    </label>
                    <input
                        id="cta-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="Enter your email"
                        className="h-11 w-full min-w-0 rounded-md sm:flex-1 border border-white/30 bg-white/15 px-4 text-sm text-white placeholder:text-white/70 outline-none transition focus:border-white/60 focus:bg-white/20"
                    />
                    <button
                        type="submit"
                        className="h-11 rounded-md bg-white px-5 text-sm font-bold text-primary shadow-sm"
                    >
                        Get Started Free
                    </button>
                </form>
            </div>
        </section>
    );
}
