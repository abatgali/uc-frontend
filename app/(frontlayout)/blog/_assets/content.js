import Image from "next/image";
import marcImg from "@/public/logo.svg";
import introducingSupabaseImg from "@/public/blog/culture.png";
import sports from "@/public/blog/sports.jpg";
import education from "@/public/blog/education.png";
import grow from "@/public/blog/grow.png";
import social from "@/public/blog/social.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  feature: "mission",
  // tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  // {
  //   // The slug to use in the URL, from the categorySlugs object above.
  //   slug: categorySlugs.feature,
  //   // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
  //   title: "New Features",
  //   // A short version of the title above, display in small components like badges. 1 or 2 words
  //   titleShort: "Features",
  //   // The description of the category to display in the category page. Up to 160 characters.
  //   description:
  //     "Here are the latest features we've added to ShipFast. I'm constantly improving our product to help you ship faster.",
  //   // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
  //   descriptionShort: "Latest features added to ShipFast.",
  // },
  // {
  //   slug: categorySlugs.tutorial,
  //   title: "How Tos & Tutorials",
  //   titleShort: "Tutorials",
  //   description:
  //     "Learn how to use ShipFast with these step-by-step tutorials. I'll show you how to ship faster and save time.",
  //   descriptionShort:
  //     "Learn how to use ShipFast with these step-by-step tutorials.",
  // },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  marc: "President",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.marc,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Board President",
    // The job to display in the author's bio. Up to 60 characters.
    job: "",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description: "",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: marcImg,
    // A list of social links to display in the author's bio.
    socials: [
      // {
      //   name: socialIcons.twitter.name,
      //   icon: socialIcons.twitter.svg,
      //   url: "https://twitter.com/marc_louvion",
      // },
      // {
      //   name: socialIcons.linkedin.name,
      //   icon: socialIcons.linkedin.svg,
      //   url: "https://www.linkedin.com/in/marclouvion/",
      // },
      // {
      //   name: socialIcons.github.name,
      //   icon: socialIcons.github.svg,
      //   url: "https://github.com/Marc-Lou-Org/ship-fast",
      // },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "cultural-preservation",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Cultural Preservation",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Embracing the Past to Enrich the Future: Cultural Preservation at UCA",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.marc),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2023-11-20",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingSupabaseImg,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "Burmese people celebrating",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="Burmese people celebrating"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Preserving Our Heritage</h2>
          <p className={styles.p}>
            Cultural preservation is a vital thread in the fabric of any
            society, holding together the rich history, traditions, and values
            that define a community. It&apos;s about safeguarding the unique
            identity that has been shaped over generations, ensuring that it
            continues to thrive in an ever-changing world. For the United
            Myanmar American Association (UCA), cultural preservation is not
            just an activity; it&apos;s a mission to keep the Burmese spirit
            alive and pulsating within the diaspora.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Keeping Traditions Alive</h3>
          <p className={styles.p}>
            In our fast-paced global society, cultural lines can blur, and
            traditions can fade. UCA stands as a bulwark against this loss,
            actively working to maintain the colorful tapestry of Burmese
            culture through various initiatives. From traditional dance and
            music to the Burmese language and culinary arts, UCA&apos;s cultural
            preservation efforts are as diverse as the community it serves. Each
            program is designed to engage individuals of all ages, creating a
            living bridge between the past and the present.
          </p>
          <br />
          <p className={styles.p}>
            The organization&apos;s cultural workshops and events serve as
            platforms where the community can come together to learn, celebrate,
            and pass on the torch of their heritage. These gatherings are not
            just about remembering the past; they are about making it a tangible
            and integral part of the present. Through these experiences, UCA
            ensures that the Burmese culture is not only remembered but also
            practiced, appreciated, and cherished.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Fostering Cultural Identity</h3>
          <p className={styles.p}>
            Cultural identity forms the cornerstone of our individual and
            collective sense of self. UCA recognizes this and is dedicated to
            nurturing a strong cultural identity within the Burmese-American
            community. Through education and celebration, the organization helps
            individuals forge a deep connection with their roots while also
            honoring the diversity of experiences that shape the
            Burmese-American narrative.
          </p>
          <br />
          <p className={styles.p}>
            {" "}
            UCA&apos;s cultural preservation initiative also plays a critical
            role in promoting inclusivity and understanding within the broader
            society. By showcasing Burmese culture, the organization invites
            people from all backgrounds to explore and appreciate the richness
            of Burmese heritage. These cultural exchanges not only strengthen
            the identity of the Burmese community but also contribute to the
            multicultural mosaic that is America, fostering a greater
            appreciation for diversity and the stories that unite us.
          </p>
        </section>
        <hr className="my-12" />
        <p className={styles.p}>
          By focusing on cultural preservation, UCA ensures that the beauty of
          Burma&apos;s past continues to inform and inspire future generations,
          contributing to a more vibrant and cohesive community that honors
          where it has come from as it looks forward to where it is going.
        </p>
      </>
    ),
  },
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "sports",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Sports",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description: "Empowering the Chin Community Through Sports",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.marc),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-02-16",
    image: {
      // The image to display in <CardArticle /> components.
      src: sports,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/sports/sports.jpg",
      alt: "Friends on summit of a mountain",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={sports}
          alt="Friends on summit of a mountain"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>
            Empowering the Chin Community Through Sports
          </h2>
          <p className={styles.p}>
            Sports are more than just games; they are avenues for building
            camaraderie, fostering discipline, and promoting a healthy
            lifestyle. At the United Chin Association (UCA), we recognize the
            power of sports to unite communities and inspire individuals to
            reach their full potential. As part of our mission, UCA is dedicated
            to promoting sports within the Chin community, aiming to create
            opportunities for participation, growth, and excellence.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>Inclusive Sports Initiatives</h3>
          <p className={styles.p}>
            UCA&apos;s sports initiatives are designed to be inclusive,
            welcoming individuals of all ages and abilities to participate and
            thrive. We believe that sports should be accessible to everyone,
            regardless of background or skill level. Through various sports
            programs and events, UCA strives to create a supportive environment
            where individuals can discover their passion for sports, develop
            their skills, and forge lifelong friendships.
          </p>
          <br />
          <p className={styles.p}>
            Our goal is to break down barriers and stereotypes, promoting
            diversity and inclusion within the realm of sports. By celebrating
            the unique talents and contributions of every participant, we aim to
            build a strong sense of community and belonging.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>Youth Development and Mentorship</h3>
          <p className={styles.p}>
            For the youth of the Chin community, sports serve as powerful tools
            for personal development and growth. Through our youth sports
            programs, UCA provides opportunities for young individuals to learn
            valuable lessons in teamwork, leadership, and resilience. We believe
            that by instilling these values early on, we can empower the next
            generation of leaders and changemakers.
          </p>
          <br />
          <p className={styles.p}>
            Additionally, UCA is committed to providing mentorship and guidance
            to young athletes, helping them navigate the challenges and
            opportunities within the world of sports. By connecting youth with
            experienced coaches and mentors, we aim to foster a supportive
            network that nurtures talent and encourages personal growth.
          </p>
        </section>
        <hr className="my-12" />
        <p className={styles.p}>
          Through our sports programs and initiatives, UCA seeks to empower the
          Chin community, promoting unity, resilience, and excellence. We
          believe that by embracing the power of sports, we can inspire
          individuals to strive for greatness both on and off the field.
          Together, we will build a healthier, stronger, and more vibrant
          community for generations to come.
        </p>
      </>
    ),
  },
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "personal-growth",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Personal Growth",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Unlocking Potential Through Celebration and Self-Improvement",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.marc),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2023-12-10",
    image: {
      // The image to display in <CardArticle /> components.
      src: education,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/personal-growth/header.jpg",
      alt: "Students in a classroom",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={grow}
          alt="Students in a classroom"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>
            Unlocking Potential Through Celebration and Self-Improvement
          </h2>
          <p className={styles.p}>
            Personal growth is a journey of self-discovery and empowerment, a
            path that leads individuals closer to their ancestral roots while
            fostering self-improvement and fulfillment. At the United Chin
            Association (UCA), we are dedicated to guiding individuals along
            this transformative journey, offering opportunities for cultural
            celebration, community engagement, and personal development.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Connecting with Ancestral Roots</h3>
          <h4 className={styles.h4}>
            Cultural Celebrations: A Gateway to Ancestral Land
          </h4>
          <p className={styles.p}>
            Through our organized events and cultural celebrations, UCA provides
            a gateway for individuals to reconnect with their ancestral land and
            heritage. Whether it&apos;s traditional festivals, cultural performances,
            or storytelling sessions, these events immerse participants in the
            sights, sounds, and stories of Myanmar, allowing them to experience
            the richness of their cultural heritage firsthand.
          </p>
          <br />
          <p className={styles.p}>
            By celebrating Myanmar&apos;s traditions and customs, individuals gain a
            deeper appreciation for their roots and a stronger sense of
            belonging to their ancestral land. Through these experiences, UCA
            aims to instill pride, respect, and reverence for the cultural
            legacy passed down through generations, guiding individuals on a
            journey of cultural discovery and connection.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>
            Embracing Self-Improvement Through Engagement
          </h3>
          <p className={styles.p}>
            Alongside cultural celebration, UCA offers avenues for personal
            growth and self-improvement through engagement in sports, community
            events, and volunteer activities. These opportunities not only
            strengthen individuals physically and mentally but also nurture
            qualities of leadership, teamwork, and resilience.
          </p>
          <br />
          <p className={styles.p}>
            Participating in UCA-organized sports events fosters camaraderie,
            discipline, and a sense of accomplishment. Whether it&apos;s friendly
            soccer matches, traditional Chin games, or cultural sports
            festivals, individuals discover new passions, develop their skills,
            and forge meaningful relationships with fellow community members.
          </p>
          <br />
          <p className={styles.p}>
            Additionally, engagement in volunteer activities and community
            events provides opportunities for individuals to give back to their
            community, make a positive impact, and develop a sense of purpose
            and fulfillment. Through service to others, individuals experience
            personal growth, compassion, and a deeper connection to their
            community and cultural roots.
          </p>
        </section>
        <hr className="my-12" />
        <p className={styles.p}>
          At UCA, the journey of personal growth intertwines with cultural
          celebration, community engagement, and self-improvement. Through our
          collective efforts, we empower individuals to unlock their potential,
          grow closer to their ancestral land, and contribute meaningfully to
          the vibrant tapestry of our community. Join us on this transformative
          journey of celebration, connection, and self-discovery, and together,
          let&apos;s unlock the boundless potential within each of us.
        </p>
      </>
    ),
  },
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "entertainment",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Entertainment",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description: "Celebrating Myanmar's Culture",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.marc),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2023-12-10",
    image: {
      // The image to display in <CardArticle /> components.
      src: education,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/entertainment/header.jpg",
      alt: "People celebrating together",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={social}
          alt="People celebrating together"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Celebrating Myanmar&apos;s Culture</h2>
          <p className={styles.p}>
            Entertainment serves as a vibrant expression of culture, a tapestry
            woven with the threads of tradition, music, and celebration. At the
            United Chin Association (UCA), we are committed to organizing events
            that showcase the rich and diverse cultural heritage of Myanmar.
            From traditional festivals to exhilarating concerts featuring
            renowned artists, our aim is to create memorable experiences that
            celebrate the spirit of Myanmar and unite our community in joy and
            celebration.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Preserving Tradition Through Festivals</h3>
          <h4 className={styles.h4}>
            Traditional Festivals: An Expression of Heritage
          </h4>
          <p className={styles.p}>
            Traditional festivals are at the heart of Myanmar&apos;s cultural
            identity, each one weaving its own story of tradition, symbolism,
            and community. At UCA, we organize festivals that pay homage to
            Myanmar&apos;s rich cultural tapestry, including events such as
            Thingyan (Water Festival), Thadingyut (Festival of Lights), and
            Tazaungdaing (Festival of Lights).
          </p>
          <br />
          <p className={styles.p}>
            These festivals not only serve as occasions for merriment and
            celebration but also as opportunities to preserve and pass down our
            cultural heritage to future generations. Through traditional dances,
            music performances, and culinary delights, attendees immerse
            themselves in the sights, sounds, and flavors of Myanmar, fostering
            a deeper appreciation for our shared traditions and values.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Exciting Concerts and Cultural Events</h3>
          <p className={styles.p}>
            In addition to traditional festivals, UCA organizes a variety of
            exciting concerts and cultural events that showcase the dynamic
            talents of Myanmar&apos;s artists and performers. From traditional
            music and dance performances to contemporary art exhibitions and
            film screenings, our events provide a platform for artists to share
            their creativity and stories with audiences near and far.
          </p>
          <br />
          <p className={styles.p}>
            Our concerts feature a diverse lineup of artists representing
            various genres and styles, from classic Myanmar tunes to modern
            fusion sounds. These events not only entertain but also inspire,
            fostering connections and dialogue among artists, audiences, and
            communities. Through music, art, and performance, UCA aims to
            celebrate the vibrancy and diversity of Myanmar&apos;s cultural
            landscape, inviting everyone to join in the celebration.
          </p>
        </section>
        <hr className="my-12" />
        <p className={styles.p}>
          Through our events and entertainment initiatives, UCA strives to
          create inclusive spaces where individuals can come together to
          celebrate Myanmar&apos;s rich cultural heritage and artistic
          expression. Join us as we embark on a journey of discovery,
          celebration, and connection, and together, let&apos;s celebrate the
          beauty and diversity of Myanmar&apos;s cultural tapestry.
        </p>
      </>
    ),
  },
];
