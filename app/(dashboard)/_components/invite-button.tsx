// Importing necessary modules and components
import { Plus } from "lucide-react"; // Icon component for the plus sign
import { OrganizationProfile } from "@clerk/nextjs"; // Component for organization profile
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Components for dialog
import { Button } from "@/components/ui/button"; // Button component

// Functional component for the invite button
export const InviteButton = () => {
  // Rendering the dialog component
  return (
    <Dialog>
      {/* Dialog trigger component */}
      <DialogTrigger asChild>
        {/* Button component for inviting members */}
        <Button variant="outline">
          {/* Plus icon */}
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      {/* Dialog content component */}
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        {/* Organization profile component */}
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
