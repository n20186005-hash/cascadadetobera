'use client';

import { useTranslations, useMessages } from 'next-intl';

const CATEGORY_STYLES: Record<string, { bg: string; fg: string; bar: string; dot: string }> = {
  prehistory:    { bg: '#faf5f0', fg: '#5c3a1c', bar: '#b48a63', dot: '#8b5a2b' },
  ancient:       { bg: '#f6f2e7', fg: '#5a4820', bar: '#b89e5a', dot: '#92742c' },
  medieval:      { bg: '#efedf4', fg: '#3d2f5c', bar: '#8c7eb2', dot: '#6a5991' },
  earlyModern:   { bg: '#eef1f4', fg: '#203d4e', bar: '#6e96b3', dot: '#4b7088' },
  modern:        { bg: '#f2ecee', fg: '#5c2936', bar: '#b57588', dot: '#8f4c62' },
  contemporary:  { bg: '#eaf2ec', fg: '#224b34', bar: '#6fa986', dot: '#4c8766' },
  _default:      { bg: '#f2f2f2', fg: '#333',    bar: '#888',    dot: '#555' },
};

export default function CulturalTimeline() {
  const t = useTranslations('timeline');
  const messages = useMessages() as any;
  const blocks = messages?.timeline?.blocks || [];
  const legend = messages?.timeline?.legend || {};
  const categories = Object.keys(CATEGORY_STYLES);

  const style = (cat: string) => CATEGORY_STYLES[cat] || CATEGORY_STYLES._default;

  return (
    <section
      id="cultural-timeline"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div
          className="mb-10 p-4 rounded-xl text-xs sm:text-sm border"
          style={{
            background: 'var(--bg-secondary)',
            borderStyle: 'dashed',
            borderColor: 'var(--border-soft)',
            color: 'var(--text-muted)',
          }}
        >
          <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
            {categories.map((c) => {
              const s = style(c);
              const label = legend[c] || c;
              return (
                <div key={c} className="flex items-center gap-2">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ background: s.dot }}
                  />
                  <span style={{ color: s.fg, fontWeight: 500 }}>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative pl-8 sm:pl-12">
          <div
            className="absolute left-3 sm:left-5 top-0 bottom-0 w-px"
            style={{ background: 'var(--border-soft)' }}
          />
          <div className="space-y-8">
            {blocks.map((b: any, i: number) => {
              const s = style(b.category || '_default');
              return (
                <div key={i} className="relative">
                  <span
                    className="absolute -left-[38px] sm:-left-[52px] top-1 w-4 h-4 rounded-full border-2"
                    style={{
                      background: s.bg,
                      borderColor: s.dot,
                    }}
                  />
                  <div
                    className="rounded-xl border p-5"
                    style={{
                      background: s.bg,
                      borderStyle: 'dashed',
                      borderColor: s.bar,
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md"
                        style={{ background: s.bar, color: '#fff' }}
                      >
                        {b.period}
                      </span>
                      <h3
                        className="text-base sm:text-lg font-semibold"
                        style={{ color: s.fg }}
                      >
                        {b.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm sm:text-[15px] leading-relaxed"
                      style={{ color: 'var(--text-primary)', opacity: 0.9 }}
                    >
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
