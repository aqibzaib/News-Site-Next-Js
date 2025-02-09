import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function InterceptedImage({ params }) {
  const { slug } = await params; // Await params in Next.js 15
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h1>Intercepted Route</h1>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
}
