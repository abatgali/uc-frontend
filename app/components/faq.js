import Link from "next/link"

const faqs = [
    {
      id: 1,
      question: "What is the United Chin International - UC Cup?",
      answer:
        "The UC Cup is an annual sporting event that brings together sports enthusiasts from all walks of life. It features a wide range of exciting competitions, including Soccer, Tennis, Ping Pong, Wrestling, Beauty Pageant, Mr. Physique, and the 100 M race. The UC Cup is about promoting sportsmanship, camaraderie, and healthy competition.",
    },
    {
    id: 2,
    question: "How can I register for an event?",
    answer:
        "Registering for a UC Cup event is easy! Visit our Events page, select your preferred sport, and click the Register Now button. Follow the simple steps to complete your registration, including providing your personal information and making the necessary payment.",
    },
    {
    id: 3,
    question: "Can I participate as an individual or as part of a team?",
    answer:
        "Depending on the sport, you may have the option to participate as an individual or as part of a team. During the registration process, you can choose your preferred participation type. Team sports like Soccer and Wrestling allow for team entries, while individual sports like the 100 M race are open to solo participants.",
    },
    {
    id: 4,
    question: "What is the registration fee, and what does it include",
    answer:
        "Registration fees vary depending on the event you choose to participate in. Each event's registration page will provide detailed information about the fee structure and what is included. Typically, the fee covers your participation, access to event facilities, and a commemorative UC Cup keepsake.",
    },
    {
    id: 5,
    question: "Are there any age or skill level requirements to participate?",
    answer:
        "The UC Cup welcomes participants of all ages and skill levels. Whether you're a seasoned athlete or a novice looking to try something new, there's an event for you. Some events may have age categories or specific rules, so be sure to check the event details for specific requirements.",
    },
    {
    id: 6,
    question: "Is there a dress code for participants?",
    answer:
        "While there is no strict dress code, we recommend wearing appropriate sports attire and footwear for your chosen event. Safety and comfort are paramount, so please adhere to any event-specific dress guidelines provided in the event details.",
    },
    {
    id: 7,
    question: "How can I contact the UC Cup organizers for further assistance?",
    answer:
        "If you have any questions, concerns, or need assistance, please don't hesitate to reach out to us. You can use the contact form on our Contact Us page, and our friendly team will get back to you as soon as possible. Additionally, you can connect with us on our social media channels for updates and announcements.",
    },
    {
    id: 8.,
    question: "Is the UC Cup affiliated with any governing sports bodies or organizations?",
    answer:
        `The UC Cup is an independent sporting event organized by passionate individuals and sports enthusiasts. While we aim to promote fair play and adhere to relevant rules and regulations for each sport, we are not formally affiliated with any specific sports governing body. If you have any more questions or need further information, please feel free to contact us, and we'll be happy to assist you. We look forward to welcoming you to the UC Cup!`,
    },

  ]
  
  export default function FAQs() {
    return (
      <div className="bg-white" id="faqs">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Have a different question and can&apos;t find the answer you&apos;re looking for? Reach out to our support team by{' '}
            <Link href="/contact" className="font-semibold text-amber-600 hover:text-orange-500">
              sending us an email
            </Link>{' '}
            and we&apos;ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
              {faqs.map((faqs) => (
                <div key={faqs.id}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faqs.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faqs.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }