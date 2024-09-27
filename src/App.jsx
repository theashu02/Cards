import Container from "./components/Container";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "97vh",
        width: "100%",
        background: "white",
      }}
    >
      <Container />
    </div>
  );
}
