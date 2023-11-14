import NavLink from "./NavLink";

type Props = {};

const categories = [
  "trending",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function NavLinks({}: Props) {
  return (
    <nav className="grid w-full grid-cols-4 gap-4 border-b-2 pb-4 text-sm md:grid-cols-7">
      {categories.map((category) => (
        <NavLink category={category} key={category} />
      ))}
    </nav>
  );
}
