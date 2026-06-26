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
      className="group flex w-full items-stretch overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)] active:translate-y-0 active:scale-[0.99]"
    >
      <span className="flex w-[4.25rem] shrink-0 items-center justify-center border-r border-black/[0.08] text-[#1a1a1a] transition group-hover:text-brand-green">
        <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={2.25} aria-hidden />
      </span>
      <span className="flex flex-1 items-center justify-center px-4 py-[1.15rem] font-display text-[1.35rem] leading-none tracking-[0.04em] text-[#1a1a1a] sm:text-[1.45rem]">
        {label}
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="page-bg min-h-screen">
      <main className="mx-auto flex min-h-screen w-full max-w-[22rem] flex-col items-center justify-center px-5 py-14 sm:max-w-[24rem] sm:px-6">
        <header className="mb-9 flex w-full flex-col items-center text-center">
          <div className="mb-6 flex h-[7.5rem] w-[7.5rem] items-center justify-center overflow-hidden rounded-full bg-black shadow-[0_0_0_3px_rgba(92,255,154,0.25),0_12px_40px_rgba(0,0,0,0.35)]">
            <img
              src="/pickwin-logo.png"
              alt="PickWin"
              className="h-[4.5rem] w-auto max-w-none object-contain"
            />
          </div>

          <h1 className="font-display text-[clamp(1.65rem,6.5vw,2.15rem)] tracking-[0.06em] text-white">
            PickWin social media
          </h1>

          <div className="mt-5 h-px w-full bg-white/30" />
        </header>

        <nav className="flex w-full flex-col gap-4" aria-label="Réseaux sociaux PickWin">
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
