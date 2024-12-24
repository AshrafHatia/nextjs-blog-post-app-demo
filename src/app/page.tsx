import HeroSection from "@/components/hero";
import PostCarousel from "@/components/postcarousel";

export default function Home() {
  const apiUrl = process.env.POST_API_URL;
  console.log(apiUrl);

  return (
    <main className="container mx-auto p-0">
      <HeroSection />
      <PostCarousel apiUrl={apiUrl || ""} />
    </main>
  );
}