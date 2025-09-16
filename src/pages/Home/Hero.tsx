import { Box } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box className="hero">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase tracking-wide text-sm text-orange-400 mb-2">
          Introducing your all-in-one finance solution
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simplifying Access to <br />
          Financial Services with <span className="text-orange-400">Ease</span>.
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Access your funds in real-time without waiting anytime, anywhere.
          Access your funds in real-time without.
        </p>
        <a
          href="#"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Get Started →
        </a>
      </div>
    </Box>
  );
}
