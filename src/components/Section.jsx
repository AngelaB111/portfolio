export function Section(){ 
    return( 
        <div className="w-full bg-[#020617]  text-on-background relative">
     
      <section
        className="pt-20 pb-12 px-6 max-w-6xl mx-auto text-center"
        id="contact"
      >
        <div className="w-full max-w-5xl mx-auto p-xl rounded-2xl relative overflow-hidden bg-surface-container/80 border border-outline/20 backdrop-blur-md">
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-on-primary/40 blur-[500px] rounded-full" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-on-primary/40 blur-[500px] rounded-full" />
         
          <div className="relative z-10 space-y-md">
            
            <p className="font-inter text-secondary uppercase tracking-widest">
              AVAILABLE FOR OPPORTUNITIES
            </p>

            <h2 className="font-inter font-bold pt-3 text-h2 text-on-background">
              Let's build something together.
            </h2>

            <p className="font-body-lg pt-3 text-outline font-sm max-w-xl mx-auto mb-lg">
              Reach out for projects or collaborations. 
            </p>

           
            <div className="pt-sm pb-lg">
          
              <a
                href="mailto:angelabaaity@outlook.com"
                className="block w-full mx-auto py-5 bg-secondary text-on-secondary text-h1 font-h1 font-bold uppercase text-center hover:opacity-90 transition-opacity shadow-[0_0_10px_theme(colors.secondary)]"
              >
                EMAIL ME
              </a>
            </div>

            <div className="flex justify-center items-center gap-sm font-body-lg text-on-surface-variant pt-md pb-lg">
              <a href="https://github.com/angelab111" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <span className="text-on-surface-variant/50">·</span>
              <a href="www.linkedin.com/in/angela-baaity-ab6560200" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>

          </div>
        </div>
      </section>
        </div>
    ); 
}