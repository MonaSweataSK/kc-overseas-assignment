import { useState } from 'react';
import { Button } from '../ui/Button';

const cities = [
  { value: '', label: 'Select City' },
  { value: 'pune', label: 'Pune' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'bangalore', label: 'Bangalore' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, city });
  };

  return (
    <footer id="footer" className="bg-neutral-dark-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="/assets/streaks.svg" alt="" className="w-full h-full object-cover object-left" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Stay updated with KC Overseas
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl border-0 bg-white/95 min-w-0 sm:min-w-[200px] focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-4 py-3 rounded-xl border-0 bg-white/95 min-w-0 sm:min-w-[180px] focus:ring-2 focus:ring-orange-500 outline-none appearance-none bg-[url('/assets/logos/chevron-down.svg')] bg-no-repeat bg-[length:16px] bg-[right_12px_center] pr-10"
            >
              {cities.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <Button type="submit" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
