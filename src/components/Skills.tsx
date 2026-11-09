import { useLanguage } from '../context/LanguageContext';
import { courseCopy } from '../data/courseProjects';
export function Skills() {
  const { t, language } = useLanguage();
  return <section id="skills" className="py-24 px-6 md:px-10 border-t border-current bg-white">
    <h2 className="section-label mb-12">{t.recruitment.skills}</h2>
    <div className="grid md:grid-cols-2 gap-0 border-t border-l border-current">
      {courseCopy[language].skills.map((skill, i) => <article key={skill.title} className="p-7 md:p-10 border-r border-b border-current">
        <span className="text-xs font-mono opacity-60">0{i + 1}</span>
        <h3 className="text-display text-2xl md:text-3xl font-bold mt-5 mb-4">{skill.title}</h3>
        <p className="text-base leading-relaxed opacity-80 mb-6">{skill.description}</p>
        <p className="text-sm leading-relaxed font-mono">{skill.tools.join(' · ')}</p>
      </article>)}
    </div>
  </section>;
}
