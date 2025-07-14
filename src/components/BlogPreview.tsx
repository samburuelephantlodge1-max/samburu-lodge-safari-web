import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const featuredPost = {
    id: 1,
    title: "More Than a Safari: How Your Stay Changes Lives",
    excerpt: "When you book a safari, you expect stunning wildlife and luxury in the wild. At Samburu Elephant Lodge, you get all that — and something much deeper: the chance to be part of a powerful local story of transformation through our partnership with Simama Project Organisation.",
    author: "SEL Team",
    date: "June 3, 2025",
    category: "Impact",
    image: "/lovable-uploads/d9d9e70d-c2aa-41fb-a9aa-72fc8653f136.png",
    readTime: "8 min read"
  };

  return (
    <section className="py-24 bg-brand-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-brand-orange mr-3" />
            <p className="text-sm uppercase tracking-[0.3em] text-brand-brown">From Our Blog</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
            Stories That Matter
          </h2>
          <p className="text-lg text-brand-brown/80 leading-relaxed font-light max-w-3xl mx-auto">
            Discover how your safari experience creates lasting impact beyond the wilderness
          </p>
        </div>

        <Card className="max-w-5xl mx-auto bg-white border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="lg:flex">
            <div className="lg:w-1/2 relative h-96 lg:h-auto overflow-hidden">
              <img 
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1">
                <span className="text-xs uppercase tracking-[0.1em]">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 p-12">
              <div className="flex items-center text-sm text-brand-brown/60 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {featuredPost.author}
                </div>
                <span>{featuredPost.readTime}</span>
              </div>
              <h3 className="text-2xl font-light text-brand-brown mb-4 font-playfair leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-brand-brown/80 leading-relaxed font-light mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="space-y-4">
                <Link to="/blog/more-than-safari-changes-lives">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-brand-orange hover:text-brand-orange-dark font-light text-sm uppercase tracking-[0.1em]"
                  >
                    Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <div className="pt-4 border-t border-brand-cream">
                  <Link to="/blog">
                    <Button 
                      variant="outline"
                      className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-xs uppercase tracking-[0.1em] font-light"
                    >
                      View All Stories <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlogPreview;
