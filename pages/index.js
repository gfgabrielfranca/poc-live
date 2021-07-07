export default function Home({ time, host }) {
  return <h1>{time} - {host}</h1>
}

export async function getStaticProps() {
  return { 
    props: { time: (new Date()).toString() }, 
    revalidate: 10 
  };
}
