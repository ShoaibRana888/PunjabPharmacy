export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mb-3 border border-blue-100 dark:border-blue-800">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Contact & Location</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            We're easy to find. Stop by or give us a call — we're happy to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 items-start">
              <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-xl p-3 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Address</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  Plaza 75, CCA Ground Floor<br />
                  Sector C, Phase 5 DHA<br />
                  Lahore 54000, Pakistan
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 items-start">
              <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-xl p-3 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h3>
                <a href="tel:03220707888"
                  className="text-green-600 dark:text-green-500 hover:text-green-700 font-semibold text-sm transition-colors">
                  0322-0707888
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 items-start">
              <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-xl p-3 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Opening Hours</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Mon – Sun: 7:00 AM – 3:00 AM</p>
              </div>
            </div>

            <a href="tel:03220707888"
              className="block bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-semibold transition-colors">
              📞 Call Us Now
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm h-96 md:h-full min-h-[380px]">
            <iframe
              title="Punjab Pharmacy Location"
              src="https://maps.google.com/maps?q=31.46122471918848,74.41326855976959&output=embed&z=17"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
