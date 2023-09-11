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
    <div className="flex w-screen h-screen">
      <div className="w-1/2 h-full flex justify-center items-center text-red-500 text-xl font-custom1">
        <p>This is Nefertiti, the Queen of Egypt.<br /> Her bust was found on 6 December 1912 in Tel El Amarna.<br/>
        She was taken in 1913 to Berlin.</p>
      </div>
      <div className="w-1/2 h-full flex justify-center items-start">
        <Nefertiti />
      </div>
    </div>
  );
}