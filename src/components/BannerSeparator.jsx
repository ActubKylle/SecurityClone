export default function BannerSeparator() {
  return (
    <div
      style={{
        width: "100%",
        height: "clamp(220px, 30vw, 500px)",
        overflow: "hidden",
        background: "#d1d5db",
      }}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Ff1ddda5116b346269debabe4bb0b472f"
        alt="Banner separator"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  );
}