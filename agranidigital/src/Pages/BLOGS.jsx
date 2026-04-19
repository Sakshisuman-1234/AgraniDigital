import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';

const BLOGS = () => {

  const featuredPost = {
    category: "Cloud Security",
    date: "October 24, 2026",
    title: "The Evolution of Zero-Trust Networks in Multi-Cloud Environments",
    summary: "As enterprises scale across disparate cloud providers, traditional perimeter-based security is obsolete. Explore how modern engineering outfits are securing their borderless infrastructure using advanced identity-centric paradigms and continuous verification.",
    author: { name: "Dr. Elena Rostova", title: "Head of Security Architecture" },
    readTime: "8 min read",
    gradient: "from-[#05a6a6] via-[#2dd4bf] to-[#6d3ee8]"
  };

  const recentPosts = [
    {
      id: 1,
      category: "AI / ML",
      date: "October 18, 2026",
      title: "Deploying Large Language Models at Edge Infrastructure",
      summary: "Overcoming latency and compute bottlenecks when bringing generative AI capabilities to edge devices in manufacturing settings.",
      author: { name: "James Holden", title: "Principal ML Engineer" },
      readTime: "12 min read",
      gradient: "from-[#3b82f6] to-[#8b5cf6]"
    },
    {
      id: 2,
      category: "Data Engineering",
      date: "October 12, 2026",
      title: "Building Real-time Streaming Pipelines with Kafka & Flink",
      summary: "A deep dive into replacing batch ETL processes with real-time stream processing architectures for financial transaction analysis.",
      author: { name: "Sarah Chen", title: "Data Platform Lead" },
      readTime: "10 min read",
      gradient: "from-[#05a6a6] to-[#0ea5e9]"
    },
    {
      id: 3,
      category: "FinOps",
      date: "October 02, 2026",
      title: "FinOps 2.0: Automating Cloud Cost Optimization",
      summary: "Implementing programmatic governance to prevent cost overruns without slowing down developer velocity in Kubernetes environments.",
      author: { name: "Marcus Webb", title: "Cloud Architect" },
      readTime: "6 min read",
      gradient: "from-[#f43f5e] to-[#fb923c]"
    },
    {
      id: 4,
      category: "DevOps",
      date: "September 28, 2026",
      title: "Immutable Infrastructure: The High-Availability Standard",
      summary: "Why treating servers as disposable artifacts is the only reliable way to achieve five-nines uptime in production.",
      author: { name: "David Kim", title: "SRE Manager" },
      readTime: "7 min read",
      gradient: "from-[#6d3ee8] to-[#ec4899]"
    },
    {
      id: 5,
      category: "Cloud Native",
      date: "September 15, 2026",
      title: "Breaking the Monolith: A Microservices Migration Guide",
      summary: "Lessons learned from decomposing a legacy multi-million-line monolithic application into agile, decoupled microservices.",
      author: { name: "Priya Singh", title: "Enterprise Systems Architect" },
      readTime: "15 min read",
      gradient: "from-[#10b981] to-[#3b82f6]"
    },
    {
      id: 6,
      category: "Cybersecurity",
      date: "September 05, 2026",
      title: "Automated Threat Defense via Intelligent SOC",
      summary: "How integrating Machine Learning into Security Operations Centers reduces alert fatigue and accelerates incident response rates.",
      author: { name: "Dr. Elena Rostova", title: "Head of Security Architecture" },
      readTime: "9 min read",
      gradient: "from-[#64748b] to-[#0f172a]"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] font-sans overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />
      
      {/* Top Spacer */}
      <div className="h-[120px] w-full bg-[#fcfdfd]"></div>

      <div className="w-full flex-grow">
        
        {/* Page Header */}
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-10 pb-16">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[12px] font-[800] tracking-[0.2em] text-[#05a6a6] uppercase mb-4 drop-shadow-sm">Publications</h4>
            <h1 className="text-[42px] md:text-[56px] font-[500] text-[#111827] mb-6 tracking-tight">Insights & Engineering</h1>
            <p className="text-[18px] text-gray-500 font-light max-w-2xl leading-[1.8]">
              Deep dives, technical post-mortems, and engineering strategies from the team architecting the quantum era of enterprise tech.
            </p>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pb-20">
          
          {/* Featured Post (Hero Post) */}
          <div className="mb-20 group cursor-pointer bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col lg:flex-row">
            
            {/* Visual Side (Gradient Placeholder) */}
            <div className="lg:w-[55%] h-[300px] lg:h-[480px] relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} group-hover:scale-105 transition-transform duration-700 ease-out`}></div>
              {/* Decorative Glass Overlay */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
              
              {/* Centered Icon over gradient */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                 </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-[45%] p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-[14px] py-[6px] rounded-full bg-[#f0fdfa] text-[#0d9488] text-[11px] font-bold tracking-widest uppercase">{featuredPost.category}</span>
                <span className="text-[13px] text-gray-400 font-mono">{featuredPost.readTime}</span>
              </div>
              <h2 className="text-[28px] md:text-[34px] font-[600] text-[#111827] group-hover:text-[#05a6a6] transition-colors leading-[1.2] mb-5">
                {featuredPost.title}
              </h2>
              <p className="text-[16px] text-gray-500 font-light leading-[1.7] mb-8">
                {featuredPost.summary}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-[14px] font-[600] text-gray-900">{featuredPost.author.name}</span>
                  <span className="text-[13px] text-gray-500">{featuredPost.author.title}</span>
                </div>
                <div className="flex items-center text-[13px] font-[700] text-[#6d3ee8] mt-4 sm:mt-0 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  <span>Read Post</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-[24px] font-[600] text-[#111827] mb-8">Recent Articles</h3>

          {/* Grid of Recent Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
                
                {/* Visual Header */}
                <div className="h-[220px] relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90`}></div>
                  {/* Category Pill Over Image */}
                  <div className="absolute top-5 left-5">
                    <span className="px-[12px] py-[6px] rounded-full bg-white/90 backdrop-blur-sm text-gray-900 shadow-sm text-[10px] font-bold tracking-widest uppercase">{post.category}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-3 text-[12.5px] text-gray-400 font-mono mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-[20px] font-[600] text-[#111827] leading-[1.35] mb-3 group-hover:text-[#6d3ee8] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-[14.5px] text-gray-500 font-light leading-[1.6] mb-6 flex-grow line-clamp-3">
                    {post.summary}
                  </p>
                  
                  {/* Author Line */}
                  <div className="flex items-center pt-5 border-t border-gray-50 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-[12px] font-bold uppercase mr-3">
                      {post.author.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-[600] text-gray-900">{post.author.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Global Call to Action */}
      <CTA />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default BLOGS;
