import { resolve } from "path";

export default async function AboutPage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <div>
      <h1 className="bg-lime-950 font-bold border-8 text-yellow-200 rounded-full border-yellow-500 p-2 m-3">
        This is About Page
      </h1>
      <p className="bg-gray-400 text-justify font-bold border-8 border-blue-800 text-emerald-950">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
        vitae recusandae quia ut rerum dolore dicta nihil saepe quam eos ratione
        ab distinctio voluptatum vero illum ullam excepturi placeat iste. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius
        debitis quibusdam illum perspiciatis non modi, placeat quasi soluta
        ducimus quam asperiores magnam porro quae tempora sed animi, sint hic.
      </p>
    </div>
  );
}
