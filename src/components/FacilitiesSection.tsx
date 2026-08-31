'use client';

import { useTranslations, useMessages } from 'next-intl';

type FacilityBlock = {
  id: string;
  icon: string;
  title: string;
  distance: string;
  content: string;
};

const ICON_MAP: Record<string, string> = {
  wc: '🚻',
  parking: '🅿️',
  utensils: '🍴',
  bed: '🛏️',
  store: '🏪',
  plug: '🔌',
  plus: '➕',
  info: 'ℹ️',
};

export default function FacilitiesSection() {
  const t = useTranslations('facilities');
  const messages = useMessages() as any;
  const blocks: FacilityBlock[] = messages?.facilities?.blocks || [];

  return (
    <section
      id="facilities"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mt-2" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 my-6" style={{ background: 'var(--accent)' }} />

        <div
          role="note"
          className="p-4 rounded-lg border"
          style={{
            background: 'var(--bg-tertiary)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          {t('disclaimer')}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((block) => {
            const icon = ICON_MAP[block.icon] || '📍';
            return (
              <article
                key={block.id}
                className="rounded-xl p-5 flex flex-col"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px dashed var(--border-color)',
                }}
              >
                <div className="text-3xl">{icon}</div>
                <h3
                  className="font-semibold mt-3 text-lg"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {block.title}
                </h3>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {block.distance}
                </p>
                <p
                  className="mt-4 text-sm leading-relaxed pt-4"
                  style={{
                    color: 'var(--text-secondary)',
                    borderTop: '1px dashed var(--border-color)',
                  }}
                >
                  {block.content}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
