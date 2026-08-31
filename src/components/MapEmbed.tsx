import { useTranslations, useLocale } from 'next-intl';

const OFFICIAL_URLS = [
  { key: 'spainTourism', href: 'https://www.spain.info/' },
  { key: 'castillaLeon', href: 'https://www.turismocastillayleon.com/' },
  { key: 'burgos', href: 'https://turismoburgos.org/' },
  { key: 'frias', href: 'http://www.ciudaddefrias.es/' },
  { key: 'naturalHeritage', href: 'https://patrimonionatural.org/' },
  { key: 'natura2000', href: 'https://ec.europa.eu/environment/nature/natura2000/' },
];

const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5211.098599278844!2d-3.3049858!3d42.7500214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4f6c31bfc6e4b7%3A0x17267225826c5ebd!2sCascada%20de%20Tobera!5e1!3m2!1szh-CN!2s!4v1788145426607!5m2!1szh-CN!2s';

const ALT_I18N: Record<string, string> = {
  es: 'Mapa de ubicación de la Cascada de Tobera en Tobera, Burgos, España',
  en: 'Location map of Cascada de Tobera in Tobera, Burgos, Spain',
  zh: '托贝拉瀑布 Cascada de Tobera 地理位置地图（西班牙布尔戈斯托贝拉）',
};

export default function MapEmbed() {
  const t = useTranslations('mapSection');
  const tOff = useTranslations('footer');
  const locale = useLocale();
  const title = ALT_I18N[locale] || ALT_I18N.es;

  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div
          className="map-container relative rounded-xl overflow-hidden shadow-lg"
          style={{ border: '1px solid var(--map-border)' }}
        >
          <iframe
            src={MAPS_EMBED_SRC}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title={title}
          />
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.app.goo.gl/7X96TBmK29sVp9Wp7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('openMaps')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--border-color)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h3 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {tOff('officialResourcesTitle')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OFFICIAL_URLS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm py-1.5"
                style={{ color: 'var(--accent)' }}
              >
                {tOff(`officialLinks.${link.key}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
