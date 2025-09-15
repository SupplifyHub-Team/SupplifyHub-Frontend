import { fetchBlogPost } from "@/services/blogServices";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import Image from "next/image";
import BlogProgressBar from "./_components/BlogProgressBar";
import BlogContent from "./_components/BlogContent";
import BlogCTA from "./_components/BlogCTA";
import { format, formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale";
import { Link } from "@/i18n/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const post = await fetchBlogPost({ slug: decodedSlug });

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogProgressBar />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة للمدونة
          </Button>
        </Link>
      </div>

      {/* Hero Card */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Cover Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Article Meta */}
            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-blue-500 text-white font-semibold">
                      SH
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      فريق SupplifyHub
                    </div>
                    <div className="text-sm text-gray-500">كاتب ومحرر</div>
                  </div>
                </div>

                {/* PDF Download */}
                {post.pdfUrl && (
                  <Link
                    target="_blank"
                    href={post.pdfUrl}
                    download
                    rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full">
                      <Download className="w-4 h-4 mr-2" />
                      تحميل PDF
                    </Button>
                  </Link>
                )}
              </div>

              {/* Dates */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    نُشر في &nbsp;
                    {format(post.createdAt, "dd MMMM yyyy", {
                      locale: ar,
                    })}
                  </span>
                </div>
                {post.updatedAt !== post.createdAt && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>
                      آخر تحديث &nbsp;
                      {formatDistanceToNow(new Date(post.updatedAt), {
                        addSuffix: true,
                        locale: ar,
                      })}
                    </span>
                  </div>
                )}
                <Badge variant="gradient-emerald" className="rounded-full">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {Math.ceil(post.content.length / (250 * 5)).toFixed(2)} دقائق
                  للقراءة
                </Badge>
              </div>
            </div>
            <BlogContent content={post.content} />
          </div>
        </div>
      </section>

      <main className="relative">
        <BlogCTA />
      </main>
    </div>
  );
}
