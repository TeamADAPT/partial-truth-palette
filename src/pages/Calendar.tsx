import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar as CalendarIcon, RefreshCw, Settings } from "lucide-react";

const Calendar = () => {
  const [connectedServices, setConnectedServices] = useState({
    google: false,
    outlook: false
  });

  const [syncPreferences, setSyncPreferences] = useState({
    workCalendar: true,
    personalCalendar: false,
    projectDeadlines: true,
    taskDueDates: true
  });

  const calendarServices = [
    {
      name: "Google Calendar",
      description: "Sync project deadlines and tasks.",
      icon: RefreshCw,
      connected: connectedServices.google,
      onToggle: () => setConnectedServices(prev => ({ ...prev, google: !prev.google }))
    },
    {
      name: "Outlook Calendar", 
      description: "Sync project deadlines and tasks.",
      icon: RefreshCw,
      connected: connectedServices.outlook,
      onToggle: () => setConnectedServices(prev => ({ ...prev, outlook: !prev.outlook }))
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Calendar Integration</h1>
            <p className="text-muted-foreground">Connect your calendars to sync project deadlines and tasks</p>
          </div>
          <Button className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Advanced Settings
          </Button>
        </div>

        <div className="space-y-8">
          {/* Connect Your Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Connect Your Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {calendarServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <Button 
                    onClick={service.onToggle}
                    variant={service.connected ? "secondary" : "default"}
                  >
                    {service.connected ? "Connected" : "Connect"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Sync Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Sync Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Select Calendars to Sync</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="work-calendar"
                        checked={syncPreferences.workCalendar}
                        onCheckedChange={(checked) => 
                          setSyncPreferences(prev => ({ ...prev, workCalendar: checked as boolean }))
                        }
                      />
                      <Label htmlFor="work-calendar">Work Calendar</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">john.doe@work.com</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="personal-calendar"
                        checked={syncPreferences.personalCalendar}
                        onCheckedChange={(checked) => 
                          setSyncPreferences(prev => ({ ...prev, personalCalendar: checked as boolean }))
                        }
                      />
                      <Label htmlFor="personal-calendar">Personal Calendar</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">john.doe@personal.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Event Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="project-deadlines"
                      checked={syncPreferences.projectDeadlines}
                      onCheckedChange={(checked) => 
                        setSyncPreferences(prev => ({ ...prev, projectDeadlines: checked as boolean }))
                      }
                    />
                    <Label htmlFor="project-deadlines">Sync project deadlines</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="task-due-dates"
                      checked={syncPreferences.taskDueDates}
                      onCheckedChange={(checked) => 
                        setSyncPreferences(prev => ({ ...prev, taskDueDates: checked as boolean }))
                      }
                    />
                    <Label htmlFor="task-due-dates">Sync task due dates</Label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button className="px-8">
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;