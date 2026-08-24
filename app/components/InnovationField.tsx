export function InnovationField({ variant = "home" }: { variant?: "home" | "services" | "contact" }) {
  return (
    <div className={`innovation-field ${variant === "services" ? "services-innovation-field" : ""} ${variant === "contact" ? "contact-innovation-field" : ""}`} aria-hidden="true">
      <div className="innovation-rotor"><span /><span /><span /><i /></div>
      <div className="innovation-globe"><span /><i /></div>
      <p>{variant === "services" ? "Built by people who understand your business" : variant === "contact" ? "Ready to discuss your next idea" : "Welcome to the world of innovation"}</p>
    </div>
  );
}
