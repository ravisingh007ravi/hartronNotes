import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiMessageCircle, 
  FiLink, 
  FiShoppingCart,
  FiBookOpen,
  FiHash 
} from 'react-icons/fi';

export default function Project({ darkMode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Blogs Platform",
      description: "A full-featured blogging platform where users can create, edit, and publish blog posts. Features include user authentication, comments, likes, categories, tags, and rich text editor. Built with MERN stack and enhanced security measures.",
      longDescription: "Complete blogging solution with admin dashboard, user profiles, post analytics, and SEO optimization. Users can follow authors, save favorite posts, and receive notifications. Includes comment moderation and spam protection.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      icon: <FiBookOpen className="text-4xl" />,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "TinyMCE"],
      github: "https://github.com/yourusername/blog-platform",
      demo: "https://blog-platform-demo.vercel.app",
      features: ["User Authentication", "Rich Text Editor", "Comments System", "Categories & Tags", "Search & Filter", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "URL Shortener",
      description: "Advanced URL shortening service with custom aliases, QR code generation, click analytics, and link expiration. Track visitor demographics and device information.",
      longDescription: "Feature-rich URL shortener that allows users to create short links, track clicks, analyze traffic sources, and manage links with custom slugs. Includes API access for developers and bulk link creation.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
      icon: <FiLink className="text-4xl" />,
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/url-shortener",
      demo: "https://url-shortener-demo.vercel.app",
      features: ["Custom Aliases", "QR Code Generator", "Click Analytics", "Link Expiration", "API Access", "Bulk Creation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Shopping Cart",
      description: "E-commerce shopping cart with product management, cart operations, wishlist, and secure checkout. Includes payment gateway integration and order tracking.",
      longDescription: "Complete e-commerce solution with product catalog, search and filters, user reviews, inventory management, and multiple payment options. Features admin panel for product management and order processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      icon: <FiShoppingCart className="text-4xl" />,
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "https://github.com/yourusername/shopping-cart",
      demo: "https://shopping-cart-demo.vercel.app",
      features: ["Product Catalog", "Cart Management", "Wishlist", "Secure Checkout", "Order Tracking", "Payment Gateway"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Blog Chain",
      description: "Decentralized blogging platform built on blockchain technology. Features immutable posts, token-based rewards, and decentralized storage for censorship-resistant content.",
      longDescription: "Innovative blockchain-based blogging platform where content is stored on IPFS and interactions are recorded on the blockchain. Users earn tokens for creating quality content and engaging with posts. Includes NFT integration for unique digital assets.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      icon: <FiHash className="text-4xl" />,
      technologies: ["React.js", "Solidity", "Web3.js", "Ethereum", "IPFS", "Hardhat", "Tailwind CSS"],
      github: "https://github.com/yourusername/blog-chain",
      demo: "https://blog-chain-demo.vercel.app",
      features: ["Decentralized Storage", "Token Rewards", "Immutable Posts", "Blockchain Integration", "NFT Support", "DAO Governance"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className={`py-20 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            My <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Here are some of my recent projects showcasing my skills in web development and cybersecurity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-800' 
                  : 'bg-white hover:shadow-xl'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Project Icon Overlay */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg">
                  <div className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 4 && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        +{project.features.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          darkMode
                            ? 'bg-gray-700 text-orange-400'
                            : 'bg-orange-50 text-orange-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiGithub className="text-lg" />
                    GitHub
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      darkMode
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiExternalLink className="text-lg" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              darkMode
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="text-xl" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}