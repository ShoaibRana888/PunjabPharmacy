export default function Hero() {
  return (
    <section className="pt-16 min-h-screen bg-white dark:bg-gray-900 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mb-5 border border-blue-100 dark:border-blue-800">
            DHA Phase 5, Lahore
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
            PUNJAB PHARMACY
          </h1>
          <p className="text-green-600 font-bold text-base mb-6 tracking-widest uppercase">
            Feel Well, Live Better
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
            Quality medicines, healthcare products, and personalised service —
            right here in DHA Phase 5. We're here when you need us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:03220707888"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-colors shadow-md shadow-green-100 dark:shadow-none">
              📞 Call 0322-0707888
            </a>
            <a href="#contact"
              className="border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-800 dark:hover:border-blue-500 hover:text-blue-800 dark:hover:text-blue-400 px-6 py-3 rounded-xl font-semibold text-center transition-colors">
              Find Us on Map
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 w-full max-w-sm">
            <div className="bg-green-600 rounded-2xl px-4 py-3 mb-6 text-center">
              <p className="text-white font-bold tracking-widest text-sm uppercase">
                Feel Well, Live Better
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: "✅", text: "Licensed & Certified Pharmacists" },
                { icon: "💊", text: "Wide Range of Medicines" },
                { icon: "🏷️", text: "Up to 10% Off — First of Every Month" },
                { icon: "📍", text: "Plaza 75 CCA, DHA Phase 5" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
