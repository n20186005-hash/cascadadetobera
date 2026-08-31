'use client';

import { useTranslations, useMessages } from 'next-intl';

type StatusBlock = {
  id: string;
  status: string;
  updated: string;
  title: string;
  content: string;
};

function getStatusStyle(status: string): { label: string; bg: string; fg: string } {
  if (status.includes('✓') || status.includes('Finalizado') || status.includes('Done') || status.includes('已完成')) {
    return { label: status, bg: '#dcfce7', fg: '#166534' };
  }
  if (status.includes('🔨') || status.includes('En curso') || status.includes('Ongoing') || status.includes('施工中')) {
    return { label: status, bg: '#fff7ed', fg: '#9a3412' };
  }
  if (status.includes('📅') || status.includes('Programado') || status.includes('Planned') || status.includes('计划中')) {
    return { label: status, bg: '#dbeafe', fg: '#1e40af' };
  }
  if (status.includes('⚠️') || status.includes('Alerta') || status.includes('Warning') || status.includes('Alert') || status.includes('警示')) {
    return { label: status, bg: '#fee2e2', fg: '#991b1b' };
  }
  if (status.includes('ℹ️') || status.includes('Nota') || status.includes('Note') || status.includes('提示') || status.includes('Info')) {
    return { label: status, bg: '#f3f4f6', fg: '#374151' };
  }
  return { label: status, bg: 'var(--bg-tertiary)', fg: 'var(--text-secondary)' };
}

export default function RestorationStatusSection() {
  const t = useTranslations('restorationStatus');
  const messages = useMessages() as any;
  const blocks: StatusBlock[] = messages?.restorationStatus?.blocks || [];

  return (
    <section
      id="status"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
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

        <p
          className="p-4 rounded-lg leading-relaxed border-l-4"
          style={{
            background: 'var(--bg-tertiary)',
            borderLeftColor: 'var(--accent)',
            color: 'var(--text-secondary)',
          }}
        >
          {t('intro')}
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block) => {
            const style = getStatusStyle(block.status);
            return (
              <article
                key={block.id}
                className="rounded-xl p-5 flex flex-col"
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ background: style.bg, color: style.fg }}
                  >
                    {style.label}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {block.updated}
                  </span>
                </div>
                <h3
                  className="font-semibold mt-4 text-lg"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {block.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed pt-3"
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
