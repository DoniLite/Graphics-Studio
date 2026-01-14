import './index.css';
import Reventz from './logo/Reventz';
import Treefle from './logo/Treefle';

export function App() {
  return (
    <BaseAppLAyout>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <Treefle />
        <Reventz />
      </div>
    </BaseAppLAyout>
  );
}

function BaseAppLAyout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto my-4'>
      <header className='mb-4'>
        <h1 className='text-3xl font-bold text-center'>
          Welcome to my graphics studio templates
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default App;
