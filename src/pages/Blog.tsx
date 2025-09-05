
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Heart, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from "@/utils/seo";

const Blog = () => {
  useEffect(() => {
    updatePageMeta(
      "Safari Blog - Stories from Samburu Elephant Lodge",
      "Read stories from the wild, conservation insights, travel tips, and cultural experiences from Samburu Elephant Lodge in Kenya's Samburu National Reserve.",
      "/blog"
    );
  }, []);
  const featuredPost = {
    id: 1,
    title: "More Than a Safari: How Your Stay Changes Lives",
    excerpt: "When you book a safari, you expect stunning wildlife and luxury in the wild. At Samburu Elephant Lodge, you get all that — and something much deeper: the chance to be part of a powerful local story of transformation through our partnership with Simama Project Organisation and Project Samburu.",
    author: "SEL Team",
    date: "June 3, 2025",
    category: "Impact",
    image: "/lovable-uploads/d9d9e70d-c2aa-41fb-a9aa-72fc8653f136.png",
    readTime: "8 min read",
    fullContent: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">When you book a safari, you expect stunning wildlife, breathtaking landscapes, and luxury in the wild. At Samburu Elephant Lodge (SEL), you get all that — and something much deeper: the chance to be part of a powerful local story of transformation.</p>
        
        <h3>🌍 Where Luxury Meets Purpose</h3>
        <p>Nestled along the peaceful banks of the Ewaso Nyiro River, <strong>Samburu Elephant Lodge</strong> is known for its intimate connection with the land and its people. Run by the Samburu community, the lodge blends warm hospitality with rich cultural experiences and immersive wildlife adventures.</p>
        
        <p>But now, your stay means more than just a memory — <strong>a portion of every booking goes directly to support the work of Simama Project Organisation and Project Samburu</strong>, grassroots initiatives changing the lives of vulnerable children and youth in Samburu and beyond.</p>
        
        <h3>💛 Travel That Uplifts Communities</h3>
        <p><strong>Simama</strong>, meaning <em>"to stand"</em> in Swahili, helps children who have faced homelessness, hunger, or lack of access to education rise again. Through safe housing, education sponsorships, mentorship, and life-skills training, Simama gives them the tools to build a better future.</p>
        
        <p><strong>Project Samburu</strong> works hand in hand with Simama, focusing on community-wide initiatives that create sustainable development. Together, they engage with families, schools, and entire communities to create lasting change. With the new partnership between SEL and these organizations, <strong>your stay directly supports this mission.</strong></p>
        
        <h3>🐾 How You Make a Difference</h3>
        <p>Here's what your safari booking helps support:</p>
        <ul>
          <li>School fees, uniforms, and supplies for at-risk students</li>
          <li>Safe housing for children transitioning off the streets</li>
          <li>Life skills, leadership, and mental health support</li>
          <li>Family reintegration and community education</li>
          <li>Career training and scholarship pathways</li>
          <li>Community infrastructure development projects</li>
          <li>Women's empowerment and income-generating activities</li>
        </ul>
        
        <p>You might come for the elephants and the sunsets — but you leave having helped someone stand again.</p>
        
        <h3>✨ A Journey With Heart</h3>
        <p>At Samburu Elephant Lodge, your luxury safari is intertwined with the heartbeat of the community. While you enjoy morning game drives, sundowners by the river, and cultural visits with Samburu elders, <strong>you're also investing in a brighter, more empowered future for local youth.</strong></p>
        
        <p>You're not just a guest here. <strong>You're a partner in something beautiful.</strong></p>
        
        <h3>📅 Ready to Travel With Purpose?</h3>
        <p><strong>Book your stay</strong> at Samburu Elephant Lodge and be part of a story that stretches beyond the wild — into schools, homes, and hearts.</p>
        
        <p><strong>Experience Samburu. Empower Samburu.</strong></p>
      </div>
    `
  };

  const blogPosts = [
    {
      id: 7,
      title: "Do's and Don'ts for an Unforgettable Samburu Safari",
      excerpt: "Planning a safari is exciting, but each destination has its own rhythm. Learn essential tips to make the most of your stay at Samburu Elephant Lodge.",
      author: "Safari Guide Team",
      date: "August 15, 2025",
      category: "Safari Tips",
      image: "/lovable-uploads/576d29f0-3a37-4d26-9a8d-569970375393.png",
      readTime: "6 min read",
      slug: "samburu-safari-dos-and-donts"
    },
    {
      id: 6,
      title: "The Hidden History of Archers Post: Where Butterflies Took Flight and Legends Took Root",
      excerpt: "Discover the fascinating history behind Archers Post, where butterflies connected distant worlds and legends were born among the Samburu people.",
      author: "Cultural Heritage Team",
      date: "July 29, 2025",
      category: "History & Culture",
      image: "/lovable-uploads/e6e202c5-3302-4061-a9f7-e80e7465d60a.png",
      readTime: "7 min read",
      slug: "hidden-history-archers-post"
    },
    {
      id: 4,
      title: "Sustainable Safari: Our Eco-Tourism Commitment",
      excerpt: "Learn how Samburu Elephant Lodge contributes to conservation efforts and empowers local communities through responsible tourism practices.",
      author: "Conservation Team",
      date: "December 5, 2024",
      category: "Conservation",
      image: "/lovable-uploads/7ca574ad-4fab-422e-b0e8-19d05f205a0f.png",
      readTime: "6 min read",
      slug: "sustainable-safari-eco-tourism"
    },
    {
      id: 5,
      title: "Best Time to Visit Samburu National Reserve",
      excerpt: "Planning your safari? Discover the optimal seasons for wildlife viewing, weather conditions, and unforgettable experiences in Samburu.",
      author: "Travel Planning Team",
      date: "November 28, 2024",
      category: "Travel Tips",
      image: "/lovable-uploads/349d6974-edd6-418e-8d19-2ef6ff2075ae.png",
      readTime: "4 min read",
      slug: "best-time-to-visit-samburu"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 font-playfair leading-tight">
              Stories from the Wild
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-8">
              Safari insights, wildlife stories, and cultural experiences from Samburu Elephant Lodge
            </p>
            <a 
              href="/blog/rss.xml" 
              className="inline-flex items-center text-brand-orange hover:text-brand-orange-dark transition-colors text-sm uppercase tracking-wider font-medium"
            >
              <Rss className="w-4 h-4 mr-2" />
              Subscribe to RSS Feed
            </a>
          </div>
        </div>
      </section>

      {/* Featured Post Full Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="relative h-80 md:h-96 overflow-hidden mb-12 rounded-xl shadow-lg">
              <img 
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-brand-orange text-white px-4 py-2 rounded-full">
                <span className="text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center text-sm text-slate-500 mb-8 gap-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {featuredPost.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {featuredPost.author}
              </div>
              <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium">
                {featuredPost.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 font-playfair leading-tight">
              {featuredPost.title}
            </h1>
            
            <div className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 font-light">
              {featuredPost.excerpt}
            </div>
            
            <div 
              className="prose prose-xl max-w-none prose-slate prose-headings:font-playfair prose-headings:font-light prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6 prose-ul:mb-8 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: featuredPost.fullContent }}
            />
          </article>
        </div>
      </section>

      {/* RSS Feed Widget */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 font-playfair">Latest Stories</h2>
            <p className="text-lg text-slate-600 font-light">Stay updated with our latest safari stories and insights</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className='sk-ww-rss-feed' data-embed-id='25596115'></div>
            <script src='https://widgets.sociablekit.com/rss-feed/widget.js' defer></script>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 font-playfair">More Stories</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-slate-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-light text-slate-900 mb-4 font-playfair leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed font-light mb-8 text-base">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-brand-orange hover:text-brand-orange-dark font-medium text-sm group"
                    >
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
