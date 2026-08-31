'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function CitationsSection() {
  const t = useTranslations('citations');
  const messages = useMessages() as any;
  const blocks = messages?.citations?.blocks || [];

  return (
    <section
      id="citations"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-10" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {blocks.map((b: any, i: number) => (
            <article
              key={i}
              className="rounded-xl border p-5 flex flex-col gap-3"
              style={{
                background: 'var(--bg-primary)',
                borderStyle: 'dashed',
                borderColor: 'var(--border-soft)',
              }}
            >
              <header
                className="flex items-center gap-3 pb-3 border-b"
                style={{ borderStyle: 'dashed', borderColor: 'var(--border-soft)' }}
              >
                <span
                  className="text-[11px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-md whitespace-nowrap"
                  style={{
                    background: 'var(--accent)',
                    color: '#fff',
                    opacity: 0.92,
                  }}
                >
                  {b.code}
                </span>
                <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {b.label}
                </div>
              </header>

              <div
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  说明 Note：
                </span>
                <span className="ml-1.5">{b.note}</span>
              </div>

              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-xs sm:text-sm font-medium break-all"
                style={{ color: 'var(--accent)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {b.url}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
