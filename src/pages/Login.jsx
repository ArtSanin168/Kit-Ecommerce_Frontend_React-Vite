import React, { useState } from 'react'

const Login = () => {

    const [currentState,setCurrentState] = useState('Login');

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={onSubmitHandler} class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl mt-10 sm:px-10">
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-3xl font-semibold text-gray-900">{currentState}</h1>
            <p class="mt-2 text-gray-500">
            {
                        currentState === 'Login' 
                        ? <p onChange={() => setCurrentState('Sing Up')} >Please Login your account to get started</p>
                        :<p onChange={() => setCurrentState('Login')} >Create an account to get started</p>
            }
            </p>
        </div>
        <div class="mt-5">
            <form action="">
               {currentState === 'Login' ? '':<div class="relative mt-6">
                    <input type="text" name="name" id="name" placeholder="Full Name" required class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label for="name" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Full Name</label>
                </div>} 
                <div class="relative mt-6">
                    <input type="email" name="email" id="email" placeholder="Email Address" required class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                    <label for="email" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div class="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" required class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <div class="mt-4 text-left">
                    <a href="/forgot-password" class="text-sm text-gray-600 hover:underline">Forgot Password?</a>
                </div>
                <div class="my-6">
                    <button type="submit" class="w-full rounded-md bg-blue-500 active:bg-blue-700 px-3 py-4 text-white ">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
                </div>
                <p class="text-center text-sm text-gray-500">Already have an account?
                    {
                        currentState === 'Login' 
                        ? <button onClick={() => setCurrentState('Sing Up')} class=" ml-2 text-sm text-gray-600 hover:underline">Create account</button>
                        :<button onClick={() => setCurrentState('Login')} class=" ml-2 text-sm text-gray-600 hover:underline">Login</button>
                    }
                </p>
            </form>
        </div>
    </div>
</form>

  )
}

export default Login