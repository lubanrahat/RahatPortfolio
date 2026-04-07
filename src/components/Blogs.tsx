"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: "1",
    title: "Building Scalable APIs with Next.js and TypeScript",
    image: "/blog1.png",
    url: "#",
  },
  {
    id: "2",
    title: "My Developer Journey: Lessons Learned",
    image: "/project3.png",
    url: "#",
  },
];

export default function Blogs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="blogs" className="py-12">
      <div className="max-w-[720px] mx-auto px-6">
        <div ref={headingRef} className="mb-6 opacity-0">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Featured
          </p>
          <h2 className="text-2xl font-bold text-foreground">Blogs</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogs.map((blog, i) => (
            <a
              key={blog.id}
              href={blog.url}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group relative rounded-xl overflow-hidden aspect-[16/10] block opacity-0 border border-transparent hover:border-indigo-500/20 transition-all duration-500"
            >
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20" />

              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              {/* Title with slide-up */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-semibold text-foreground leading-snug transition-transform duration-300 group-hover:-translate-y-1">
                  {blog.title}
                </h3>
                {/* Underline animation */}
                <div className="h-px mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
