function Hero() {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
      <div className="space-y-4">
        <h1 className="font-crimson uppercase text-7xl md:text-8xl">Soma</h1>
        <p className="italic text-xl md:text-2xl">
          A ongoing study of health and wellbeing.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="uppercase text-xs font-bold tracking-tight">
          About Soma
        </h2>
        <p>
          SOMA is my personal space for documenting what I'm learning about
          health, well being and the human body.
          <br />
          It's an ongoing study. Some notes are complete, some are questions,
          and some will probably change as i learn more.
          <br />
          And what better way to do this than creating this website.
        </p>
        <a href="">Read more</a>
      </div>
    </div>
  );
}

export default Hero;
