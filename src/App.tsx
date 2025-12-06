import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layouts
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PublicLayout } from "@/layouts/PublicLayout";

// Auth Pages
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import TwoFactor from "@/pages/auth/TwoFactor";
import Welcome from "@/pages/onboarding/Welcome";
import OnboardingComplete from "@/pages/onboarding/OnboardingComplete";

// Public Pages
import AboutUs from "@/pages/public/AboutUs";
import ContactUs from "@/pages/public/ContactUs";
import PrivacyPolicy from "@/pages/public/PrivacyPolicy";
import TermsOfService from "@/pages/public/TermsOfService";
import CookiePolicy from "@/pages/public/CookiePolicy";
import SystemStatus from "@/pages/public/SystemStatus";
import NotFound from "@/pages/public/NotFound";

// Dashboard Pages
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Teams from "./pages/Teams";
import BrandIdentity from "./pages/BrandIdentity";
import BusinessPlans from "./pages/BusinessPlans";
import MarketingPlanner from "./pages/MarketingPlanner";
import MarketResearch from "./pages/MarketResearch";
import Calendar from "./pages/Calendar";
import PersonalizationSetup from "./pages/PersonalizationSetup";
import PlanComparison from "./pages/PlanComparison";
import ProjectTemplates from "./pages/ProjectTemplates";
import BrainstormingOptions from "./pages/BrainstormingOptions";
import AIAgent from "./pages/AIAgent";
import CompetitiveAnalysis from "./pages/CompetitiveAnalysis";
import FinancialProjections from "./pages/FinancialProjections";
import TeamInvite from "./pages/TeamInvite";
import LegalCompliance from "./pages/LegalCompliance";
import HelpSupport from "./pages/HelpSupport";
import Academy from "./pages/Academy";
import DataImport from "./pages/DataImport";
import ArchivedProjects from "./pages/ArchivedProjects";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
import BusinessPlan from "./pages/BusinessPlan";
import Integrations from "./pages/Integrations";
import ActivityFeed from "./pages/ActivityFeed";
// New Dashboard Pages
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Referral from "./pages/Referral";
import SettingsPage from "./pages/settings/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/2fa" element={<TwoFactor />} />
              <Route path="/onboarding/welcome" element={<Welcome />} />
              <Route path="/onboarding/complete" element={<OnboardingComplete />} />

              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/status" element={<SystemStatus />} />

              <Route path="/404" element={<NotFound />} />
            </Route>

            {/* Dashboard Routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/brand-identity" element={<BrandIdentity />} />
              <Route path="/business-plans" element={<BusinessPlans />} />
              <Route path="/marketing-planner" element={<MarketingPlanner />} />
              <Route path="/market-research" element={<MarketResearch />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/personalization" element={<PersonalizationSetup />} />
              <Route path="/plans" element={<PlanComparison />} />
              <Route path="/templates" element={<ProjectTemplates />} />
              <Route path="/brainstorming" element={<BrainstormingOptions />} />
              <Route path="/ai-agent" element={<AIAgent />} />
              <Route path="/competitive-analysis" element={<CompetitiveAnalysis />} />
              <Route path="/financial-projections" element={<FinancialProjections />} />
              <Route path="/team-invite" element={<TeamInvite />} />
              <Route path="/legal-compliance" element={<LegalCompliance />} />
              <Route path="/help-support" element={<HelpSupport />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/data-import" element={<DataImport />} />
              <Route path="/archived-projects" element={<ArchivedProjects />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/business-plan" element={<BusinessPlan />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/activity" element={<ActivityFeed />} />

              {/* New Routes */}
              <Route path="/community" element={<Community />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/settings" element={<SettingsPage />} />

              {/* Redirect legacy/alias routes if any */}
              <Route path="/welcome" element={<Navigate to="/onboarding/welcome" replace />} />
            </Route>

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
