import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Cloud, Link, FileText } from "lucide-react";

export default function DataImport() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex w-full max-w-xl mx-auto flex-col items-center">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Import Data</h1>
          <p className="text-muted-foreground">
            Choose how you want to import your data. You can upload a file, connect to cloud 
            storage, or integrate from other platforms.
          </p>
        </div>

        <div className="w-full">
          <Tabs defaultValue="upload" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Upload File</TabsTrigger>
              <TabsTrigger value="cloud">Cloud Storage</TabsTrigger>
              <TabsTrigger value="integrate">Platforms</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-6">
              <Card className="border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center gap-6 p-12 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground" />
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">
                      Drag and drop a file here, or{" "}
                      <span className="text-primary cursor-pointer hover:underline">browse files</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supported formats: CSV, XLS, JSON
                    </p>
                  </div>
                  <Button>
                    Select File
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Cloud className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Google Drive</h3>
                      <p className="text-sm text-muted-foreground">Connect to your Google Drive account</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-blue-600/10 rounded-lg">
                      <Cloud className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Dropbox</h3>
                      <p className="text-sm text-muted-foreground">Import files from Dropbox</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-indigo-500/10 rounded-lg">
                      <Cloud className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">OneDrive</h3>
                      <p className="text-sm text-muted-foreground">Access files from Microsoft OneDrive</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integrate" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <FileText className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Excel/Google Sheets</h3>
                      <p className="text-sm text-muted-foreground">Import data from spreadsheets</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <Link className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">CRM Systems</h3>
                      <p className="text-sm text-muted-foreground">Integrate with Salesforce, HubSpot, etc.</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      <FileText className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Analytics Platforms</h3>
                      <p className="text-sm text-muted-foreground">Import from Google Analytics, Mixpanel</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}