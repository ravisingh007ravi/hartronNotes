const navbar =()=>{

    return `
    <header class="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
  <nav class="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
    
    <!-- Logo -->
    <h1 class="text-2xl font-bold text-white tracking-wide">
      <a href="./home.html" class="hover:text-yellow-300 transition duration-300">
        RS
      </a>
    </h1>

    <!-- Menu -->
    <ul class="flex items-center gap-10 text-white font-medium text-lg">
      <li>
        <a href="./home.html" class="relative group hover:text-yellow-300 transition duration-300">
          Home
          <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>

      <li>
        <a href="./product.html" class="relative group hover:text-yellow-300 transition duration-300">
          Product
          <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>

      <li>
        <a href="./about.html" class="relative group hover:text-yellow-300 transition duration-300">
          About
          <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>

      <li>
        <a href="./feedback.html" class="relative group hover:text-yellow-300 transition duration-300">
          Feedback
          <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>

      <li>
        <a href="./contact.html" class="relative group hover:text-yellow-300 transition duration-300">
          Contact Us
          <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    </ul>

    <!-- Login Button -->
    <a href="./LogIn.html"
      class="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300 shadow-md">
      Log In
    </a>

  </nav>
</header>
    `
}


document.getElementById('navbarjs').innerHTML = navbar()
