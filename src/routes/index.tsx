import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
import { useRef, useState, type CSSProperties } from "react";

import cinematicBackground from "@/assets/apology-cinematic-bg.jpg";
import { Button } from "@/components/ui/button";
import HandwritingText from "@/components/ui/handwriting-text";
import ScrollLockedVideoHero from "@/components/ui/scroll-locked-video-hero";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Letter From My Heart" },
      { name: "description", content: "A personal apology, written with love." },
      { property: "og:title", content: "A Letter From My Heart" },
      { property: "og:description", content: "A personal apology, written with love." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApologyPage,
});

const apologies = [
  {
    title: "Okay… I hear you.",
    copy: "I know one apology can’t instantly undo the worry I caused. I’m not asking you to forget it — just to believe that I understand why you’re upset, and that I’m listening.",
  },
  {
    title: "One more tiny plea?",
    copy: "You matter far too much to me for me to brush this off. I’ll show you through my choices that your concern reached me. I really do want to make this right.",
  },
  {
    title: "Bestie, please?",
    copy: "I’m officially running out of dignified ways to ask, but never out of reasons to care. I’m sorry I made your heart carry worry that should never have been yours.",
  },
  {
    title: "My final, very serious appeal…",
    copy: "I brought sincerity, accountability, and my last two functioning brain cells. Both brain cells agree: you’re right to care, I’m lucky to have you, and I owe you better.",
  },
];

const promises = [
  ["01", "Dinner first", "I’ll eat properly instead of skipping what my body needs."],
  ["02", "Rest with intention", "After Isha, I’ll be in bed around nine — not endlessly scrolling."],
  ["03", "Take care, consistently", "Not just because you asked, but because I know it matters."],
];

function FloatingHearts({ celebration = false }: { celebration?: boolean }) {
  const count = celebration ? 36 : 12;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => {
        const x = (index * 37) % 96;
        const delay = (index % 9) * 0.38;
        const style = celebration
          ? ({
              left: `${48 + ((index % 7) - 3) * 2}%`,
              top: "50%",
              "--burst-x": `${((index * 71) % 620) - 310}px`,
              "--burst-y": `${-180 - ((index * 53) % 480)}px`,
              animation: `celebrate ${1.5 + (index % 5) * 0.22}s ${delay / 4}s cubic-bezier(.17,.84,.44,1) forwards`,
            } as CSSProperties)
          : ({
              left: `${x}%`,
              bottom: `${-5 - (index % 4) * 2}%`,
              animation: `float-heart ${7 + (index % 5)}s ${delay}s ease-in-out infinite`,
            } as CSSProperties);
        return index % 3 === 0 ? (
          <Heart key={index} className="absolute size-3 text-gold/70" style={style} />
        ) : (
          <span key={index} className="absolute size-1 rounded-full bg-paper/60" style={style} />
        );
      })}
    </div>
  );
}

