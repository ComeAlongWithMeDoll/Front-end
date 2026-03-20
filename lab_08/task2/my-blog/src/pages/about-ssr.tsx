export const getServerSideProps = () => ({ props: { time: new Date().toLocaleTimeString() } });
export default function AboutSSR({ time }: { time: string }) {
  return <div><h1>About (SSR)</h1><p>Rendered at: {time}</p><p>При каждом обновлении страницы время НОВОЕ.</p></div>;
}