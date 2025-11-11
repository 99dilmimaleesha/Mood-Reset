import React from "react";

export default function WhyReset() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-100 to-green-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-5xl font-inter font-bold text-green-800 mb-6">
          Why Reset?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed max-w-3xl mx-auto mb-12">
          In the fast pace of modern life, our minds often get cluttered with stress,
          noise, and endless to-do lists. A simple reset can help you pause, breathe,
          and reconnect with your calm — anytime, anywhere.
        </p>

        {/* Creative Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-green-700 mb-4 font-inter">
              🌿 Clear Your Mind
            </h3>
            <p className="text-gray-600 font-inter">
              Take a short break to release mental clutter and find clarity within minutes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-green-700 mb-4 font-inter">
              💫 Recharge Energy
            </h3>
            <p className="text-gray-600 font-inter">
              A mindful reset restores your natural energy, focus, and creativity throughout the day.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-green-700 mb-4 font-inter">
              🌞 Feel Uplifted
            </h3>
            <p className="text-gray-600 font-inter">
              Reconnect with gratitude and joy — reminding yourself that every moment can begin anew.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
