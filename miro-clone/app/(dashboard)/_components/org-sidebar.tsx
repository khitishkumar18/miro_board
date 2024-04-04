"use client"

// Importing necessary components and utilities
import Link from "next/link"; // For creating links
import Image from "next/image"; // For displaying images
import { Poppins } from "next/font/google"; // For using the Poppins font
import { LayoutDashboard, Star } from "lucide-react"; // Icons for the dashboard and star
import { OrganizationSwitcher } from "@clerk/nextjs"; // For organization switching
import { useSearchParams } from "next/navigation"; // For accessing URL query parameters

// Utility function for conditionally applying CSS classes
import { cn } from "@/lib/utils";

// Custom UI component
import { Button } from "@/components/ui/button";

// Configuring the Poppins font
const font = Poppins({
  subsets: ["latin"], // Latin character subset
  weight: ["600"], // Font weight
});

// Functional component for the organization sidebar
export const OrgSidebar = () => {
  // Using the useSearchParams hook to get query parameters from the URL
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    // Sidebar container
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      {/* Logo and board name */}
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image
            src="/logo.svg" // Path to the logo image
            alt="Logo" // Alt text for accessibility
            height={60} // Height of the logo
            width={60} // Width of the logo
          />
          <span className={cn(
            "font-semibold text-2xl",
            font.className, // Applying the Poppins font
          )}>
            Board
          </span>
        </div>
      </Link>
      
      {/* Organization switcher */}
      <OrganizationSwitcher
        hidePersonal // Hides personal organizations
        appearance={{ // Styling for the organization switcher
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            }
          }
        }}
      />
      
      {/* Sidebar buttons */}
      <div className="space-y-1 w-full">
        {/* Button for team boards */}
        <Button
          variant={favorites ? "ghost" : "secondary"} // Button variant based on whether favorites is true
          asChild // Using Link as child element for navigation
          size="lg" // Large button size
          className="font-normal justify-start px-2 w-full" // Custom button styling
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" /> {/* Dashboard icon */}
            Team boards
          </Link>
        </Button>
        
        {/* Button for favorite boards */}
        <Button
          variant={favorites ? "secondary" : "ghost"} // Button variant based on whether favorites is true
          asChild // Using Link as child element for navigation
          size="lg" // Large button size
          className="font-normal justify-start px-2 w-full" // Custom button styling
        >
          <Link href={{
            pathname: "/",
            query: { favorites: true }
          }}>
            <Star className="h-4 w-4 mr-2" /> {/* Star icon */}
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};
