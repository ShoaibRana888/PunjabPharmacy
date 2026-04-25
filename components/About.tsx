const stats = [
  { value: "10+", label: "Years of Service" },
  { value: "500+", label: "Products in Stock" },
  { value: "1000s", label: "Happy Customers" },
  { value: "24/7", label: "Emergency Contact" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mb-5 border border-blue-100 dark:border-blue-800">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Serving the DHA Community with Care
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Punjab Pharmacy has been a trusted healthcare partner for residents of DHA Phase 5,
              Lahore. Located at the ground floor of Plaza 75 CCA, we are easily accessible and
              committed to providing genuine medicines and professional health advice.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Our team of qualified pharmacists ensures every prescription is filled accurately
              and every customer leaves with the right information for their health journey.
            </p>
            <a href="tel:03220707888"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Get in Touch
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label}
                className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-blue-800 dark:text-blue-300 mb-1">{s.value}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
