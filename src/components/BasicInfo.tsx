'use client';

import { useTranslations, useMessages } from 'next-intl';

type Entry = { key: string; title: string; value: string; wide?: boolean };

const BASIC_INFO_KEYS = [
  { key: 'officialName', wide: false },
  { key: 'otherNames', wide: true },
  { key: 'type', wide: false },
  { key: 'googleRating', wide: false },
  { key: 'country', wide: false },
  { key: 'region', wide: false },
  { key: 'province', wide: false },
  { key: 'district', wide: false },
  { key: 'municipality', wide: false },
  { key: 'city', wide: false },
  { key: 'address', wide: true },
  { key: 'plusCode', wide: false },
  { key: 'altitude', wide: false },
  { key: 'waterfallHeight', wide: false },
  { key: 'geologicalFormation', wide: true },
  { key: 'catchmentArea', wide: false },
  { key: 'annualFlow', wide: false },
  { key: 'avgAirTemp', wide: false },
  { key: 'annualRainfall', wide: false },
  { key: 'natura2000', wide: true },
  { key: 'accessibilityGrade', wide: false },
  { key: 'protectionLevel', wide: true },
];

export default function BasicInfo() {
  const t = useTranslations('basicInfo');
  const messages = useMessages() as any;
  const base = messages?.basicInfo || {};

  const entries: Entry[] = BASIC_INFO_KEYS.map((k) => {
    const title = base[k.key] ? base[k.key] : t(k.key);
    const value = base[`${k.key}Value`] ? base[`${k.key}Value`] : t(`${k.key}Value`);
    return { key: k.key, title, value, wide: k.wide };
  }).filter((e) => e.value && e.value !== `${e.key}Value`);

  return (
    <section
      id="basic-info"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <div
              key={entry.key}
              className={entry.wide ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <InfoCard title={entry.title} value={entry.value} wide={entry.wide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  value,
  wide,
}: {
  title: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 h-full ${wide ? '' : ''}`}
      style={{
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-color)',
      }}
    >
      <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
        {title}
      </p>
      <p
        className="font-medium leading-relaxed"
        style={{ color: 'var(--text-primary)' }}
      >
        {value}
      </p>
    </div>
  );
}
