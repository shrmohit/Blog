function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">DevBlog</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Dive into articles, tutorials, and developer stories. Learn modern web
          dev, JavaScript, AI and more—crafted for curious minds.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium shadow">
            Explore Blogs
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg text-sm font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
