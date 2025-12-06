import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-9xl font-black text-primary/20">404</h1>
      <h2 className="text-3xl font-bold mt-4">Page not found</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </Button>
    </div>
  );
}
