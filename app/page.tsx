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
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <div className="p-5 w-full md:w-1/2 h-full flex justify-center items-start">
        <Nefertiti />
      </div>
      <div className="p-20 w-full md:w-1/2 h-full flex justify-center items-center text-red-500 md:text-2xl text-base font-custom1">
        <p>This is Nefertiti, the Queen of Egypt.<br /> Her bust was found in December 1912 in Tel El Amarna.<br/>
        She was taken in 1913 to Berlin. <br/>
        In April 1924 she went on pernament display at the Neues Museum. <br/>
        <b>After almost 100 years <u>we are bringing her back!</u></b></p>
      </div>
      
    </div>
  );
}