# MyBizAI Development Playbook

## 🎮 Developer Onboarding Guide

### **Quick Start for New Team Members**

1. **Environment Setup**
```bash
# Clone the repository
git clone [repository-url]
cd mybizai

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

2. **Code Standards**
- **TypeScript**: Strict mode enabled, no `any` types
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS with semantic tokens only
- **State**: TanStack Query for server state, Zustand for client state

## 📝 Component Creation Guidelines

### **Creating New Components**
```typescript
// Template for new components
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const componentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "variant-classes",
        secondary: "variant-classes",
      },
      size: {
        sm: "size-classes",
        lg: "size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

interface ComponentProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Add specific props here
}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Component.displayName = "Component";
export { Component };
```

### **Page Structure Template**
```typescript
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PageName = () => {
  const [state, setState] = useState();
  
  const { data, isLoading } = useQuery({
    queryKey: ['page-data'],
    queryFn: fetchPageData,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNewTask={() => {}} />
      <main className="container mx-auto px-6 py-8">
        {/* Page content */}
      </main>
    </div>
  );
};

export default PageName;
```

## 🎨 Design System Usage

### **Color Usage Rules**
```css
/* ❌ NEVER use direct colors */
.wrong { @apply text-blue-500 bg-white; }

/* ✅ ALWAYS use semantic tokens */
.correct { @apply text-primary bg-background; }

/* Available semantic tokens from index.css */
--background
--foreground
--primary
--primary-foreground
--secondary
--muted
--accent
--destructive
--border
--input
--ring
```

### **Component Variants Best Practices**
```typescript
// Create variants instead of custom classes
<Button variant="primary" size="lg">
  Primary Action
</Button>

// NOT this:
<Button className="bg-blue-500 text-white px-8 py-4">
  Primary Action
</Button>
```

## 🔄 Git Workflow

### **Branch Naming Convention**
```
feature/team-[a|b|c]-[feature-name]
bugfix/[bug-description]
hotfix/[critical-fix]
refactor/[refactor-description]
```

### **Commit Message Format**
```
type(scope): description

feat(dashboard): add revenue analytics chart
fix(auth): resolve login redirect issue
refactor(components): extract reusable card component
docs(readme): update installation instructions
```

### **Pull Request Process**
1. Create feature branch from `develop`
2. Make changes with proper commit messages
3. Run tests locally: `npm run test`
4. Create PR with template
5. Request review from team lead
6. Address feedback and merge

## 🧪 Testing Strategy

### **Unit Tests** (Required for all components)
```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders with correct variant', () => {
    render(<Button variant="primary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');
  });
});
```

### **Integration Tests** (Required for pages)
```typescript
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './Dashboard';

const createTestQueryClient = () => new QueryClient({
  defaultOptions: { queries: { retry: false } }
});

describe('Dashboard', () => {
  it('displays analytics data', async () => {
    const queryClient = createTestQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Revenue Analytics')).toBeInTheDocument();
    });
  });
});
```

## 🚀 Performance Guidelines

### **Bundle Size Optimization**
- Use dynamic imports for large components
- Implement code splitting at route level
- Lazy load charts and heavy components

### **React Performance**
```typescript
// Use memo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// Use callback for stable references
const handleClick = useCallback((id: string) => {
  // Handle click
}, []);

// Use React.memo for pure components
export const PureComponent = React.memo(({ data }) => {
  return <div>{data.name}</div>;
});
```

## 🔒 Security Best Practices

### **Input Validation**
```typescript
import { z } from 'zod';

const taskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(500),
  priority: z.enum(['low', 'medium', 'high']),
});

// Use in forms
const { register, handleSubmit } = useForm({
  resolver: zodResolver(taskSchema),
});
```

### **Environment Variables**
```typescript
// types/env.d.ts
interface ImportMetaEnv {
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
}
```

## 📱 Responsive Design Standards

### **Breakpoint Usage**
```typescript
// Mobile-first approach
<div className="
  w-full 
  md:w-1/2 
  lg:w-1/3 
  xl:w-1/4
">
  Content
</div>

// Hide on mobile
<div className="hidden md:block">
  Desktop only content
</div>
```

## 🐛 Debugging Guidelines

### **Console Management**
```typescript
// Development only logs
if (import.meta.env.DEV) {
  console.log('Debug info:', data);
}

// Use proper error boundaries
class ErrorBoundary extends Component {
  // Implementation
}
```

### **Common Issues & Solutions**
1. **Hydration Errors**: Check for SSR/client differences
2. **State Updates**: Ensure proper dependency arrays
3. **Memory Leaks**: Clean up subscriptions in useEffect
4. **Type Errors**: Use proper TypeScript interfaces

---

**Remember**: Quality over speed. Well-tested, maintainable code saves time in the long run.