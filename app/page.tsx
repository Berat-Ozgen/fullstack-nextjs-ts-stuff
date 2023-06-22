import Link from "next/link";
import FormPost from "./Form";
import axios from "axios";

const getPosts = async () => {
  const res = await axios.get("http://localhost:3000/api/getPosts");

  return res.data;
};

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();

  console.log(data);

  return (
    <main className="py-8 px-48">
      <Link href={"/dashord"} className="bg-teal-300 text-black"></Link>
      <FormPost />
      {data.map((post) => (
        <h1 className="text-lg py-6">{post.title}</h1>
      ))}
    </main>
  );
}