function Envelope({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return (
    <ScrollLockedVideoHero className="relative mx-auto w-[min(86vw,520px)]">
      <motion.button
        type="button"
        onClick={onOpen}
        disabled={opened}
        aria-label="Open the letter"
        className="group relative block aspect-[1.55/1] w-full cursor-pointer border-0 bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        animate={opened ? { y: 20, scale: 0.96 } : { y: [0, -7, 0] }}
        transition={opened ? { duration: 0.7 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-md bg-wine shadow-[0_32px_90px_oklch(0.08_0.03_20_/_0.55)]">
          <div className="absolute inset-x-0 bottom-0 h-[78%] bg-wine-soft [clip-path:polygon(0_0,50%_62%,100%_0,100%_100%,0_100%)]" />
          <motion.div
            className="absolute inset-x-0 top-0 z-20 h-[60%] origin-top bg-wine [clip-path:polygon(0_0,100%_0,50%_100%)]"
            animate={{ rotateX: opened ? 178 : 0 }}
            transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.div
            className="paper-grain absolute inset-x-[8%] bottom-[8%] z-10 h-[82%] rounded-sm bg-paper p-7 text-left shadow-2xl"
            animate={{ y: opened ? "-63%" : "14%" }}
            transition={{ delay: opened ? 0.5 : 0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-handwriting text-3xl text-wine">For my best friend,</p>
            <div className="mt-5 space-y-3 opacity-20">
              <div className="h-px w-full bg-foreground" /><div className="h-px w-11/12 bg-foreground" />
              <div className="h-px w-full bg-foreground" /><div className="h-px w-4/5 bg-foreground" />
            </div>
          </motion.div>
          <div className="absolute inset-y-0 left-0 z-30 w-[54%] bg-wine [clip-path:polygon(0_0,100%_50%,0_100%)]" />
          <div className="absolute inset-y-0 right-0 z-30 w-[54%] bg-wine-soft [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
          <motion.div
            className="absolute left-1/2 top-1/2 z-40 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/35 bg-wine shadow-love"
            animate={opened ? { scale: 0, opacity: 0, rotate: 30 } : { scale: 1, opacity: 1 }}
          >
            <Heart className="size-6 fill-gold text-gold" />
          </motion.div>
        </div>
      </motion.button>
    </ScrollLockedVideoHero>
  );
}

function ApologyPage() {
  const [opened, setOpened] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [forgiven, setForgiven] = useState(false);
  const storyRef = useRef<HTMLElement>(null);

  const openLetter = () => {
    if (opened) return;
    setOpened(true);
    window.setTimeout(() => storyRef.current?.scrollIntoView({ behavior: "smooth" }), 1300);
  };

  return (
    <main className="bg-ink text-paper">
      <section className="relative min-h-dvh overflow-hidden">
        <img src={cinematicBackground} alt="A sealed letter waiting in warm evening light" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-cinematic-overlay" />
        <FloatingHearts />
        <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-5 py-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-paper/65">
            One honest letter
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="mb-8 max-w-3xl font-serif text-5xl italic leading-[0.95] md:text-7xl lg:text-8xl">
            I owe you an apology.
          </motion.h1>
          <Envelope opened={opened} onOpen={openLetter} />
          <motion.div animate={{ opacity: opened ? 0 : 1 }} className="mt-8 flex items-center gap-2 text-sm text-paper/70">
            <Sparkles className="size-4 text-gold" /> Tap the seal to open
          </motion.div>
          <AnimatePresence>
            {opened && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.22em] text-paper/60">
                Read my heart <ArrowDown className="size-4 animate-bounce" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section ref={storyRef} className="relative h-[230vh] bg-ink">
        <SmoothScrollHero image={cinematicBackground} containerRef={storyRef}>
          <div className="relative z-10 flex h-full items-center justify-center px-4 py-8 md:px-8">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              className="paper-grain max-h-[86dvh] w-full max-w-3xl overflow-y-auto rounded-md border border-glass-border bg-paper/95 px-6 py-8 text-foreground shadow-glass backdrop-blur-xl md:px-14 md:py-12"
            >
              <div className="mb-7 flex items-center justify-between border-b border-border pb-5">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">From me, honestly</span>
                <Heart className="size-5 fill-primary text-primary" />
              </div>
              <h2 className="mb-7 font-serif text-4xl italic md:text-6xl">My dear best friend,</h2>
              <div className="space-y-5 text-[15px] leading-8 text-foreground/85 md:text-lg md:leading-9">
                <p>I&apos;m really sorry. I know you&apos;re angry with me because you feel like I&apos;m not taking care of myself, and I&apos;m sorry that I made you worry about me.</p>
                <p>I want you to know that I am taking care of myself, and I promise I&apos;ll keep doing that. I can&apos;t sleep right after Maghrib because I still need to have dinner, and if I sleep then, I won&apos;t be able to eat properly. If I wake up for Isha after sleeping at Maghrib, I&apos;ll probably wake up with a headache too.</p>
                <p>My plan is to sleep right after Isha, which means I&apos;m in bed around 9, and I wake up at 4:30. That&apos;s a lot of sleep, and I&apos;m going to make sure I&apos;m taking care of myself properly.</p>
                <p>I don&apos;t want you to worry about me.</p>
              </div>
              <div className="mt-8 text-right text-4xl text-primary md:text-5xl">
                <HandwritingText text="Please forgive me. I really am sorry." />
              </div>
            </motion.article>
          </div>
        </SmoothScrollHero>
      </section>

      <section className="relative bg-background px-5 py-24 text-foreground md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Not empty words</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <h2 className="font-serif text-5xl italic leading-none md:text-7xl">What I’ll do better.</h2>
            <p className="max-w-xl text-muted-foreground">Your care isn’t a punishment. It’s something precious — and I want my actions to make you feel heard.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {promises.map(([number, title, copy], index) => (
              <motion.article key={number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.14 }} className="rounded-md border border-border bg-card p-7 shadow-sm">
                <span className="font-serif text-3xl italic text-primary/45">{number}</span>
                <h3 className="mt-10 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-wine px-5 py-20 text-primary-foreground">
        <FloatingHearts celebration={forgiven} />
        <AnimatePresence mode="wait">
          {!forgiven ? (
            <motion.div key={noCount} initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 1.03 }} className="relative z-10 mx-auto max-w-2xl text-center">
              {noCount === 0 ? (
                <>
                  <Heart className="mx-auto mb-8 size-9 fill-gold text-gold" />
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/60">The only question</p>
                  <h2 className="font-serif text-6xl italic md:text-8xl">Am I forgiven?</h2>
                </>
              ) : (
                <>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/60">Attempt {noCount + 1}</p>
                  <h2 className="font-serif text-5xl italic md:text-7xl">{apologies[noCount - 1]?.title}</h2>
                  <p className="mx-auto mt-6 max-w-xl leading-8 text-primary-foreground/75">{apologies[noCount - 1]?.copy}</p>
                </>
              )}
              <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="glass" size="lg" onClick={() => setForgiven(true)} className="min-w-40">
                  <Heart className="fill-current" /> YES
                </Button>
                {noCount < apologies.length ? (
                  <Button variant="glass" size="lg" onClick={() => setNoCount((count) => Math.min(count + 1, apologies.length))} className="min-w-40">NO</Button>
                ) : (
                  <Button variant="glass" size="lg" onClick={() => setForgiven(true)} className="min-w-40">
                    <Heart className="fill-current" /> YES
                  </Button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div key="forgiven" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, damping: 12 }} className="relative z-10 mx-auto max-w-3xl text-center">
              <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.15, 1] }} transition={{ duration: 0.8 }} className="mb-7 text-6xl">😭❤️</motion.div>
              <h2 className="font-serif text-6xl italic md:text-8xl">Thank you.</h2>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/80 md:text-2xl md:leading-10">You’re the most amazing person and the most amazing bestie ever. I’m really grateful for you.</p>
              <p className="mt-10 font-handwriting text-4xl text-gold md:text-5xl">More than I know how to say.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}