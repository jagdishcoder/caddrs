// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [errorMessage, setErrorMessage] = useState('')
//   const router = useRouter()

//   // Hardcoded login credentials
//   const hardcodedEmail = 'jagdish@caddrs'
//   const hardcodedPassword = 'caddrs1'

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     // Check if the entered credentials match the hardcoded ones
//     if (email === hardcodedEmail && password === hardcodedPassword) {
//       router.push('/professional') // Redirect on success
//     } else {
//       setErrorMessage('Login failed: Invalid email or password') // Display error message
//     }
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           {errorMessage && (
//             <p className="text-red-500 text-sm">{errorMessage.replace("'", "&apos;")}</p> // Display error message
//           )}
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Log In
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account? <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-600">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   )
// }
