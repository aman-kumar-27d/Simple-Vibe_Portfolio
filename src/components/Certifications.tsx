import { useEffect } from "react";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="certifications"
      className="hidden py-16 text-center sm:py-20 md:block"
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl mb-12">
        Certifications & Badges<span className="text-[var(--primary)]">.</span>
      </h2>
      <div data-cursor="disable" className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
        {CERTIFICATIONS.map((cert) => {
          if (cert.credlyId) {
            return (
              <div>
                <div
                  key={cert.credlyId}
                  className="flex-shrink-0"
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id={cert.credlyId}
                  data-share-badge-host="https://www.credly.com"
                  data-theme="dark"
                ></div>
              </div>
            );
          }
          if (cert.openBadgeSrc) {
            return (
              <div className="relative w-[200px] h-[270px] overflow-hidden">
                <iframe
                  key={cert.openBadgeSrc}
                  className="absolute top-0 left-0 w-[calc(100%+17px)] h-full border-none"
                  src={cert.openBadgeSrc}
                ></iframe>
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default Certifications;