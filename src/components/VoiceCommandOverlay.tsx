import { useState, useEffect, useRef } from "react";
import { Mic, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useAppStore } from "@/lib/store";

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  } & Iterable<unknown>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpeechRecognitionInstance = any;

export function VoiceCommandOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const { addProject } = useAppStore();
  const recognitionRef = useRef<SpeechRecognitionInstance>(null);

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
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const currentTranscript = Array.from(event.results as unknown as ArrayLike<unknown>)
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((result: any) => result[0].transcript)
          .join('');
        setTranscript(currentTranscript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        handleCommand(transcript);
      };
    }
  }, [transcript]);

  const handleCommand = (text: string) => {
    if (!text) return;

    const lowerText = text.toLowerCase();

    if (lowerText.includes("create project") || lowerText.includes("new project")) {
      addProject({
        name: "Voice Created Project",
        description: `Created from voice command: "${text}"`,
        status: "planning",
        progress: 0,
        dueDate: new Date(),
        team: [],
        category: "Development",
        priority: "medium"
      });
      toast.success("Project created from voice command!");
      setTimeout(() => setIsOpen(false), 1500);
    } else {
      toast.info(`Heard: "${text}" (No action mapped)`);
      setTimeout(() => setIsOpen(false), 2000);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsListening(true);
      setTranscript("Listening...");
      recognitionRef.current?.start();
    } else {
      setIsListening(false);
      setTranscript("");
      recognitionRef.current?.stop();
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
            Try saying "Create Project"
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
