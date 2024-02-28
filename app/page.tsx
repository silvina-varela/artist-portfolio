
import Link from 'next/link';
import menuData from '../data.json';


const HomePage = () => {

  return (
    <div>
      <h1>Home Page</h1>
      {/* Your home page content */}
      <Link href={`/[${menuData[0].slug}]`} as={`/${menuData[0].slug}`} >enter</Link>

      
    </div>

  );
};


export default HomePage;
