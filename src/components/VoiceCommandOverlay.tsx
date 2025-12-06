import { useState, useEffect } from "react";
import { Mic, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export function VoiceCommandOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Keyboard shortcut to toggle voice command (Ctrl+Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === "Space") {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsListening(true);
      setTranscript("Listening...");

      // Simulate voice recognition
      const timer = setTimeout(() => {
        setTranscript("Create a new marketing project for Q3");
        setIsListening(false);

        // Simulate execution
        setTimeout(() => {
          setIsOpen(false);
          toast.success("Project 'Q3 Marketing' created successfully");
          setTranscript("");
        }, 1500);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsListening(false);
      setTranscript("");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4"
        >
          <div className="bg-background/95 backdrop-blur-md border shadow-2xl rounded-2xl p-6 flex flex-col items-center gap-4 min-w-[320px]">
            <div className="relative">
              <div className={`h-16 w-16 rounded-full flex items-center justify-center ${
                isListening ? "bg-red-500 text-white animate-pulse" : "bg-primary text-primary-foreground"
              }`}>
                {isListening ? <Mic className="h-8 w-8" /> : <Loader2 className="h-8 w-8 animate-spin" />}
              </div>
              {isListening && (
                <div className="absolute -inset-2 bg-red-500/20 rounded-full blur animate-pulse"></div>
              )}
            </div>

            <div className="text-center">
              <p className="font-semibold text-lg">AI Voice Assistant</p>
              <p className="text-muted-foreground">{transcript}</p>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            Press Ctrl + Space to toggle
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
