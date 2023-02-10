import { useState, useRef, useEffect } from "react";
import { SearchIcon, SearchIconSmall, HistoryIcon } from "./Icon";

// generate a list of popular search terms object, each with a key of text and a value of the search term
const popular_search_terms = [
  "React",
  "JavaScript",
  "Python",
  "HTML",
  "CSS",
  "Java",
  "C++",
  "C#",
  "PHP",
  "Ruby",
  "Swift",
  "Go",
  "Rust",
  "Kotlin",
  "Dart",
  "SQL",
  "TypeScript",
  "Assembly",
  "C",
  "Scala",
  "Perl",
  "Groovy",
  "R",
  "Objective-C",
  "Haskell",
  "MATLAB",
  "Lua",
  "Elixir",
  "Julia",
  "Clojure",
  "Visual Basic",
  "F#",
  "COBOL",
  "Erlang",
  "VBA",
  "Haxe",
  "Prolog",
  "Ada",
  "Lisp",
  "Logo",
  "D",
  "Dylan",
  "Pascal",
  "Racket",
  "Smalltalk",
  "Scheme",
  "Eiffel",
  "Forth",
  "Fortran",
  "Ladder Logic",
  "LabVIEW",
  "PL/I",
  "RPG",
  "Verilog",
  "ActionScript",
  "ASP",
  "Bash",
  "C Shell",
  "Caml",
  "COBOL",
  "Delphi",
  "Erlang",
  "Fortran",
  "Haskell",
  "Java",
  "JavaScript",
  "Lisp",
  "Logo",
  "Lua",
  "Pascal",
  "Perl",
  "PHP",
  "Prolog",
  "Python",
  "R",
  "Ruby",
  "SAS",
  "SQL",
  "Smalltalk",
  "Tcl",
  "Visual Basic",
  "Ada",
  "Assembly",
  "C",
  "C++",
  "C#",
  "D",
  "Dylan",
  "Eiffel",
  "Forth",
  "F#",
  "Go",
  "Groovy",
  "Haxe",
  "Kotlin",
  "LabVIEW",
  "Ladder Logic",
  "Lisp",
  "Logo",
  "MATLAB",
  "ML",
  "Objective-C",
  "PL/I",
];

const HistoryBox = () => {
  const handleClickHistoryItem = () => {}

  const terms = popular_search_terms.slice(0, 10)
  return (
    <div className="absolute top-[100%] left-0 right-0 mt-1 py-4 flex flex-col bg-[var(--white)] text-[var(--black)] shadow-lg rounded-xl">
      {terms.map((term, i) => (
        <div
          key={i}
          className="w-full py-1.5 flex-none flex items-center hover:bg-gray-300 cursor-default"
          onClick={handleClickHistoryItem}
        >
          <span className="px-4">
            {/* <SearchIconSmall /> */}
            <HistoryIcon />
          </span>
          <span className="text-sm font-semibold text-black min-w-0 flex-1 truncate">{term}</span>
          <span className="mr-7 text-blue-600/80 text-sm hover:underline cursor-pointer">Remove</span>
        </div>
      ))}
    </div>
  );
};

const SearchBar = ({ value, onChange }) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (ref.current) {
    }
  }, [ref]);

  return (
    <div
      className="h-10 w-96 flex-none flex"
      style={{
        width: ``,
      }}
    >
      <div
        className="searchbar-input-container relative h-full w-full flex items-center rounded-tl-full rounded-bl-full overflow-visible"
        style={{
          marginLeft: isFocused ? "0" : "36px",
          borderColor: isFocused
            ? "var(--searchbar-border-color-focused)"
            : "var(--searchbar-border-color)",
        }}
      >
        {isFocused && (
          <span className="pl-5 bg-transparent">
            <SearchIconSmall />
          </span>
        )}
        <input
          ref={ref}
          className="searchbar-input ml-4 flex-1 h-full dark:text-custom-white font-light outline-none"
          type="text"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused((f) => true)}
          onBlur={() => setIsFocused((f) => false)}
          placeholder="Search"
        />
        {isFocused && <HistoryBox />}
      </div>
      <span className="searchbar-right-icon h-full flex items-center justify-center rounded-tr-full rounded-br-full cursor-pointer">
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;
