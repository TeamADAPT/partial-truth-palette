import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle, RefreshCw } from "lucide-react";

export default function SystemStatus() {
  const systems = [
    { name: "API Gateway", status: "operational", uptime: "99.99%" },
    { name: "Authentication Service", status: "operational", uptime: "99.95%" },
    { name: "Database Cluster", status: "operational", uptime: "99.99%" },
    { name: "AI Engine", status: "degraded", uptime: "98.50%", message: "High latency observed" },
    { name: "Storage Service", status: "operational", uptime: "99.99%" },
    { name: "Notifications", status: "operational", uptime: "99.99%" },
  ];

  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">System Status</h1>
          <p className="text-muted-foreground mt-2">Current status of MyBizAI services</p>
        </div>
        <Button variant="outline" onClick={() => window.location.reload()}>
          <RefreshCw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      <Card className="mb-8 border-green-500/20 bg-green-500/5">
        <CardContent className="flex items-center gap-4 py-6">
          <CheckCircle className="h-8 w-8 text-green-500" />
          <div>
            <h2 className="text-xl font-semibold text-green-700 dark:text-green-400">All Systems Operational</h2>
            <p className="text-green-600/80 dark:text-green-400/80">All services are running normally.</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {systems.map((system) => (
          <Card key={system.name}>
            <CardContent className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                {system.status === "operational" ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : system.status === "degraded" ? (
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                <div>
                  <h3 className="font-medium">{system.name}</h3>
                  {system.message && (
                    <p className="text-sm text-yellow-500">{system.message}</p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  system.status === "operational"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : system.status === "degraded"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}>
                  {system.status === "operational" ? "Operational" : system.status === "degraded" ? "Degraded Performance" : "Outage"}
                </span>
                <p className="text-xs text-muted-foreground mt-1">Uptime: {system.uptime}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
