import { Fragment } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Facebook, Instagram, Send } from 'lucide-react';

const SOCIAL_LINKS: { label: string; href: string; icon: LucideIcon }[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Pickwinca',
    icon: Facebook,
  },
  {
    label: 'Telegram',
    href: 'https://telegram.me/PiCk_Win_Support',
    icon: Send,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pickwin',
    icon: Instagram,
  },
];

function SocialLinkButton({
  label,
  href,
  icon: Icon,
}: {
  label: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-stretch overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] transition hover:border-brand-green/40 hover:bg-white/[0.09] active:scale-[0.99]"
    >
      <span className="flex w-14 shrink-0 items-center justify-center border-r border-white/10 bg-white/[0.04] text-brand-green transition group-hover:bg-brand-green/10">
        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
      </span>
      <span className="flex flex-1 items-center justify-center px-4 py-4 font-display text-lg tracking-wide text-white transition group-hover:text-brand-green sm:text-xl">
        {label}
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(92,255,154,0.08),_transparent_55%)]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-5 py-12 sm:px-6">
        <header className="mb-8 flex w-full flex-col items-center text-center">
          <div className="mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.05] p-3 shadow-[0_0_40px_rgba(92,255,154,0.12)]">
            <img src="/pickwin-logo.png" alt="PickWin" className="h-full w-full object-contain" />
          </div>

          <h1 className="font-display text-[clamp(1.75rem,7vw,2.5rem)] tracking-wide text-white">
            PickWin social media
          </h1>

          <div className="mt-4 h-px w-full max-w-[220px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </header>

        <nav className="flex w-full flex-col gap-3" aria-label="Réseaux sociaux PickWin">
          {SOCIAL_LINKS.map((link) => (
            <Fragment key={link.label}>
              <SocialLinkButton label={link.label} href={link.href} icon={link.icon} />
            </Fragment>
          ))}
        </nav>
      </main>
    </div>
  );
}
