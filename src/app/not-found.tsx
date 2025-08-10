import { Loader2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <div className="text-center space-y-6">
        <Loader2
          className="h-20 w-20 animate-spin text-gray-600 mx-auto"
          aria-hidden="true"
        />
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-gray-900">
          Work in Progress
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          {`We're building something amazing! Please check back later.`}
        </p>
      </div>
    </div>
  );
}
