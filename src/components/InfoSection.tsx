import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';

function parseRichText(text: string): (string | ReactNode)[] {
  const regex = /<(\/?)(b|i)>/g;
  const stack: { tag: string; start: number }[] = [];
  const elements: { open: number; close: number; tag: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const isClose = match[1] === '/';
    const tag = match[2];
    if (!isClose) {
      stack.push({ tag, start: match.index + match[0].length });
    } else {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tag === tag) {
          elements.push({ open: stack[i].start - (`<${tag}>`).length, close: match.index, tag });
          stack.splice(i, 1);
          break;
        }
      }
    }
  }

  const markers = elements.flatMap((e) => [
    { pos: e.open, type: 'open' as const, tag: e.tag },
    { pos: e.close, type: 'close' as const, tag: e.tag },
  ]).sort((x, y) => x.pos - y.pos);

  let cursor = 0;
  const result: (string | ReactNode)[] = [];
  const active: { tag: string; children: (string | ReactNode)[]; key: string }[] = [];
  let keyCounter = 0;

  function pushText(s: string) {
    if (!s) return;
    if (active.length === 0) {
      result.push(s);
    } else {
      active[active.length - 1].children.push(s);
    }
  }

  function buildNode(tag: string, children: (string | ReactNode)[], k: string): ReactNode {
    if (tag === 'b') {
      return <strong key={k} style={{ color: 'var(--text-primary)' }}>{children}</strong>;
    }
    return <i key={k}>{children}</i>;
  }

  for (const m of markers) {
    if (m.pos > cursor) pushText(text.slice(cursor, m.pos));
    if (m.type === 'open') {
      active.push({ tag: m.tag, children: [], key: `rt-${keyCounter++}` });
      cursor = m.pos + (`<${m.tag}>`).length;
    } else {
      cursor = m.pos + (`</${m.tag}>`).length;
      const foundIdx = active.map((a) => a.tag).lastIndexOf(m.tag);
      if (foundIdx >= 0) {
        const [node] = active.splice(foundIdx, 1);
        const el = buildNode(node.tag, node.children, node.key);
        if (active.length === 0) result.push(el);
        else active[active.length - 1].children.push(el);
      }
    }
  }

  pushText(text.slice(cursor));
  return result.length > 0 ? result : [text];
}

export default function InfoSection() {
  const t = useTranslations('knowledge');
  const messages = useMessages() as any;
  const sections = (messages?.knowledge?.sections || []) as Array<{ id: string; title: string; content: string }>;

  return (
    <section id="knowledge" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`flex flex-col md:flex-row gap-6 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ background: 'var(--accent)', color: 'white' }}>
                    {index + 1}
                  </div>
                  <h3
                    className="font-display text-2xl font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {section.title}
                  </h3>
                </div>
                <p
                  className="text-lg leading-relaxed ml-14"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {parseRichText(section.content)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
