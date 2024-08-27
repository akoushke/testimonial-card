import Card from "@/components/Card/Card";

export default function Home() {
  const user = {
    image: "/testimonial-card/profile-thumbnail.png",
    name: "Sarah Dole",
    handle: "@sarahdole",
    content: `I've been searching for high-quality abstract images for my design projects,
    and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`,
  };

  return <Card {...user} />;
}
