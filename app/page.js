'use client'
import Image from 'next/image'
import Checkout from './checkout';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          src="/React_Native_Logo.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <button
      onClick={(() => {
        Checkout({
          lineItems: [
            {
              price: "price_1NX78ZSCQEHlDokCaoibJdDF",quantity: 1
            },
          ],
        });
      })}
      className="w-20 h-10 bg-blue-500 text-gray-50 hover:bg-blue-400 rounded-lg">buy Now</button>
    </main>
  );
}
