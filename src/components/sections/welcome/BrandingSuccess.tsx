import { motion } from "motion/react";
import Link from "next/link";

export default function BrandingSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen flex-col items-center justify-center gap-8 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-10"
      >
        <p className="font-articulat tracking-tighter text-simmer-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          We&apos;ll get <strong>cooking</strong> &<br />
          get back to you soon.
        </p>
        <Link
          href="/"
          className="rounded-full border-2 border-black bg-simmer-white px-10 pb-5 pt-6 font-adelle-mono text-xl text-black hover:bg-simmer-yellow"
        >
          BACK TO HOME
        </Link>
      </motion.div>
    </motion.div>

    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    //   className="px-5 py-10 lg:px-16 lg:py-20"
    // >
    //   <h2 className="mb-6 text-3xl font-bold text-simmer-white lg:text-4xl">
    //     Thank You!
    //   </h2>
    //   <p className="text-lg text-simmer-white lg:text-xl">
    //     We've received your branding questionnaire. Our team will review your
    //     responses and get back to you soon to discuss the next steps in bringing
    //     your brand vision to life.
    //   </p>
    // </motion.div>
  );
}
