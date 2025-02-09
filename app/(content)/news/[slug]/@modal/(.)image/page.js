"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useParams, useRouter } from "next/navigation";

export default function InterceptedImage() {
  const { slug } = useParams(); // Use useParams() in client components
  const router = useRouter();
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
