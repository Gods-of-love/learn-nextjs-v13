// Route	                Example URL	params
// app/blog/[slug]/page.js	/blog/a	{ slug: 'a' }
// app/blog/[slug]/page.js	/blog/b	{ slug: 'b' }
// app/blog/[slug]/page.js	/blog/c	{ slug: 'c' }

// export default function Page({ params }: { params: { slug: string } }) {
//   return <div>My Post: {params.slug}</div>;
// }
