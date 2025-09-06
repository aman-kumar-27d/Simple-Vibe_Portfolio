export default function ToolsIUse() {
  
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks',
      icon: '🌐',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Django', 'CSS', 'HTML'],
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs',
      icon: '⚡',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL' ,'fastAPI', 'Postman'],
    },
    {
      title: 'Programming Languages',
      description: 'Proficient in multiple programming languages and paradigms',
      icon: '💻',
      skills: ['JavaScript', 'Python', 'Java', 'C++' , 'TypeScript'],
    },
  ];

  return (
    <section id="ToolsIUse" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold">Tools & Technologies I Use</h3>
        </div>
        
        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-white/10 backdrop-blur-[50px] border border-white/10 hover:scale-105 transition-all duration-300 group p-6 rounded-lg hover-scale ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 animate-float">
                <span className="text-primary text-xl">{category.icon}</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">{category.title}</h4>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-muted text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
