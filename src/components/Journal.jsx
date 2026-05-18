import React from "react";

import awsImg from "../images/journal/aws.png";
import ccnaImg from "../images/journal/ccna.png";
import awspdf from "../journal/aws.pdf";
import ccnapdf from "../journal/ccna.pdf";

import iotimg from "../images/journal/iot.png";
import iotpdf from "../journal/iot.pdf";
export function Journal() {
  const sections = [
    {
      title: "Certifications",
      items: [
        {
          title: "Cloud Practitioner",
          org: "Amazon Web Services (AWS)",
          date: "[12-2025]",
          details:
            "Validated foundational knowledge of cloud concepts, security, technology, and billing. Demonstrating proficiency in AWS core services and infrastructure.",
          imageSrc: awsImg,
          imageAlt: "aws certification",
          files: [
            {
              label: "Certificate PDF",
              href: awspdf,
            },
          ],
        },
        {
          title: "CCNaV7",
          org: "Cisco Networking academy ",
          date: "[2024]",
          details:
            "Covered the architecture, structure, functions, and components of the Internet and other computer networks. Specialized in IP addressing, Ethernet switching, and basic routing principles.",
          imageSrc: ccnaImg,
          imageAlt: "ccnav7 certification",
          files: [
            {
              label: "Certificate PDF",
              href: ccnapdf,
            },
          ],
        },
        {
          title: "Introduction to IoT and Digital Transformation",
          org: "Cisco Networking academy ",
          date: "[2024]",
          details:
            "Explored the ecosystem of interconnected devices and how digital transformation leverages data, automation, and security to solve real-world problems. Gained a foundational understanding of IoT architecture, sensor networks, and edge-to-cloud data processing pipelines.",
          imageSrc: iotimg,
          imageAlt: "iot certification",
          files: [
            {
              label: "iot PDF",
              href: iotpdf,
            },
          ],
        },
      ],
    },
    // {
    //   title: "Research & Experiments",
    //   items: [
    //     {
    //       title: "[Topic] — [Short outcome]",
    //       date: "[Month Year]",
    //       details:
    //         "[1-3 lines summarizing what you researched, key findings, and what you applied to your projects.]",
    //       files: [
    //         {
    //           label: "Experiment notes",
    //           href: "/journal/experiment-notes.txt",
    //         },
    //       ],
    //     },
    //     {
    //       title: "[Topic] — [Short outcome]",
    //       date: "[Month Year]",
    //       details:
    //         "[1-3 lines summarizing what you researched, key findings, and what you applied to your projects.]",
    //     },
    //   ],
    // },
    {
      title: "Books I Recommend",
      items: [
        {
          title: "The Pragmatic Programmer",
          author: "Andrew Hunt and David Thomas",
          details:
            "One of the best books for developing engineering instincts. The ideas around DRY('Don't Repeat Yourself'), ownership, debugging, automation, and thinking long-term are foundational and every developer should get hands on.",
        },
        {
          title: "Designing Data-Intensive Applications",
          author: "Martin Kleppmann",
          details:
            "This book is excellent if you want to stand out for backend/distributed systems roles. It will deepen your understanding of scalable system design and distributed architectures, influencing how you think about building reliable backend systems.",
        },
        {
          title: "A Philosophy of Software Design",
          author: "John Ousterhout",
          details:
            "This book focuese onfocuses on managing complexity, practical design decisions, abstraction depth and readability.",
        },
      ],
    },
    // {
    //   title: "Notes & Highlights",
    //   items: [
    //     {
    //       title: "[Key takeaway]",
    //       date: "[Month Year]",
    //       details:
    //         "[A bullet/paragraph you want to remember—framework choices, architecture lessons, best practices, etc.]",
    //     },
    //   ],
    // },
  ];

  return (
    <section className="min-h-screen bg-[#020617] pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-blue-400 text-sm uppercase tracking-[0.2em] mb-4">
            Journal
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">
            Certifications, Research, Books & Notes
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl leading-relaxed">
            A personal log of what I study, test, and recommend.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[36px] border border-white/10 bg-slate-900/70 backdrop-blur-xl p-8"
            >
              <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                {section.title}
              </h2>

              <div className="grid gap-5">
                {section.items.map((item, idx) => (
                  <article
                    key={idx}
                    className="rounded-3xl border border-white/10 bg-slate-900/80 p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h3 className="text-white text-lg font-semibold">
                          {item.title}
                        </h3>
                        {item.org && (
                          <p className="text-blue-300 text-sm font-medium mt-1">
                            {item.org}
                          </p>
                        )}
                        {item.author && (
                          <p className="text-blue-300 text-sm font-medium mt-1">
                            {item.author}
                          </p>
                        )}
                      </div>
                      {item.date && (
                        <p className="text-slate-400 text-sm md:text-right">
                          {item.date}
                        </p>
                      )}
                    </div>

                    {item.imageSrc && (
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt || item.title}
                        className="mt-4 w-80 border border-white/10 bg-slate-800/50"
                        loading="lazy"
                      />
                    )}

                    {item.details && (
                      <p className="text-slate-400 mt-4 leading-relaxed">
                        {item.details}
                      </p>
                    )}

                    {item.files && item.files.length > 0 && (
                      <div className="mt-5">
                        <p className="text-blue-300 text-sm font-medium mb-2">
                          Attachments
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {item.files.map((file, fileIdx) => (
                            <a
                              key={fileIdx}
                              href={file.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:bg-slate-900"
                            >
                              {file.label || "View file"}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
