import Image from "next/image"; // Importing the Image component from Next.js for optimized image loading

export const EmptySearch = () => { // Defining a functional component named EmptySearch
  return (
    <div className="h-full flex flex-col items-center justify-center"> {/* Container div for centering content */}
      <Image // Using the Image component to display an image
        src="/empty-search.svg" // Image source
        height={140} // Image height
        width={140} // Image width
        alt="Empty" // Image alt text
      />
      <h2 className="text-2xl font-semibold mt-6"> {/* Heading for indicating no results */}
        No results found!
      </h2>
      <p className="text-muted-foreground text-sm mt-2"> {/* Message suggesting to try another search */}
        Try searching for something else
      </p>
    </div>
  );
};
