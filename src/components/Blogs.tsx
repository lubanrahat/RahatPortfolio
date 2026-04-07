"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
  return (
    <motion.section
      id="blogs"
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="max-w-[720px] mx-auto px-6">
        <motion.div variants={fadeInUp} className="mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Featured
          </p>
          <h2 className="text-2xl font-bold text-foreground">Blogs</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              variants={fadeInUp}
              className="group relative rounded-xl overflow-hidden aspect-[16/10] card-hover block"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {blog.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
