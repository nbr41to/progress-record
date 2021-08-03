import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Progress Rec</h1>
      <Image
        src={'/dan-cristian-padure-Oj7nnln5k3k-unsplash.jpg'}
        width={200}
        height={200}
      />
    </div>
  );
}
