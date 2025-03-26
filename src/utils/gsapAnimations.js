export const initializeGSAPAnimation = (loading) => {
  if (!loading) return;

  // Load GSAP dynamically if not already loaded
  if (!window.gsap) {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.async = true;
    script.onload = () => {
      window.gsap.to(".skeleton", {
        backgroundPositionX: "200%",
        duration: 1.5,
        repeat: -1,
        ease: "linear",
      });
    };
    document.body.appendChild(script);
  } else {
    window.gsap.to(".skeleton", {
      backgroundPositionX: "200%",
      duration: 1.5,
      repeat: -1,
      ease: "linear",
    });
  }
};
