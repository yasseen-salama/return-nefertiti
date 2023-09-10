import dynamic from 'next/dynamic';

const Nefertiti = dynamic(() => import('../components/Nefertiti'), {
  ssr: false,
  loading: ({ isLoading, error }) => {
    if (isLoading) {
      return (
        <div>
        </div>
      );
    }
    if (error) {
      return <p>Sorry, there was a problem loading the page. Please retry again.</p>;
    }
    return null;
  },
});

export default function Home() {
  return (
    <div>
      <Nefertiti />
    </div>

  )
}
