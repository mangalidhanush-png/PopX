export default function Arrows({ next, prev }) {
  return (
    <>
      <button className="arrow left" onClick={prev}>‹</button>
      <button className="arrow right" onClick={next}>›</button>
    </>
  );
}