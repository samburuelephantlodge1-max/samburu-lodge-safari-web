import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { updatePageMeta } from '@/utils/seo';

const blogPosts = {
  'hidden-history-archers-post': {
    title: 'The Hidden History of Archers Post: Where Butterflies Took Flight and Legends Took Root',
    excerpt: 'Discover the fascinating history behind Archers Post, where butterflies connected distant worlds and legends were born among the Samburu people.',
    author: 'Cultural Heritage Team',
    date: 'July 29, 2025',
    readTime: '7 min read',
    category: 'History & Culture',
    image: '/lovable-uploads/e6e202c5-3302-4061-a9f7-e80e7465d60a.png',
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">When you arrive at Samburu Elephant Lodge, tucked within the raw beauty of Samburu National Reserve, you're instantly swept into a world of silence, sky, and wildness. But just beyond the reserve's gates lies a small, seemingly quiet settlement with a name that holds far more than meets the eye: Archers Post.</p>
        
        <p>At first, the name may stir images of bows and arrows—a warrior town, perhaps. But the real story is far more nuanced, and much more poetic.</p>
        
        <h2>A Man Named Archer</h2>
        <p>To uncover the roots of Archers Post, we step back over a century to the early 1900s, a time when British colonial officers were mapping, naming, and controlling much of Kenya's northern frontier. One such officer, George Archer, was sent to the region to establish a presence on behalf of the colonial government.</p>
        
        <p>He arrived at a strategic site previously used by the Boma Trading Company—an isolated compound that had since been abandoned but remained intact. Archer made it his base, and over time, the location came to be known as Archer's Post—a name carried forward not for what he did, but simply for who he was.</p>
        
        <p>And yet, if we stopped there, the story would feel cold. It would be just another colonial marker in a landscape filled with them. But in truth, there's another narrative—one far more delicate and filled with wonder.</p>
        
        <h2>The Butterfly Connection</h2>
        <p>George Archer had an uncle named Sir Fredrick Johnson, who lived in Mombasa. Unlike his military nephew, Fredrick was a collector—not of stamps or coins, but of butterflies. He had a fascination with Kenya's lepidopteran wonders, and the untouched north was, to him, a paradise waiting to be explored.</p>
        
        <p>So, in letter after letter, Fredrick implored George to send butterflies—strange ones, rare ones, beautiful ones. And George, though a soldier by duty, became a collector by circumstance. While patrolling the dry Samburu plains or navigating the Ewaso Nyiro riverbanks, he began capturing specimens—brilliant blues, flickering oranges, pale whites—and packing them for the coast.</p>
        
        <p>These butterflies, carried in fragile boxes, brought not only color to Fredrick's collection but stories. Stories of a place that few Europeans had ventured into. Stories of a people who lived in harmony with this rugged land.</p>
        
        <h2>The Butterfly People</h2>
        <p>Fredrick became enchanted—not just by the insects, but by what his nephew described: the Samburu people, adorned in beads and dressed in bold colors, moving through their landscape with a grace that seemed untouched by time.</p>
        
        <p>In one of his many journal entries, Fredrick reportedly referred to the Samburu as "the Butterfly People." It wasn't a scientific name, nor was it meant for classification. It was an impression—a poetic observation from a man who saw in the Samburu the same qualities that he so adored in butterflies: color, elegance, and quiet resilience.</p>
        
        <p>That nickname, while never official, stuck in certain circles. And it still resonates with those who observe closely. Watch the way Samburu women walk in procession, or how warriors leap and sing in celebration. Their movement, pride, and style are more than cultural expressions—they are living art.</p>
        
        <h2>A Name with Layers</h2>
        <p>So while Archers Post may, on the surface, sound like another colonial remnant, it's actually layered with stories—of a military post that became a settlement, of butterflies that bridged the highlands and the coast, and of a people who caught the attention of a collector not for conquest, but for beauty.</p>
        
        <p>Today, the town remains a gateway—into Samburu, into history, and into a more thoughtful way of seeing the world.</p>
        
        <blockquote>
          <p>"Next time you pass through Archers Post, slow down. Let the dust rise behind your vehicle, and look around with new eyes. This is not just a place on a map. It is a story still fluttering on the wind, written in wings and woven into the land."</p>
        </blockquote>
      </div>
    `
  },
  'best-time-to-visit-samburu': {
    title: 'Best Time to Visit Samburu National Reserve',
    excerpt: 'Planning your safari? Discover the optimal seasons for wildlife viewing, weather conditions, and unforgettable experiences in Samburu.',
    author: 'Samburu Elephant Lodge',
    date: 'July 14, 2025',
    readTime: '8 min read',
    category: 'Safari Guide',
    image: '/lovable-uploads/349d6974-edd6-418e-8d19-2ef6ff2075ae.png',
    content: `
      <h2>Why Visit Samburu?</h2>
      
      <p>Located in northern Kenya, Samburu National Reserve offers one of the most authentic safari experiences in Africa. Unlike the more popular southern parks, Samburu is rugged, remote, and uncrowded — ideal for travelers who want a deeper connection with nature.</p>
      
      <p>This semi-arid landscape along the Ewaso Ng'iro River is home to an extraordinary array of wildlife, including the rare "Samburu Special Five": Grevy's zebra, reticulated giraffe, Somali ostrich, Beisa oryx, and the long-necked gerenuk.</p>
      
      <p>You'll also find elephants, lions, leopards, crocodiles, and over 450 bird species. Add in rich Samburu culture and dramatic terrain, and you have a truly unforgettable destination.</p>

      <h2>Best Time to Visit: A Seasonal Overview</h2>
      
      <h3>Dry Season (June to October and January to February)</h3>
      
      <p><strong>Best for:</strong> Wildlife viewing, photography, comfortable game drives</p>
      
      <ul>
        <li>Animals congregate at the river and other water sources, making sightings more frequent and dramatic.</li>
        <li>Clear skies provide excellent light for photography.</li>
        <li>Roads are dry and accessible, making it ideal for game drives and walking safaris.</li>
        <li>Cooler mornings and evenings ensure comfortable travel conditions.</li>
      </ul>
      
      <p><strong>Why go now:</strong> This is peak safari season. If you're hoping to spot predators or want the best overall game viewing, this is the ideal time to visit.</p>

      <h3>Shoulder Season (March, June, September, December)</h3>
      
      <p><strong>Best for:</strong> Fewer tourists, good wildlife, lower rates</p>
      
      <ul>
        <li>Wildlife is still active, especially in March and December.</li>
        <li>The landscape starts to green, offering beautiful contrast for photos.</li>
        <li>Quieter camps and lodges enhance the experience.</li>
        <li>Rates are often more affordable before and after peak periods.</li>
      </ul>
      
      <p><strong>Why go now:</strong> Perfect for travelers who want a balanced safari experience — fewer crowds, great sightings, and a bit of everything Samburu has to offer.</p>

      <h3>Wet Season (March to May and October to November)</h3>
      
      <p><strong>Best for:</strong> Birdwatching, lush scenery, baby animals</p>
      
      <ul>
        <li>A paradise for birdwatchers, with migratory species joining resident birds.</li>
        <li>This is calving season for many animals, offering rare glimpses of newborns.</li>
        <li>The park transforms into a green oasis, perfect for landscape photography.</li>
        <li>Fewer visitors mean a more peaceful safari at reduced costs.</li>
      </ul>
      
      <p><strong>What to consider:</strong> Heavy rains can make some roads difficult to navigate, and wildlife may spread out due to abundant water. Still, for those seeking beauty, birds, and serenity, this is a rewarding time to visit.</p>

      <h2>Month-by-Month Safari Guide</h2>
        <div class="overflow-x-auto my-8">
          <table class="w-full border-collapse border border-brand-cream">
            <thead>
              <tr class="bg-brand-cream/30">
                <th class="border border-brand-cream/50 p-3 text-left">Month</th>
                <th class="border border-brand-cream/50 p-3 text-left">Wildlife Viewing</th>
                <th class="border border-brand-cream/50 p-3 text-left">Landscape</th>
                <th class="border border-brand-cream/50 p-3 text-left">Overall Experience</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="border border-brand-cream/50 p-3">January</td><td class="border border-brand-cream/50 p-3">Excellent</td><td class="border border-brand-cream/50 p-3">Dry, golden</td><td class="border border-brand-cream/50 p-3">Great for big game & photography</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">February</td><td class="border border-brand-cream/50 p-3">Excellent</td><td class="border border-brand-cream/50 p-3">Dry</td><td class="border border-brand-cream/50 p-3">Ideal for predator sightings</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">March</td><td class="border border-brand-cream/50 p-3">Good</td><td class="border border-brand-cream/50 p-3">Turning green</td><td class="border border-brand-cream/50 p-3">Fewer tourists, good visibility</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">April</td><td class="border border-brand-cream/50 p-3">Moderate</td><td class="border border-brand-cream/50 p-3">Lush and wet</td><td class="border border-brand-cream/50 p-3">Best for birds and baby animals</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">May</td><td class="border border-brand-cream/50 p-3">Moderate</td><td class="border border-brand-cream/50 p-3">Very green</td><td class="border border-brand-cream/50 p-3">Scenic, peaceful, less predictable</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">June</td><td class="border border-brand-cream/50 p-3">Excellent</td><td class="border border-brand-cream/50 p-3">Dry</td><td class="border border-brand-cream/50 p-3">Start of peak season</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">July</td><td class="border border-brand-cream/50 p-3">Excellent</td><td class="border border-brand-cream/50 p-3">Dry</td><td class="border border-brand-cream/50 p-3">Prime wildlife season</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">August</td><td class="border border-brand-cream/50 p-3">Excellent</td><td class="border border-brand-cream/50 p-3">Dry</td><td class="border border-brand-cream/50 p-3">Ideal for photographers</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">September</td><td class="border border-brand-cream/50 p-3">Excellent</td><td class="border border-brand-cream/50 p-3">Dry</td><td class="border border-brand-cream/50 p-3">Great weather and game viewing</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">October</td><td class="border border-brand-cream/50 p-3">Good</td><td class="border border-brand-cream/50 p-3">Greening again</td><td class="border border-brand-cream/50 p-3">Early rains, fewer tourists</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">November</td><td class="border border-brand-cream/50 p-3">Moderate</td><td class="border border-brand-cream/50 p-3">Green</td><td class="border border-brand-cream/50 p-3">Good for birds and calving</td></tr>
              <tr><td class="border border-brand-cream/50 p-3">December</td><td class="border border-brand-cream/50 p-3">Very Good</td><td class="border border-brand-cream/50 p-3">Mixed</td><td class="border border-brand-cream/50 p-3">Green but clear, festive atmosphere</td></tr>
            </tbody>
          </table>
        </div>

      <h2>What to Do in Samburu (All Year Round)</h2>
      
      <h3>Game Drives</h3>
      <p>The best way to see Samburu's wildlife, especially early morning and late afternoon. Dry season drives offer the most consistent big game sightings.</p>

      <h3>Walking Safaris</h3>
      <p>Available in dry months, these are a great way to get close to nature and explore the landscape on foot with a professional guide.</p>

      <h3>Birdwatching</h3>
      <p>With over 450 species, Samburu is a birder's dream — especially during the rainy season when migratory birds arrive.</p>

      <h3>Cultural Tours</h3>
      <p>Visit Samburu villages and engage with the traditions, music, and crafts of one of Kenya's most iconic communities. Cultural experiences are available all year.</p>

      <h3>Photography</h3>
      <p>From dry, sun-baked vistas to lush, green backdrops during the rains, Samburu offers an ever-changing palette for photographers.</p>

      <h2>When Should You Go?</h2>
      
      <ul>
        <li><strong>For first-time safaris or big game focus</strong> — choose the dry season: June to October or January to February.</li>
        <li><strong>For scenic beauty, birds, and baby animals</strong> — visit during the wet months: March to May or October to November.</li>
        <li><strong>For balance and value</strong> — travel in March, early June, September, or December.</li>
      </ul>

      <h2>Final Thoughts</h2>
      
      <p>Samburu isn't just a destination — it's a feeling. Wild, soulful, and less explored than Kenya's southern parks, it rewards the curious traveler with stunning scenery, rare wildlife, and a deep sense of place. No matter when you go, Samburu will leave you with memories that last a lifetime.</p>
      
      <p>Plan wisely, travel responsibly, and let the magic of Samburu unfold.</p>
    `
  },
  'sustainable-safari-eco-tourism': {
    title: 'Sustainable Safari: Our Eco‑Tourism Commitment',
    excerpt: 'Learn how Samburu Elephant Lodge contributes to conservation efforts and empowers local communities through responsible tourism practices.',
    author: 'Samburu Elephant Lodge',
    date: 'July 14, 2025',
    readTime: '6 min read',
    category: 'Conservation',
    image: '/lovable-uploads/7ca574ad-4fab-422e-b0e8-19d05f205a0f.png',
    content: `
      <h2>1. Eco-Luxury Rooted in Conservation</h2>
      
      <p>Samburu Elephant Lodge offers more than just a place to stay—it's a model of responsible tourism that blends comfort with a deep respect for the environment. Every aspect of the lodge is designed to minimize ecological impact while enhancing the guest experience.</p>
      
      <ul>
        <li>Powered largely by solar energy and built using locally sourced materials.</li>
        <li>Employs water-saving systems and responsible waste management.</li>
        <li>Operates with a low-impact philosophy to preserve the surrounding ecosystem.</li>
      </ul>
      
      <p>By staying at the lodge, guests enjoy sustainable luxury without compromising the integrity of Samburu's wild landscape.</p>

      <h2>2. Active Participation in Wildlife Conservation</h2>
      
      <p>The lodge plays an important role in protecting the wildlife that makes Samburu so special.</p>
      
      <ul>
        <li>Supports the conservation of the "Samburu Special Five" and other endangered species like the Grevy's zebra.</li>
        <li>Partners with local conservancies and non-profits involved in anti-poaching efforts and habitat preservation.</li>
        <li>Contributes to wildlife monitoring projects, including tracking of elephants, big cats, and bird species.</li>
      </ul>
      
      <p>A portion of every stay goes directly toward funding these critical conservation initiatives.</p>

        <h2>3. Community Empowerment Through Tourism</h2>
        <p>At the heart of Samburu Elephant Lodge's eco-tourism mission is a commitment to uplifting local communities.</p>
        
        <ul>
          <li>The lodge employs and trains Samburu locals, providing valuable skills and steady income.</li>
          <li>It supports educational programs, including school fees and scholarships for local children.</li>
          <li>Encourages cultural exchange through village visits, storytelling sessions, and traditional craft demonstrations.</li>
        </ul>
        
        <p>Tourism at Samburu Elephant Lodge isn't just about seeing Africa—it's about engaging with it respectfully and responsibly.</p>

        <h2>4. Community-Led Conservation in Action</h2>
        <p>The lodge works closely with neighboring conservancies such as the Westgate Community Conservancy to ensure that conservation and community development go hand-in-hand.</p>
        
        <ul>
          <li>Helps maintain wildlife corridors that also support sustainable grazing.</li>
          <li>Invests in clean water projects and community health services.</li>
          <li>Supports youth education on wildlife and ecosystem protection.</li>
        </ul>
        
        <p>This collaborative model empowers local people to become stewards of the land, ensuring long-term sustainability.</p>

        <h2>5. Beyond Sustainability: Regenerative Tourism</h2>
        <p>Samburu Elephant Lodge follows the principles of regenerative tourism, aiming not only to preserve the environment but to improve it.</p>
        
        <ul>
          <li>Participates in land restoration and reforestation projects.</li>
          <li>Supports rewilding initiatives and wildlife population recovery programs.</li>
          <li>Encourages tourism that actively contributes to the renewal of landscapes, cultures, and livelihoods.</li>
        </ul>
        
        <p>This approach goes beyond "do no harm" and creates lasting, positive change for the environment and people of Samburu.</p>

        <h2>Your Role as a Guest</h2>
        <p>Every guest who chooses Samburu Elephant Lodge becomes a partner in its mission.</p>
        
        <ul>
          <li>Your visit helps fund conservation and anti-poaching efforts.</li>
          <li>Your stay supports local employment and skills development.</li>
          <li>Your interest in local culture strengthens pride and preservation efforts.</li>
          <li>Your environmental awareness adds momentum to sustainable travel across Africa.</li>
        </ul>
        
        <p>Responsible tourism isn't just an idea here—it's a lived experience.</p>

        <h2>Final Thoughts</h2>
        <p>Samburu Elephant Lodge is redefining what it means to go on safari. It's not just about witnessing wildlife—it's about protecting it. Not just about comfort—but community. And not just sustainability—but regeneration.</p>
        
        <p>By choosing to travel consciously, you help protect Samburu's beauty, support its people, and inspire a new kind of adventure—one that leaves the world better than you found it.</p>
      </div>
    `
  },
  'more-than-safari-changes-lives': {
    title: 'More Than a Safari: How Your Stay Changes Lives',
    excerpt: 'Discover the profound impact your visit has on wildlife conservation, community empowerment, and environmental restoration in Samburu.',
    author: 'Samburu Elephant Lodge',
    date: 'July 14, 2025',
    readTime: '7 min read',
    category: 'Impact Stories',
    image: '/lovable-uploads/1fbbafa5-a3d3-4162-b471-49f406e6f193.png',
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead text-xl text-brand-brown/80 mb-8">When you choose Samburu Elephant Lodge for your safari adventure, you're not just booking a vacation—you're becoming part of a story that extends far beyond your stay. Every night you spend with us, every meal you enjoy, every game drive you take creates ripples of positive change that touch wildlife, communities, and landscapes in ways that will surprise and inspire you.</p>

        <h2>The Wildlife You Help Protect</h2>
        <p>As you watch a herd of elephants moving gracefully along the Ewaso Ng'iro River, you're witnessing the result of conservation efforts your stay directly supports. These gentle giants, along with the rare Grevy's zebras and reticulated giraffes that call Samburu home, benefit from anti-poaching patrols funded by tourism revenue.</p>

        <blockquote class="border-l-4 border-brand-terracotta pl-6 my-8 italic text-lg">
          "In the past year alone, guest contributions have helped us maintain 24/7 anti-poaching patrols across 2,000 square kilometers of critical wildlife habitat."
        </blockquote>

        <p>Your visit contributes to cutting-edge wildlife monitoring programs. GPS collars track elephant movements, helping researchers understand migration patterns and identify critical corridors that need protection. Camera traps funded by lodge guests capture the secret lives of leopards and other elusive predators, providing crucial data for conservation strategies.</p>

        <h2>The Community Stories Behind Your Experience</h2>
        <p>Meet Sarah, a young Samburu woman who started as a housekeeper at the lodge five years ago. Today, she's our head of guest relations, fluent in three languages, and pursuing a degree in hospitality management—made possible by the education fund supported by guest stays.</p>

        <p>Her story isn't unique. Daniel, once a struggling pastoralist, now leads cultural tours that showcase Samburu traditions while providing sustainable income for his family. The beadwork you admire in your tent? It's crafted by Mary and her women's cooperative, a group that's gained economic independence through partnerships with the lodge.</p>

        <div class="bg-brand-cream/30 p-6 rounded-lg my-8">
          <h3 class="mt-0">Impact by the Numbers</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-brand-terracotta">127</div>
              <div class="text-sm">Local jobs created</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-brand-terracotta">43</div>
              <div class="text-sm">Children in education program</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-brand-terracotta">8</div>
              <div class="text-sm">Water projects completed</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-brand-terracotta">1,200</div>
              <div class="text-sm">Hectares under protection</div>
            </div>
          </div>
        </div>

        <h2>Environmental Regeneration in Action</h2>
        <p>The landscape around Samburu tells a story of recovery. Areas once degraded by overgrazing now flourish with native vegetation, thanks to community-led restoration projects funded by responsible tourism. Your carbon footprint from travel is offset through reforestation initiatives that have planted over 10,000 indigenous trees in the past two years.</p>

        <p>The lodge operates as a living laboratory for sustainable practices. Solar panels provide clean energy, greywater systems nourish indigenous gardens, and waste reduction programs have achieved an 85% diversion rate from landfills. These innovations, made possible by guest support, serve as models for other properties across Kenya.</p>

        <h2>The Ripple Effect of Responsible Travel</h2>
        <p>Your choice to stay at Samburu Elephant Lodge demonstrates that luxury and responsibility can coexist beautifully. This sends a powerful message to the tourism industry: travelers want experiences that enrich rather than exploit.</p>

        <p>Local schools now include conservation education in their curricula, funded by lodge partnerships. Children who once saw wildlife as competition for resources now understand elephants and lions as partners in a healthy ecosystem—and as keys to their community's sustainable future.</p>

        <h2>The Legacy You Leave Behind</h2>
        <p>As your safari vehicle disappears into the sunset on your final game drive, the impact of your visit continues. The ranger who guided you uses his salary to support three families. The cook who prepared your meals sends her daughter to university. The conservation projects you funded protect wildlife for future generations.</p>

        <p>But perhaps most importantly, you return home as an ambassador for Samburu—carrying stories of a place where tourism truly makes a difference, inspiring others to travel with intention and purpose.</p>

        <h2>Beyond Your Stay: Staying Connected</h2>
        <p>Your relationship with Samburu doesn't end when you leave. Through our guest portal, you can follow the progress of conservation projects, receive updates on the animals you've encountered, and continue supporting initiatives that matter to you.</p>

        <p>Many guests become long-term conservation partners, funding specific projects like elephant collaring programs or borehole construction. Others return annually, witnessing firsthand the positive changes their support creates.</p>

        <h2>A New Model for Travel</h2>
        <p>This is what 21st-century travel looks like—immersive, impactful, and regenerative. It's tourism that doesn't just take beautiful photos but creates beautiful change. It's hospitality that doesn't just serve guests but serves the greater good.</p>

        <p>When you choose Samburu Elephant Lodge, you're not just choosing a destination. You're choosing to be part of a movement that's redefining what it means to explore the world responsibly.</p>

        <blockquote class="border-l-4 border-brand-terracotta pl-6 my-8 italic text-lg">
          "Travel is not just about the places you visit, but the positive change you leave behind. At Samburu, every guest becomes a force for conservation, community empowerment, and environmental healing."
        </blockquote>

        <p>Your safari at Samburu Elephant Lodge is more than a vacation—it's a transformative experience that changes lives, protects wildlife, and preserves one of Africa's most magnificent landscapes for generations to come.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    if (slug && blogPosts[slug as keyof typeof blogPosts]) {
      const post = blogPosts[slug as keyof typeof blogPosts];
      updatePageMeta(
        `${post.title} - Samburu Elephant Lodge Blog`,
        post.excerpt,
        `/blog/${slug}`
      );
    } else {
      updatePageMeta(
        "Blog Post Not Found - Samburu Elephant Lodge",
        "The blog post you're looking for doesn't exist. Explore our other safari stories and wildlife conservation insights.",
        `/blog/${slug}`
      );
    }
  }, [slug]);
  
  if (!slug || !blogPosts[slug as keyof typeof blogPosts]) {
    return (
      <div className="min-h-screen bg-brand-cream/30">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-playfair text-brand-brown mb-4">Blog Post Not Found</h1>
          <p className="text-brand-brown/70 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="outline" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const post = blogPosts[slug as keyof typeof blogPosts];

  return (
    <div className="min-h-screen bg-brand-cream/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="inline-block bg-brand-terracotta text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <Link to="/blog">
              <Button variant="outline" className="inline-flex items-center gap-2 hover:bg-brand-cream/50 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
          
          <div 
            className="bg-white rounded-xl p-16 md:p-24 shadow-lg border border-brand-cream/30 
              prose prose-xl max-w-none leading-relaxed
              [&_h2]:font-playfair [&_h2]:text-brand-brown [&_h2]:text-4xl [&_h2]:leading-tight [&_h2]:mb-16 [&_h2]:mt-32 [&_h2]:first:mt-0
              [&_h3]:font-playfair [&_h3]:text-brand-brown [&_h3]:text-3xl [&_h3]:mb-12 [&_h3]:mt-24
              [&_p]:text-lg [&_p]:leading-loose [&_p]:mb-12 [&_p]:text-brand-brown/80
              [&_ul]:mb-16 [&_ul]:mt-8 [&_li]:mb-6 [&_li]:text-lg [&_li]:leading-relaxed [&_li]:text-brand-brown/80
              [&_strong]:text-brand-brown [&_strong]:font-semibold
              [&_table]:border-brand-cream/50 [&_table]:mb-20 [&_table]:mt-12 [&_table]:shadow-md [&_table]:rounded-lg [&_table]:overflow-hidden
              [&_th]:bg-brand-cream/40 [&_th]:text-brand-brown [&_th]:font-semibold [&_th]:p-4
              [&_td]:text-brand-brown/80 [&_td]:p-4 [&_td]:border-brand-cream/30
              [&_blockquote]:border-l-4 [&_blockquote]:border-brand-terracotta [&_blockquote]:bg-brand-cream/20 
              [&_blockquote]:px-8 [&_blockquote]:py-8 [&_blockquote]:rounded-r-lg [&_blockquote]:my-20 [&_blockquote]:text-brand-brown/90 [&_blockquote]:text-xl [&_blockquote]:italic
              [&_.bg-brand-cream\\/30]:bg-brand-cream/20 [&_.bg-brand-cream\\/30]:p-10 [&_.bg-brand-cream\\/30]:rounded-xl [&_.bg-brand-cream\\/30]:my-16
              [&_.grid]:gap-8 [&_.text-center]:mb-0
              first-letter:text-7xl first-letter:font-bold first-letter:text-brand-terracotta first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:leading-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-20 text-center p-12 bg-gradient-to-br from-brand-cream/40 to-brand-terracotta/15 rounded-2xl border border-brand-cream/50">
            <h3 className="text-4xl font-playfair font-bold text-brand-brown mb-8">Ready to Experience Samburu?</h3>
            <p className="text-xl text-brand-brown/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join us for an unforgettable safari experience that makes a real difference for wildlife conservation and local communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-10 py-4 text-lg font-medium">
                  Book Your Stay
                </Button>
              </Link>
              <Link to="/accommodations">
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-medium">
                  View Accommodations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;