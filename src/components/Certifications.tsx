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
    <section id="certifications" className="py-16 sm:py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900 dark:text-slate-50">
        Certifications & Badges
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
        {CERTIFICATIONS.map((cert) => {
          if (cert.credlyId) {
            return (
              <div
                key={cert.credlyId}
                className="flex-shrink-0"
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id={cert.credlyId}
                data-share-badge-host="https://www.credly.com"
              ></div>
            );
          }
          if (cert.openBadgeSrc) {
            return (
              <iframe
                key={cert.openBadgeSrc}
                className="flex-shrink-0"
                frameBorder="0"
                scrolling="no"
                src={cert.openBadgeSrc}
                width="200"
                height="270"
              ></iframe>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default Certifications;