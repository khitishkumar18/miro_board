"use client";

// Importing necessary modules from Next.js and React
import qs from "query-string"; // For parsing and stringifying URL query strings
import { Search } from "lucide-react"; // Icon component for search
import { useRouter } from "next/navigation"; // Router hook for Next.js
import { ChangeEvent, useEffect, useState } from "react"; // React hooks for managing state and side effects

// Importing custom Input component
import { Input } from "@/components/ui/input";

// Custom hook for debouncing input value changes
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Functional component for the search input
export const SearchInput = () => {
  // Using the Next.js useRouter hook to access the router
  const router = useRouter();

  // State for managing the input value
  const [value, setValue] = useState("");

  // Using the custom useDebounce hook to debounce the input value
  const debouncedValue = useDebounce(value, 500);

  // Event handler for input value changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Effect to update the URL query parameter when the debouncedValue changes
  useEffect(() => {
    // Constructing the new URL with the debouncedValue as the "search" query parameter
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    // Updating the browser URL without reloading the page
    router.push(url);
  }, [debouncedValue, router]);

  // Rendering the search input component
  return (
    <div className="w-full relative">
      {/* Search icon */}
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      {/* Input component for search */}
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
