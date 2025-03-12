<template>
    <div class="flex flex-col justify-center h-100 items-center mt-12 md:mt-44">
        <form class="flex flex-col bg-gray-900 p-10 md:p-16 rounded-2xl border border-white/20 backdrop-blur-lg shadow-lg w-full max-w-md"
            @submit.prevent="">

            <h1 class="text-4xl font-bold text-white text-center mb-8">
                LOGIN <span class="text-gradient">EVENTLY</span>
            </h1>

      
            <label for="email" class="text-gray-300 mb-2">Email</label>
            <div class="relative">
                <input type="email" id="email" placeholder="johndoe@gmail.com"
                    class="bg-gray-800 w-full rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all" />
                <span class="absolute right-3 top-3 text-gray-400">
                    📧
                </span>
            </div>

         
            <label for="password" class="text-gray-300 mt-4 mb-2">Password</label>
            <div class="relative">
                <input type="password" id="password" placeholder="********"
                    class="bg-gray-800 w-full rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all" />
                <span class="absolute right-3 top-3 text-gray-400">
                    🔒
                </span>
            </div>

          
            <a href="#" class="text-gray-400 text-right text-sm mt-2 hover:underline hover:text-white">
                Forgot password?
            </a>

         
            <button type="submit"
                class="relative flex justify-center items-center bg-gradient-to-r from-[#673AB7] to-[#9C27B0] text-white rounded-4xl py-3 mt-6 font-semibold text-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9C27B0]">
                Login
            </button>

      
            <p class="text-center text-gray-400 text-sm mt-4">
                Don't have an account?
                <a href="/register" class="text-white hover:underline">Sign up</a>
            </p>

        
            <button class="flex items-center justify-center bg-gray-800 text-gray-300 border border-gray-600 rounded-xl py-2 mt-6 gap-4 hover:bg-gray-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 262" class="h-6">
                    <path fill="#4285F4"
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027">
                    </path>
                    <path fill="#34A853"
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1">
                    </path>
                    <path fill="#FBBC05"
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782">
                    </path>
                    <path fill="#EB4335"
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251">
                    </path>
                </svg>
                Continue with Google
            </button>
        </form>
    </div>
</template>
