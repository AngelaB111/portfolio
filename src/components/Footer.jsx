export function Footer() {
  return (

    <div className="w-full  bg-[#020617]  text-on-background relative">
     
          <div className="absolute -top-24 right-24 w-64 h-64 bg-on-primary-fixed/80 blur-[500px] rounded-full" />
             <div className="absolute bottom-20 -left-24 w-64 h-64 bg-on-primary-fixed/100 blur-[500px] rounded-full" />
         <div className="absolute -top-10 -left-5 w-64 h-64 bg-on-secondary-fixed-variant/40 blur-[500px] rounded-full" />
             <div className="absolute bottom-20 right-5 w-64 h-64 bg-on-secondary-fixed-variant/40 blur-[500px] rounded-full" />
         
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
        <footer className="bg-surface-container-lowest w-full py-lg border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-md">
          <span className="font-label-caps text-on-surface tracking-widest font-bold">
            Angela Baaity
          </span>
    
          <div className="flex gap-lg">
            <a
              className="font-code text-on-surface-variant hover:text-secondary transition-colors"
              href="https://github.com/angelab111"
            >
              Github
            </a>
            <a
              className="font-code text-on-surface-variant hover:text-secondary transition-colors"
              href="www.linkedin.com/in/angela-baaity-ab6560200"
            >
              LinkedIn
            </a>
            <a
              className="font-code text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              
            </a>
            <a
              className="font-code text-on-surface-variant hover:text-secondary transition-colors"
              href="mailto:angelabaaity@outlook.com"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}