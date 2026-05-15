import React from "react";

export function Journal() {
  const sections = [
    {
      title: "Certifications",
      items: [
        {
          title: "[Add Your Certification Name]",
          org: "[Issuing Organization]",
          date: "[Month Year]",
          details: "[What you learned / why it matters]",
          imageSrc: "/images/journal/aws.jpg",
          imageAlt: "Certification photo (optional)",
          files: [
            {
              label: "Certificate PDF",
              href: "/journal/aws.pdf",
            },
          ],
        },
        {
          title: "[Add Your Certification Name]",
          org: "[Issuing Organization]",
          date: "[Month Year]",
          details: "[What you learned / why it matters]",
        },
      ],
    },
    {
      title: "Research & Experiments",
      items: [
        {
          title: "[Topic] — [Short outcome]",
          date: "[Month Year]",
          details:
            "[1-3 lines summarizing what you researched, key findings, and what you applied to your projects.]",
          files: [
            {
              label: "Experiment notes",
              href: "/journal/experiment-notes.txt",
            },
          ],
        },
        {
          title: "[Topic] — [Short outcome]",
          date: "[Month Year]",
          details:
            "[1-3 lines summarizing what you researched, key findings, and what you applied to your projects.]",
        },
      ],
    },
    {
      title: "Books I Recommend",
      items: [
        {
          title: "[Book Title]",
          author: "[Author]",
          date: "[When you read it or year]",
          details:
            "[Most useful idea / chapter / how it impacted your thinking.]",
        },
        {
          title: "[Book Title]",
          author: "[Author]",
          date: "[When you read it or year]",
          details:
            "[Most useful idea / chapter / how it impacted your thinking.]",
        },
      ],
    },
    {
      title: "Notes & Highlights",
      items: [
        {
          title: "[Key takeaway]",
          date: "[Month Year]",
          details:
            "[A bullet/paragraph you want to remember—framework choices, architecture lessons, best practices, etc.]",
        },
      ],
    },
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
                        className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-800/50"
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
