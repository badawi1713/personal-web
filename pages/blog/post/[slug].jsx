import { Author, Footer, Layout, RelatedPostCard } from "components";
import moment from "moment";
import React from "react";
import { IoCalendar } from "react-icons/io5";
import Image from 'next/image'

const Post = () => {
  return <Layout title="Blog Title">
    <main className="p-8 dark:bg-slate-800 flex flex-col gap-8 min-h-screen">
      <div className="flex flex-col gap-4">
        <div className="w-full h-96 relative">
          <Image src="/images/img-default.jpg"
            alt="illustration"
            layout="fill"
            quality={100}
            objectFit="cover"
            className="aspect-video h-full bg-cover rounded-md w-full"
            loading="lazy"
          />
        </div>
        <header>
          <h1 className="text-4xl font-bold">Blog Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <IoCalendar className="text-red-400 dark:text-sky-400" />
            <p>{moment(new Date()).format("MMMM DD, YYYY")}</p>
          </div>
        </header>
        <article className="p-4 md:p-8 dark:bg-slate-700 rounded-md shadow-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit a felis id tempor. Fusce augue sem, tempus in velit non, sagittis pretium justo. Donec lacinia eu ante iaculis egestas. Donec magna lorem, cursus in aliquet in, pellentesque a tortor. Vestibulum eros nunc, tristique tristique congue et, posuere vel felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In aliquet dolor in tempus pellentesque. Mauris et viverra nulla, ut suscipit metus. Morbi porttitor egestas nulla, vitae ultricies ante luctus vel. Integer iaculis convallis est, vehicula tristique nibh placerat ac. Sed et sollicitudin dui.
            Aliquam sit amet maximus lorem. Aliquam placerat ligula et nulla vehicula, in ullamcorper diam convallis. Proin eget posuere lacus. Donec posuere vestibulum eros vel pretium. Fusce ut mi vel risus aliquam egestas id eget ligula. Donec malesuada sem ac sem molestie, nec porta sapien consectetur. Etiam vitae massa non est commodo venenatis. Sed vel ex sit amet libero iaculis fringilla. Donec sed nulla accumsan, rhoncus urna ut, accumsan nulla. Aliquam ullamcorper bibendum bibendum.
            In vitae mi dignissim, molestie lectus quis, pellentesque purus. Nam metus nibh, mattis ut dui ut, interdum facilisis tortor. Nunc eu odio a nisi ullamcorper congue quis vel dui. Praesent blandit porttitor imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc rutrum vel tortor eu iaculis. Quisque id massa gravida, euismod dui ut, iaculis ex. Nulla id libero feugiat dolor condimentum cursus. Nulla hendrerit augue nisi, sed maximus dolor scelerisque eu. Cras vitae fermentum felis, nec interdum ligula.
            Cras pharetra ipsum ut euismod tincidunt. Mauris id arcu id justo efficitur tempor. Fusce eleifend nisi ac nisi ornare, ac interdum sem euismod. Quisque eu nibh condimentum dolor congue vehicula. Praesent placerat purus in eros egestas, ac placerat nulla placerat. Integer molestie consectetur velit eu molestie. Aenean a urna nunc. Curabitur eu libero cursus, pellentesque neque at, tincidunt ligula.
            Aenean tincidunt dolor id quam lobortis posuere. Morbi pretium sit amet ex rhoncus pharetra. Vestibulum metus mauris, varius dictum mi sed, sollicitudin fringilla enim. Fusce eget leo odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur imperdiet sem at sapien mattis venenatis. Sed pellentesque nec massa nec molestie. Vivamus ac libero id arcu bibendum ultrices. Nunc nec ex ut nunc dapibus vestibulum vel vel velit. Sed at gravida lacus, non rhoncus erat.
          </p>
        </article>
        <Author />
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <header>
          <h1 className="text-xl font-bold">Related Post</h1>
        </header>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <RelatedPostCard />
        </section>
      </div>
    </main>
    <Footer />
  </Layout>;
};

export default Post;
