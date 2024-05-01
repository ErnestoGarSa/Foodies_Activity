import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Meals shared</Link>
      </p>
      <p>
        <Link href="/meals/community">Meals community</Link>
      </p>
      <p>
        <Link href="/meals/slug">Meals slug</Link>
      </p>
    </main>
  );
}
