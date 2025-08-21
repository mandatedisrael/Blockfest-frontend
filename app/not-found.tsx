import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#1A3461] to-[#005DFF]">
      <div className="max-w-md w-full text-center text-white">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#F2CB45] mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-200 mb-6">
            The page you&apos;re looking for doesn&apos;t exist. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full bg-[#F2CB45] hover:bg-[#F2CB45]/90 text-black font-semibold">
              Go Home
            </Button>
          </Link>

          <Link href="/#about">
            <Button
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-[#1B64E4]"
            >
              Learn About Blockfest
            </Button>
          </Link>

          <Link href="/#speakers">
            <Button
              variant="ghost"
              className="w-full text-white hover:bg-white/10"
            >
              View Speakers
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-300">
          <p>
            Looking for something specific?{" "}
            <a
              href="mailto:support@blockfestafrica.com"
              className="text-[#F2CB45] hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
