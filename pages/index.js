import Link from 'next/link';

const Index = () => (
  <>
  <h1>pages/index.js</h1>
  <ul>
    <li>
      <Link href="/h" as={`/h`}>
        h
      </Link>
    </li>
  </ul>
  </>
);

export default Index;
