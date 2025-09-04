import {services} from '../constants';

export const WhatIDo: React.FC = () => {

  return (
    <section id="what-i-do" className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl lg:text-8xl font-bold mb-8">
              <span className="">WHAT</span><br />
              <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)]">I DO</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-[50px] border border-white/10 p-8 rounded-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-full h-px bg-border mb-4"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};