'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState } from 'react';

type FAQItem = { question: string; answer: string };

export default function FAQSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const items: FAQItem[] = messages?.faq?.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-center mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-semibold pr-4" style={{ color: 'var(--text-primary)' }}>
                    {item.question}
                  </h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                    className="px-5 pb-5 pt-0 leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
