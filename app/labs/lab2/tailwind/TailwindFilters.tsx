export default function TailwindFilters() {
  const src = "/images/reactjs.svg";
  return (
    <div>
      <h2 className="text-2xl font-bold">Blurs</h2>
      <div className="flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      <h3 className="mt-6 text-lg font-bold">Personal filter row</h3>
      <div className="flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="contrast-50 w-1/4" src={src} alt="contrast 50" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="contrast-150 w-1/4" src={src} alt="contrast 150" />
      </div>
      <h3 id="wd-ai-filters" className="mt-6 text-lg font-bold">
        Grayscale and brightness
      </h3>
      <div className="flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="grayscale-0 w-1/4" src={src} alt="grayscale 0" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brightness-150 w-1/4" src={src} alt="brightness 150" />
      </div>
    </div>
  );
}
