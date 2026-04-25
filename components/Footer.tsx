export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-800 text-white rounded-lg p-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
                </svg>
              </span>
              <span className="text-white font-extrabold tracking-wide">
                PUNJAB <span className="text-green-500">PHARMACY</span>
              </span>
            </div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">
              Feel Well, Live Better
            </p>
            <p className="text-sm leading-relaxed">
              Your trusted healthcare partner in DHA Phase 5, Lahore.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["#services", "#about", "#contact"].map((href) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors capitalize">
                    {href.replace("#", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <div className="space-y-1 text-sm">
              <p>Plaza 75, CCA Ground Floor</p>
              <p>Sector C, Phase 5 DHA</p>
              <p>Lahore 54000, Pakistan</p>
              <a href="tel:03220707888" className="text-green-500 hover:text-green-400 font-semibold transition-colors block mt-2">
                0322-0707888
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          © {year} Punjab Pharmacy DHA Phase 5. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
