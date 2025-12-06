import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Plus,
  Moon,
  Sun,
  LogOut,
  Home,
  Briefcase,
  Users
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useAppStore } from "@/lib/store";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { setTheme, theme } = useTheme();
  const { addProject } = useAppStore();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
        >
          <Calculator className="h-6 w-6" />
        </button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => runCommand(() => navigate("/projects"))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/calendar"))}>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/settings"))}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => runCommand(() => {
              addProject({
                name: "New Project (Cmd+K)",
                description: "Created via Command Menu",
                status: "planning",
                progress: 0,
                dueDate: new Date(),
                team: [],
                category: "Development",
                priority: "medium"
              });
              toast.success("Quick project created!");
              navigate("/projects");
            })}>
              <Plus className="mr-2 h-4 w-4" />
              <span>Create New Project</span>
            </CommandItem>

            <CommandItem onSelect={() => runCommand(() => {
              setTheme(theme === "dark" ? "light" : "dark");
              toast.success(`Theme switched to ${theme === "dark" ? "light" : "dark"}`);
            })}>
              {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              <span>Toggle Theme</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Navigation">
             <CommandItem onSelect={() => runCommand(() => navigate("/"))}>
              <Home className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/teams"))}>
              <Users className="mr-2 h-4 w-4" />
              <span>Teams</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/profile"))}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/login"))}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
