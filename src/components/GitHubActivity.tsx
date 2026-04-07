"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function GitHubActivity() {
  const { resolvedTheme } = useTheme();
  return (
    <motion.section
      id="github"
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="max-w-[720px] mx-auto px-6">
        <motion.div variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-foreground mb-1">
            GitHub Activity
          </h2>
          <p className="text-xs text-muted-foreground mb-6">
            lubanrahat&apos;s coding journey over the past year
          </p>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          variants={fadeInUp}
          className="overflow-x-auto pb-2 scrollbar-hide"
        >
          <div className="min-w-[680px] text-xs text-muted-foreground">
            <GitHubCalendar
              username="lubanrahat"
              colorScheme={resolvedTheme === "light" ? "light" : "dark"}
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              fontSize={12}
              blockSize={11}
              blockMargin={3}
              blockRadius={2}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
