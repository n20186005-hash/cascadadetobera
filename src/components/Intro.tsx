import { useTranslations, useMessages, useLocale } from 'next-intl';

const BREADCRUMB_I18N: Record<string, { full: string; city: string; state: string; country: string }> = {
  es: { full: 'Cascada de Tobera', city: 'Tobera', state: 'Burgos', country: 'España' },
  en: { full: 'Cascada de Tobera', city: 'Tobera', state: 'Burgos', country: 'Spain' },
  zh: { full: '托贝拉瀑布（Cascada de Tobera）', city: '托贝拉', state: '布尔戈斯省', country: '西班牙' },
};

export default function Intro() {
  const t = useTranslations('intro');
  const tOff = useTranslations('officialManagement');
  const tSem = useTranslations('semantic');
  const messages = useMessages() as any;
  const locale = useLocale();
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];
  const bc = BREADCRUMB_I18N[locale] || BREADCRUMB_I18N.es;

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <nav
          aria-label="breadcrumb"
          className="mb-8 p-4 rounded-lg text-sm"
          style={{ background: 'var(--bg-tertiary)', border: '1px dashed var(--border-color)' }}
        >
          <ol className="flex flex-wrap items-center gap-2" style={{ color: 'var(--text-muted)' }}>
            <li className="font-medium" style={{ color: 'var(--text-primary)' }}>{bc.full}</li>
            <li aria-hidden="true">›</li>
            <li>{bc.city}</li>
            <li aria-hidden="true">›</li>
            <li>{bc.state}</li>
            <li aria-hidden="true">›</li>
            <li>{bc.country}</li>
          </ol>
        </nav>

        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {tSem.rich('equivalence', {
            b: (chunks) => <strong style={{ color: 'var(--text-primary)' }}>{chunks}</strong>,
            i: (chunks) => <i>{chunks}</i>,
          })}
        </p>

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t.rich('description', {
            b: (chunks) => <strong style={{ color: 'var(--text-primary)' }}>{chunks}</strong>,
            i: (chunks) => <i>{chunks}</i>,
          })}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border-l-4" style={{ background: 'var(--bg-tertiary)', borderLeftColor: 'var(--accent)' }}>
          <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tSem('nearbyTitle')}
          </h3>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {tSem.rich('nearby', {
              b1: (chunks) => <strong style={{ color: 'var(--text-primary)' }}>{chunks}</strong>,
              b2: (chunks) => <strong style={{ color: 'var(--text-primary)' }}>{chunks}</strong>,
              b3: (chunks) => <strong style={{ color: 'var(--text-primary)' }}>{chunks}</strong>,
              b4: (chunks) => <strong style={{ color: 'var(--text-primary)' }}>{chunks}</strong>,
              b5: (chunks) => <strong style={{ color: 'var(--text-primary)' }}>{chunks}</strong>,
              i: (chunks) => <i>{chunks}</i>,
            })}
          </p>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>
      </div>
    </section>
  );
}
