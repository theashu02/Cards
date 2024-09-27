import Cards from "./Cards";

export default function Container() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // Create 3 equal columns
        gap: "10px", // Add space between the Cards
        width: "60%",
        backgroundColor: "whitesmoke",
        justifyItems: "center",
        margin: "0 auto", // Center the grid container
      }}
    >
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}
