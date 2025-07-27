const Page = async ({ params, }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  return <div>My pokemon: {slug}</div>
}

export default Page;

