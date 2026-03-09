"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.50 }}
    >
      {children}
    </motion.div>
  );
}
// The transition written in global.css works only once bcoz it doent rerender for navigation
//whereas template.tsx rerenders for every navigation
// still this doesnt happen between dynamic routes as aticle/1 and aticle/2
// Inorder to happen so the template should again be placed inside [id] folde
