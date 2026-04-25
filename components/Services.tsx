const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-3-3v6M5.5 20h13a2 2 0 002-2V9.5L15 3H5.5A2 2 0 003.5 5v13a2 2 0 002 2z" />
      </svg>
    ),
    title: "Prescription Medicines",
    desc: "All prescription medications dispensed accurately by qualified pharmacists.",
    accent: "bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "OTC Products",
    desc: "Wide range of over-the-counter products for everyday health needs.",
    accent: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Vitamins & Supplements",
    desc: "Vitamins, minerals, and health supplements for your wellbeing.",
    accent: "bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Baby & Mother Care",
    desc: "Trusted baby products, infant formula, and maternal health essentials.",
    accent: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Medical Equipment",
    desc: "Blood pressure monitors, glucometers, thermometers, and more.",
    accent: "bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Expert Advice",
    desc: "Professional guidance from our experienced pharmacists — just ask.",
    accent: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mb-3 border border-blue-100 dark:border-blue-800">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Our Services</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Everything you need for your health — all under one roof at Punjab Pharmacy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-md dark:hover:shadow-gray-900 transition-shadow">
              <div className={`${s.accent} rounded-xl w-11 h-11 flex items-center justify-center mb-4`}>
                {s.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{s.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
