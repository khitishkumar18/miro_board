"use client";

import {
  UserButton,  // Button component for user actions
  OrganizationSwitcher,  // Component for switching organizations
  useOrganization,  // Custom hook for managing organization state
} from "@clerk/nextjs";

import { SearchInput } from "./search-input";  // Custom search input component
import { InviteButton } from "./invite-button";  // Custom invite button component

// Functional component for the navigation bar
export const NavBar = () => {
  // Using the useOrganization hook to access the organization state
  const { organization } = useOrganization();

  return (
    <div className="flex items-center gap-x-4 p-5 ">
      {/* Hidden search input for large screens */}
      <div className="hidden lg:flex lg:flex-1 b">
        <SearchInput />
      </div>
      {/* Organization switcher for small screens */}
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal // Hides personal organizations
          appearance={{
            // Styling for the organization switcher
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {/* Render the InviteButton component if organization exists */}
      {organization && <InviteButton />}
      {/* User button for user actions */}
      <UserButton />
    </div>
  );
};
