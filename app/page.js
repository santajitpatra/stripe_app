'use client'
import Image from 'next/image'
import Checkout from './checkout';

export default function Home() {
  return (
    <main className="flex bg-slate-50 min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-200 p-6 rounded-lg flex flex-col items-center justify-center">
        <Image
          src="/React_Native_Logo.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <button
          onClick={() => {
            Checkout({
              lineItems: [
                {
                  price: "price_1NX78ZSCQEHlDokCaoibJdDF",
                  quantity: 1,
                },
              ],
            });
          }}
          className="mt-10 w-full h-12 bg-blue-500 text-gray-50 hover:bg-blue-400 rounded-lg"
        >
          buy Now
        </button>
      </div>
    </main>
  );
}
