"use client";

import Card from "./card";

export default function Lista({ movies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((m) => (
        <Card key={m.id} filme={m} />
      ))}
    </div>
  );
}
