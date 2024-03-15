// // ./components/Posts.tsx

// import { SanityDocument } from "next-sanity";
// import Link from "next/link";
// import Image from "next/image";

// export default function Projects({ posts }: { posts: SanityDocument[] }) {
//   console.log("Hello", posts)
//   return (
//     <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
 
//       {posts?.length > 0 ? (
//         posts.map((post) => (
//           <Link
//           href="#"
//           >
//             <h2 className="p-4 hover:bg-blue-50">{post.name}</h2>
              
          
//           </Link>
//         ))
//       ) : (
//         <div className="p-4 text-red-500">No posts found</div>
//       )}
//     </main>
//   );
// }
