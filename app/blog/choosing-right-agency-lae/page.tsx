'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaUser, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function ChoosingRightAgencyLae() {

  const redFlags = [
    {
      title: 'No Portfolio or Case Studies',
      description: 'If an agency can\'t show you examples of their past work, be cautious. A legitimate agency should be proud to showcase what they\'ve built. Ask specifically for Lae-based projects.',
      icon: '🚩',
    },
    {
      title: 'Suspiciously Low Prices',
      description: 'If they\'re quoting prices that seem too good to be true, they probably are. Cheap often means corners cut, poor quality, and little support. Quality digital solutions require time and expertise.',
      icon: '💰',
    },
    {
      title: 'No Clear Communication Process',
      description: 'Can\'t get them on the phone or email? Unclear about who your point of contact is? This will only get worse after you hire them. Good agencies have clear, responsive communication.',
      icon: '📞',
    },
    {
      title: 'Pressure to Sign Long Contracts',
      description: 'Reputable agencies don\'t pressure you into long-term contracts immediately. If they\'re pushing you to commit for 12+ months without understanding your business first, walk away.',
      icon: '📝',
    },
    {
      title: 'No Understanding of Local Market',
      description: 'Can they explain how their solutions work specifically for Lae businesses? Do they understand PNG regulations, local preferences, and the Lae business environment? If not, they\'re not the right fit.',
      icon: '🌍',
    },
    {
      title: 'Hidden Fees and Surprise Charges',
      description: 'Everything should be transparent upfront. If an agency is vague about costs or mentions "additional fees" mid-project, that\'s a red flag. Demand a detailed breakdown.',
      icon: '⚠️',
    },
    {
      title: 'No Support After Launch',
      description: 'They finish your website and disappear? Ask explicitly about post-launch support, maintenance, updates, and who to call if something breaks. Support matters.',
      icon: '🔧',
    },
    {
      title: 'Generic Pitch That Doesn\'t Address Your Business',
      description: 'If their proposal could apply to any business and doesn\'t specifically address YOUR challenges and goals, they haven\'t done their homework. They\'re just trying to sell you something.',
      icon: '🎯',
    },
  ];

  const greenFlags = [
    {
      title: 'Proven Local Experience',
      description: 'They have case studies from actual Lae businesses. They understand the local market, challenges, and opportunities specific to PNG.',
    },
    {
      title: 'Clear, Transparent Pricing',
      description: 'Everything is broken down clearly. No hidden fees, no surprises. They can explain exactly what you\'re paying for and why.',
    },
    {
      title: 'Responsive and Accessible',
      description: 'They answer your questions promptly. They\'re available via phone, email, or messaging. Communication is easy and consistent.',
    },
    {
      title: 'Customized Approach',
      description: 'They ask detailed questions about YOUR business before proposing solutions. They understand that every business is different.',
    },
    {
      title: 'Post-Launch Support Included',
      description: 'They don\'t vanish after the project launches. They offer maintenance, updates, and support. You\'re a partner, not just a transaction.',
    },
    {
      title: 'Focuses on Your Results',
      description: 'They care about YOUR business goals and success metrics. They measure success by whether you\'re getting more customers and better results.',
    },
    {
      title: 'Team You Can Trust',
      description: 'You meet the people who will actually work on your project. You feel comfortable with them and trust their expertise.',
    },
    {
      title: 'Realistic Expectations',
      description: 'They don\'t promise guaranteed #1 rankings or magic results. They explain what digital solutions can realistically achieve and how long it takes.',
    },
  ];

  const whyN30 = [
    {
      icon: '🏘️',
      title: 'We\'re Local to Lae',
      description: 'We\'re not a foreign agency working remotely. We\'re based in Lae, working with local businesses, understanding local challenges and opportunities. We\'re invested in our community\'s success.',
    },
    {
      icon: '💬',
      title: 'Direct Communication',
      description: 'You can reach us directly. We answer calls and emails quickly. You\'re not dealing with endless voicemails or support tickets—you talk to the people building your solution.',
    },
    {
      icon: '📊',
      title: 'Real Case Studies',
      description: 'We have proven work with local Lae businesses like Butibam Mantics. We can show you actual results—websites built, systems launched, businesses growing. No vague promises.',
    },
    {
      icon: '🎯',
      title: 'Transparent Pricing',
      description: 'Our pricing is straightforward. No hidden fees, no surprise charges. You know exactly what you\'re paying for and why. We build affordable solutions for growing businesses.',
    },
    {
      icon: '24/7',
      title: 'Ongoing Support',
      description: 'Launch day isn\'t the end—it\'s the beginning. We provide support, maintenance, and updates to keep your website running smoothly and continuously improving.',
    },
    {
      icon: '🚀',
      title: 'Results-Focused',
      description: 'We succeed when you succeed. We measure our work by your business growth—more leads, more sales, better customer engagement. That\'s what matters to us.',
    },
    {
      icon: '⚡',
      title: 'Modern Technology',
      description: 'We use the latest tools and frameworks to build fast, secure, and scalable websites. You get cutting-edge solutions, not outdated technology.',
    },
    {
      icon: '💡',
      title: 'Your Partner, Not Just a Vendor',
      description: 'We treat you as a partner in building something great. We care about your vision and success. When you win, we win. That\'s our philosophy.',
    },
  ];

  const questions = [
    'Can you show me 3-5 recent projects from Lae-based businesses?',
    'What exactly is included in your pricing? Are there additional fees?',
    'Who will be my main point of contact? Can I meet them?',
    'What happens after the website launches? What support do you provide?',
    'How do you measure success? What metrics matter most?',
    'Can you walk me through your process from start to finish?',
    'How long will the project take?',
    'What happens if I\'m not happy with the work?',
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <section className="relative pt-24 pb-12 px-4 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 mb-6 transition-colors">
            <FaArrowLeft size={14} /> Back to Blog
          </Link>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            How to Choose the Right <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Digital Agency in Lae</span>
          </h1>

          <p className="text-xl text-blue-100 mb-6">A practical guide to spotting red flags and finding an agency that actually cares about your success</p>

          <div className="flex flex-wrap gap-6 text-blue-100 text-sm font-medium">
            <span className="flex items-center gap-2">
              <FaCalendar size={14} /> December 2025
            </span>
            <span className="flex items-center gap-2">
              <FaUser size={14} /> N30 Digital Team
            </span>
            <span className="bg-blue-500/30 px-3 py-1 rounded-full">Business Guide</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Choosing a digital agency is one of the most important decisions you'll make for your Lae business. The wrong choice can waste money, damage your brand, and set you back months. The right choice? It transforms your business, connects you with customers, and sets you up for sustainable growth.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              But how do you know which agencies are trustworthy and which ones will take your money and disappear? Let's talk about the red flags to watch for and what actually matters when choosing a partner.
            </p>

            {/* Red Flags Section */}
            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">🚩 Red Flags to Watch Out For</h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you see these warning signs, be very careful:
            </p>

            <div className="grid grid-cols-1 gap-6 mb-12">
              {redFlags.map((flag, idx) => (
                <div key={idx} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <div className="flex gap-4">
                    <div className="text-3xl shrink-0">{flag.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{flag.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{flag.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Green Flags Section */}
            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">✅ Green Flags: What to Look For</h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              These are the signs of a legitimate, trustworthy agency:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {greenFlags.map((flag, idx) => (
                <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <FaCheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                    <h3 className="text-lg font-bold text-gray-900">{flag.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{flag.description}</p>
                </div>
              ))}
            </div>

            {/* Questions to Ask */}
            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">❓ Questions to Ask Any Agency</h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Before hiring any agency, ask these specific questions:
            </p>

            <div className="bg-blue-50 rounded-lg p-8 mb-12 border border-blue-200">
              <ol className="space-y-4">
                {questions.map((question, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-blue-600 font-bold shrink-0">{idx + 1}.</span>
                    <span className="text-lg text-gray-700">{question}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Pay attention to HOW they answer, not just what they say. Do they give clear, honest answers? Or do they dodge questions and try to sell you before understanding your needs? Good agencies will answer these thoroughly.
            </p>

            {/* Why N30 */}
            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">Why N30 Digital Solutions Is Different</h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              As a startup digital agency based in Lae, we approach this differently. Here's what sets us apart:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {whyN30.map((item, idx) => (
                <div key={idx} className="bg-linear-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Real Example */}
            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">Real Example: How We Work</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Take Butibam Mantics Rugby Club. They came to us needing a website to manage their team, engage supporters, and build their brand. Here's what we did:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
                <span className="text-lg text-gray-700"><strong>We Asked Questions:</strong> We spent time understanding their goals, challenges, and vision before proposing anything</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
                <span className="text-lg text-gray-700"><strong>We Built the Right Solution:</strong> Custom website with admin tools, member management, and community features</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
                <span className="text-lg text-gray-700"><strong>We Launched & Supported:</strong> Didn't disappear after launch. We trained their team, fixed issues, and made improvements</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
                <span className="text-lg text-gray-700"><strong>We Stayed Available:</strong> They can still reach us with questions and updates. We're here for the long term</span>
              </li>
            </ul>

            {/* Key Takeaways */}
            <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white my-12">
              <h3 className="text-2xl font-bold mb-6">Key Takeaways</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <span className="text-lg">Don't choose based on price alone. The cheapest option is usually the worst option.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <span className="text-lg">Look for agencies with local experience and proven results in your area.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <span className="text-lg">Communication matters. Choose an agency that listens and responds quickly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <span className="text-lg">Post-launch support is critical. Make sure they stick around to help.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <span className="text-lg">Trust your gut. If something feels off, it probably is.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">Ready to Get Started the Right Way?</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you're looking for a digital agency that checks all these boxes, we'd love to talk. We're not the cheapest option, but we're committed to your success. We understand Lae businesses, we communicate clearly, and we deliver real results.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let's have a conversation about your goals and how we can help your business grow.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Let's Find the Perfect Solution for Your Business</h3>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free consultation and let's discuss your digital needs with no pressure or hidden agendas.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Schedule Your Free Consultation
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-20 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/blog/why-local-businesses-need-digital" className="group">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50">
                  <p className="text-sm text-blue-600 font-bold mb-2">ARTICLE</p>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Why Local Lae Businesses Need Digital Presence</h4>
                  <p className="text-gray-600 mt-2">Understand why being online matters for your business.</p>
                </div>
              </Link>
              
              <Link href="/blog/5-digital-mistakes-small-businesses" className="group">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50">
                  <p className="text-sm text-blue-600 font-bold mb-2">ARTICLE</p>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">5 Digital Mistakes Small Businesses Make</h4>
                  <p className="text-gray-600 mt-2">Avoid common pitfalls that hurt your digital presence.</p>
                </div>
              </Link>

              <Link href="/blog/butibam-mantics-case-study" className="group">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50">
                  <p className="text-sm text-blue-600 font-bold mb-2">CASE STUDY</p>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Butibam Mantics Success Story</h4>
                  <p className="text-gray-600 mt-2">Real results from a local Lae business partnership.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
