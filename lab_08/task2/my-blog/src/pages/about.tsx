export const getStaticProps = () => ({ props: { time: new Date().toLocaleTimeString() } });
export default function About({ time }: { time: string }) {
  return <div><h1>About (SSG)</h1><p>Built at: {time}</p><p>При обновлении страницы время не меняется (пока не пройдет revalidate).</p></div>;
}