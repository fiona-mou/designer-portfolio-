import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { awards, certifications } from '../data/recognition';

export function Recognition() {
  const { t, language } = useLanguage();
  const ui = t.recruitment;
  return <section id="recognition" className="py-24 px-6 md:px-10 border-t border-current bg-[var(--color-kvs-light)]">
    <h2 className="section-label mb-6">{ui.recognition}</h2>
    <p className="max-w-2xl leading-relaxed mb-12 opacity-75">{ui.certificateNote}</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {awards.filter(award => award.featured).map(award => <article key={award.id} className="border border-current bg-white p-5 flex flex-col">
        <a href={award.certificateImage!} target="_blank" rel="noreferrer" aria-label={`${ui.certificate}: ${award.name}`} className="block mb-6 bg-[var(--color-kvs-accent)]">
          <img src={award.certificateImage!} alt={`${award.name} · ${award.prize[language]} · ${award.project}`} loading="lazy" decoding="async" className="w-full h-52 object-contain p-3 grayscale hover:grayscale-0 transition-all duration-500" />
        </a>
        <p className="text-xs uppercase tracking-widest mb-3">{award.year} · {award.prize[language]}</p>
        <h3 className="text-display text-xl font-bold mb-3">{award.name}</h3>
        <p className="text-sm opacity-75 mb-4">{t.projects.find(project => project.id === award.projectId)?.title || award.project}</p>
        <div className="mt-auto flex flex-wrap gap-4 text-xs underline">{award.projectId && <Link to={`/project/${award.projectId}`}>{ui.viewCase}</Link>}<a href={award.certificateImage!} target="_blank" rel="noreferrer">{ui.certificate} ↗</a></div>
      </article>)}
    </div>
    <details className="mt-10 border-y border-current py-5">
      <summary className="cursor-pointer uppercase text-sm tracking-widest font-bold">{ui.moreAwards}</summary>
      <div className="overflow-x-auto mt-6"><table className="w-full text-left text-sm min-w-[540px]"><thead><tr><th className="py-3">{ui.year}</th><th>{ui.recognition}</th><th>{ui.allProjects}</th><th>{ui.certificate}</th></tr></thead><tbody>
      {awards.map(award => <tr key={award.id} className="border-t border-current/20"><td className="py-4 pr-4">{award.year}</td><td className="pr-5"><strong>{award.name}</strong><br />{award.prize[language]}<span className="block text-xs opacity-65 mt-1">{award.organization}</span></td><td className="pr-4">{t.projects.find(project => project.id === award.projectId)?.title || award.project}</td><td><a className="underline" href={award.certificateImage!} target="_blank" rel="noreferrer">{ui.reviewed} ↗</a></td></tr>)}
      </tbody></table></div>
    </details>
    <div id="certifications" className="pt-20">
      <h2 className="section-label mb-6">{ui.certifications}</h2>
      <p className="max-w-2xl leading-relaxed mb-10 opacity-75">{ui.learningNote}</p>
      <div className="grid sm:grid-cols-2 gap-6">{certifications.map(certificate => <article key={certificate.id} className="border border-current p-6 bg-white">
        <p className="text-xs uppercase tracking-wide mb-4">{certificate.year} · {ui[certificate.kind as 'professional' | 'badge' | 'course' | 'specialization']}</p>
        <h3 className="font-bold text-xl mb-3">{certificate.name}</h3><p className="text-sm opacity-75 mb-6">{certificate.organization}</p>
        <div className="flex flex-wrap gap-5 text-xs underline"><a href={certificate.image} target="_blank" rel="noreferrer">{ui.certificate} ↗</a>{certificate.verifyUrl && <a href={certificate.verifyUrl} target="_blank" rel="noreferrer">{ui.verify} ↗</a>}</div>
      </article>)}</div>
    </div>
  </section>;
}
