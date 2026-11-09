import { useLanguage } from '../context/LanguageContext';
import { courseCopy } from '../data/courseProjects';

export function Experience() {
  const { language } = useLanguage();
  const copy = courseCopy[language];
  return <section id="experience" className="py-24 px-6 md:px-10 border-t border-current bg-[var(--color-kvs-light)]">
    <h2 className="section-label mb-12">{copy.experience}</h2>
    <div className="grid md:grid-cols-2 gap-10 md:gap-16">
      {copy.jobs.map(job => <article key={job.organisation} className="border-t border-current pt-6">
        <p className="text-xs font-mono opacity-65 mb-4">{job.period}</p>
        <h3 className="text-display text-2xl font-bold mb-3">{job.role}</h3>
        <p className="text-sm font-serif italic mb-6">{job.organisation}</p>
        <ul className="list-disc pl-5 space-y-3 text-sm leading-relaxed opacity-85">{job.points.map(point => <li key={point}>{point}</li>)}</ul>
      </article>)}
    </div>
  </section>;
}
