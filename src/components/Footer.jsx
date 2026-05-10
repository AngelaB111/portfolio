export function Footer() {
  return (

    <div className="w-full bg-[#020617]  text-on-background relative">
      <div className="absolute bottom-20 -left-24 w-64 h-64 bg-on-primary-fixed/100 blur-[500px] rounded-full" />
      {/* <div className="absolute bottom-20 -z-3 right-5 w-64 h-64 bg-on-secondary-fixed-variant/40 blur-[500px] rounded-full" /> */}
    
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