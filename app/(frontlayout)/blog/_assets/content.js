import Image from "next/image";
import marcImg from "@/public/logo.svg";
import introducingSupabaseImg from "@/public/blog/culture.png";
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
      "Embracing the Past to Enrich the Future: Cultural Preservation at UMAA",
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
            Myanmar American Association (UMAA), cultural preservation is not
            just an activity; it&apos;s a mission to keep the Burmese spirit
            alive and pulsating within the diaspora.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Keeping Traditions Alive</h3>
          <p className={styles.p}>
            In our fast-paced global society, cultural lines can blur, and
            traditions can fade. UMAA stands as a bulwark against this loss,
            actively working to maintain the colorful tapestry of Burmese
            culture through various initiatives. From traditional dance and
            music to the Burmese language and culinary arts, UMAA&apos;s
            cultural preservation efforts are as diverse as the community it
            serves. Each program is designed to engage individuals of all ages,
            creating a living bridge between the past and the present.
          </p>
          <br />
          <p className={styles.p}>
            The organization&apos;s cultural workshops and events serve as
            platforms where the community can come together to learn, celebrate,
            and pass on the torch of their heritage. These gatherings are not
            just about remembering the past; they are about making it a tangible
            and integral part of the present. Through these experiences, UMAA
            ensures that the Burmese culture is not only remembered but also
            practiced, appreciated, and cherished.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Fostering Cultural Identity</h3>
          <p className={styles.p}>
            Cultural identity forms the cornerstone of our individual and
            collective sense of self. UMAA recognizes this and is dedicated to
            nurturing a strong cultural identity within the Burmese-American
            community. Through education and celebration, the organization helps
            individuals forge a deep connection with their roots while also
            honoring the diversity of experiences that shape the
            Burmese-American narrative.
          </p>
          <br />
          <p className={styles.p}>
            {" "}
            UMAA&apos;s cultural preservation initiative also plays a critical
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
          By focusing on cultural preservation, UMAA ensures that the beauty of
          Burma&apos;s past continues to inform and inspire future generations,
          contributing to a more vibrant and cohesive community that honors
          where it has come from as it looks forward to where it is going.
        </p>
      </>
    ),
  },
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "education",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Education",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description: "Lighting the Path Forward: UMAA's Commitment to Education",
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
      urlRelative: "/blog/education/header.jpg",
      alt: "Students in a classroom",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={education}
          alt="Students in a classroom"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Unlocking Potential Through Learning</h2>
          <p className={styles.p}>
            Education is the beacon that guides the journey of progress and
            empowerment. At the United Chin Association (UMAA), we
            believe that access to education is fundamental to individual and
            community development. As part of our mission, UMAA is devoted to
            fostering educational opportunities for the Burmese community,
            aiming to introduce scholarships and grants for those in need and
            academic high achievers. This commitment is not just about providing
            resources; it&apos;s about nurturing dreams and opening doors to new
            possibilities.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>
            Scholarships: A Stepping Stone to Success
          </h3>
          <p className={styles.p}>
            UMAA&apos;s envisioned scholarship programs are more than just
            financial aid; they are stepping stones for promising students who
            aspire to reach higher in their educational pursuits. By offering
            scholarships to in-need and academically gifted students, UMAA seeks
            to remove the barriers that prevent talented individuals from
            realizing their full potential. These scholarships will not only
            support the recipients but also serve as an investment in the
            intellectual capital of the Burmese community.
          </p>
          <br />
          <p className={styles.p}>
            The goal is to cultivate a culture of achievement and aspiration
            where financial constraints do not dictate one&apos;s educational
            journey. UMAA&apos;s scholarships will aim to reward excellence and
            perseverance, encouraging students to excel and become leaders who
            will shape the future of our community and beyond. Through this
            support, we will witness the growth of a new generation of
            professionals, thinkers, and innovators.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>
            Grants: Empowering Through Educational Resources
          </h3>
          <p className={styles.p}>
            As UMAA grows, so does our vision to expand educational support
            through grants. These grants will be designed to provide the
            necessary resources for educational projects, research initiatives,
            and community-based educational programs. By empowering students and
            educators with the tools they need, UMAA will help to cultivate an
            environment where learning is accessible, and knowledge is
            celebrated.
          </p>
          <br />
          <p className={styles.p}>
            {" "}
            Grants will also facilitate the development of innovative
            educational programs that address the unique needs of the Burmese
            community. Whether it&apos;s language preservation, bridging
            educational gaps, or enhancing academic standards, these grants will
            enable passionate educators to implement programs that have a
            lasting impact. UMAA&apos;s commitment to education through grants
            is a testament to our belief that a well-resourced education system
            is the foundation of a thriving community.
          </p>
        </section>
        <hr className="my-12" />
        <p className={styles.p}>
          Through the introduction of scholarships and grants, UMAA aims to
          build a legacy of learning that elevates the community. We envision a
          future where every member of the Burmese community is equipped with
          the education and skills needed to navigate and succeed in a complex
          world. Education is the key to unlocking that future, and UMAA is here
          to turn the key.
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
    description: "Cultivating Personal Growth Through Volunteerism with UMAA",
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
          <h2 className={styles.h2}>The Journey of Self-Enhancement</h2>
          <p className={styles.p}>
            Personal growth is a continuous journey, an ever-evolving process of
            enhancing oneself to achieve full potential. At the United Myanmar
            American Association (UMAA), we&apos;re dedicated to providing a
            fertile ground for this growth, especially through the avenue of
            volunteerism. Our commitment is twofold: to uplift the community we
            serve and to enrich the lives of those who join us in this noble
            cause.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Grow as You Give</h3>
          <h4 className={styles.h4}>
            Volunteering: A Catalyst for Self-Development
          </h4>
          <p className={styles.p}>
            Engaging in volunteer work with UMAA isn&apos;t just about the work
            you do; it&apos;s about the person you become in the process.
            Volunteers are the backbone of our organization, and we pride
            ourselves on creating opportunities that promote skill development,
            leadership, and personal fulfillment. Our programs are designed not
            just to meet the needs of the community but to ensure that each
            volunteer gains invaluable life experiences.
          </p>
          <br />
          <p className={styles.p}>
            From organizing community events to leading educational workshops,
            volunteers have the chance to hone a variety of skills including
            project management, communication, and teamwork. As volunteers face
            new challenges and tasks, they also learn adaptability and
            problem-solving—skills that are transferrable to any career path. At
            UMAA, personal growth is an intrinsic part of the volunteer journey,
            providing a path to discover new passions and potentials.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>The Uplifting Experience</h3>
          <p className={styles.p}>
            UMAA is deeply committed to the personal growth of its volunteers,
            recognizing that by uplifting individuals, we uplift the entire
            community. We provide a supportive environment where volunteers can
            pursue their interests, learn new skills, and take on leadership
            roles. It&apos;s a place where growth is not only encouraged but
            expected; where each contribution is valued and every achievement
            celebrated.
          </p>
          <br />
          <p className={styles.p}>
            {" "}
            We understand that personal growth extends beyond acquiring
            skills—it&apos;s about building confidence, fostering resilience,
            and developing a network of supportive peers. UMAA offers mentorship
            and guidance, ensuring that volunteers have the resources and
            support they need to succeed. Whether it&apos;s through leading a
            project, participating in training sessions, or collaborating with a
            team, volunteers at UMAA gain the confidence to take on new
            challenges and the competence to achieve them.
          </p>
        </section>
        <hr className="my-12" />
        <p className={styles.p}>
          By volunteering with UMAA, individuals embark on a journey of personal
          growth that is both fulfilling and transformative. The
          organization&apos;s commitment to the development of its volunteers
          reflects the broader mission to empower the Burmese community through
          collective and individual uplift. Join us, and grow not just in
          service to others, but in service to your own potential.
        </p>
      </>
    ),
  },
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "social-services",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Social Services",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description: "Navigating New Beginnings: UMAA's Social Services Support",
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
      urlRelative: "/blog/social-services/header.jpg",
      alt: "Students in a classroom",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={social}
          alt="Students in a classroom"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Bridging the Gap to Resources</h2>
          <p className={styles.p}>
            Embarking on life in a new country can be a daunting venture.
            Recognizing this, the United Chin Association (UMAA)
            dedicates itself to smoothing this transition for new immigrants
            through its social services mission. As one of the four pillars of
            our organization, we provide a guiding light for newcomers, helping
            them find resources, apply for jobs, and access social benefits
            available from the government. UMAA stands firm in its commitment to
            being a steadfast ally during these transformative times.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Resource Navigation for New Beginnings</h3>
          <h4 className={styles.h4}>A Helping Hand in Employment</h4>
          <p className={styles.p}>
            Starting afresh in a new country often means seeking new employment
            opportunities. UMAA is here to assist new immigrants in navigating
            the job market with resources that prepare them for success. From
            resume building workshops to job fairs and networking events, we are
            here to help bridge the gap between skills and opportunities. Our
            aim is to empower immigrants with the tools they need to become
            self-reliant, contributing members of the community.
          </p>
          <br />
          <p className={styles.p}>
            UMAA understands that employment is more than just a job; it&apos;s
            a stepping stone to stability and integration into society.
            Therefore, our job support programs are tailored to match individual
            skills with the right opportunities, recognizing the diverse talents
            that immigrants bring to the table. We believe that with the right
            support, every individual can find a place to thrive professionally.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Securing Social Benefits</h3>
          <h3 className={styles.h4}>Access to Governmental Support</h3>
          <p className={styles.p}>
            Navigating the complex landscape of social benefits can be
            overwhelming for new immigrants. UMAA&apos;s social services mission
            simplifies this process, offering guidance on how to apply for and
            utilize government-provided social benefits. Our team provides
            assistance with filling out applications, understanding eligibility
            criteria, and connecting individuals with the appropriate agencies.
          </p>
          <br />
          <p className={styles.p}>
            {" "}
            Our commitment extends to ensuring that new members of our community
            are aware of and can access the full range of benefits they are
            entitled to. From healthcare and housing assistance to educational
            and family services, UMAA serves as a reliable resource hub,
            demystifying the complexities of social welfare programs. We strive
            to ensure that no individual or family goes without the support they
            need during their resettlement period.
          </p>
        </section>
        <hr className="my-12" />
        <p className={styles.p}>
          Through these focused efforts in employment assistance and benefit
          navigation, UMAA&apos;s social services mission is a testament to our
          dedication to uplift and support the Myanmar community. We stand as a
          beacon of hope and assistance, ensuring that the path to a fulfilling
          life in a new country is accessible to all. Our doors are open, and
          our resources are here to help every step of the way.
        </p>
      </>
    ),
  },
];
