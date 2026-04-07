"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FileText, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechBadge from "./TechBadge";
import SocialLinks from "./SocialLinks";

gsap.registerPlugin(ScrollTrigger);

function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btnRef.current, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  return (
    <a
      ref={btnRef}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const desc1Ref = useRef<HTMLDivElement>(null);
  const desc2Ref = useRef<HTMLDivElement>(null);
  const desc3Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Avatar: scale up with bounce
      tl.fromTo(
        avatarRef.current,
        { scale: 0, opacity: 0, rotation: -10 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
      );

      // Heading: slide up with blur reveal
      tl.fromTo(
        headingRef.current,
        { y: 40, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7 },
        "-=0.4"
      );

      // Descriptions: staggered fade-blur
      tl.fromTo(
        [desc1Ref.current, desc2Ref.current, desc3Ref.current],
        { y: 20, opacity: 0, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.12,
        },
        "-=0.3"
      );

      // CTA buttons: slide up
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      );

      // Social links: stagger scale-in
      const socialIcons = socialRef.current?.querySelectorAll("a");
      if (socialIcons) {
        tl.fromTo(
          socialIcons,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: "back.out(2)",
          },
          "-=0.3"
        );
      }

      // Parallax on avatar
      gsap.to(avatarRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="pt-16 pb-8">
      <div className="max-w-[720px] mx-auto px-6">
        {/* Avatar */}
        <div ref={avatarRef} className="mb-6 opacity-0">
          <Image
            src="/me.jpg"
            alt="Luban Rahat"
            width={100}
            height={100}
            className="rounded-full border-2 border-border"
            priority
          />
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-[28px] sm:text-[32px] font-bold text-foreground leading-tight mb-5 opacity-0"
        >
          Hi, I&apos;m Luban{" "}
          <span className="text-muted-foreground">—</span> A Full Stack web
          developer.
        </h1>

        {/* Description with tech badges */}
        <div ref={desc1Ref} className="mb-2 opacity-0">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            I build interactive web apps using{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="TypeScript" />
            </span>{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="React" />
            </span>{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="Next.js" />
            </span>{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="Bun" />
            </span>
          </p>
        </div>

        <div ref={desc2Ref} className="mb-2 opacity-0">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            and{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="PostgreSQL" />
            </span>{" "}
            With a focus on{" "}
            <span className="text-foreground font-medium">UI</span> design.
            Enthusiastic about{" "}
            <span className="text-foreground font-semibold">Three.js</span>
          </p>
        </div>

        <div ref={desc3Ref} className="mb-6 opacity-0">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            , driven by a keen eye for design.
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex items-center gap-3 mb-6 opacity-0">
          <MagneticButton
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm text-foreground hover:bg-secondary hover:border-border transition-all duration-200"
          >
            <FileText size={15} />
            Resume / CV
          </MagneticButton>
          <MagneticButton
            href="mailto:hello@lubanrahat.dev"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground hover:bg-secondary/80 hover:border-border transition-all duration-200"
          >
            <Mail size={15} />
            Get in touch
          </MagneticButton>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="mb-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
