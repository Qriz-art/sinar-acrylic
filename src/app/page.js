"use client";

import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#070B12] text-white">
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Sinar Acrylic",
      legalName: "PT ADE SINAR LESTARI",
      telephone: "+6281548000082",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jalan Tonggara No.25 RT.14/RW.6",
        addressLocality: "Kedungbanteng",
        addressRegion: "Kabupaten Tegal",
        addressCountry: "ID",
      },
      openingHours: "Mo-Su 08:00-17:00",
      areaServed: [
  "Kabupaten Tegal",
  "Kota Tegal",
  "Slawi",
  "Adiwerna",
  "Talang",
  "Dukuhturi",
  "Kedungbanteng",
  "Brebes",
  "Pemalang"
],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laser Cutting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Huruf Timbul",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Akrilik Custom",
          },
        },
      ],
    }),
  }}
/>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#070B12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-black tracking-tight">
              Sinar<span className="text-blue-400">Acrylic</span>
            </h1>
            <p className="text-xs text-slate-400">PT ADE SINAR LESTARI</p>
          </div>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
  <a href="#layanan" className="hover:text-blue-400">
    Layanan
  </a>

  <a href="#produk" className="hover:text-blue-400">
    Produk
  </a>

  <a href="#galeri" className="hover:text-blue-400">
    Galeri
  </a>

  <a href="#kontak" className="hover:text-blue-400">
    Kontak
  </a>
</div>
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl text-white"
>
  ☰
</button>

          <a
            href="https://wa.me/6281548000082"
            target="_blank"
            className="hidden rounded-full bg-blue-500 px-5 py-2 text-sm font-bold text-white hover:bg-blue-600 md:inline-block"
          >
            WhatsApp
          </a>
        </nav>
        {menuOpen && (
  <div className="md:hidden border-t border-white/10 bg-[#070B12]">
    <div className="flex flex-col p-6 gap-5">

      <a
        href="#layanan"
        onClick={() => setMenuOpen(false)}
        className="text-slate-300"
      >
        Layanan
      </a>

      <a
        href="#produk"
        onClick={() => setMenuOpen(false)}
        className="text-slate-300"
      >
        Produk
      </a>

      <a
        href="#galeri"
        onClick={() => setMenuOpen(false)}
        className="text-slate-300"
      >
        Galeri
      </a>

      <a
        href="#kontak"
        onClick={() => setMenuOpen(false)}
        className="text-slate-300"
      >
        Kontak
      </a>

      <a
        href="https://wa.me/6281548000082"
        target="_blank"
        className="rounded-xl bg-blue-500 py-3 text-center font-bold"
      >
        WhatsApp
      </a>
    </div>
  </div>
)}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute left-0 top-80 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
              Premium Acrylic & Laser Cutting Workshop
            </span>

            <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Spesialis Akrilik &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Laser Cutting
              </span>{" "}
              di Tegal
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Melayani pembuatan produk akrilik custom, huruf timbul,
              signage, box mahar, plakat, display toko, dan kebutuhan
              branding bisnis dengan hasil rapi dan presisi.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/6281548000082?text=Halo%20Sinar%20Acrylic,%20saya%20ingin%20konsultasi%20produk%20akrilik."
                target="_blank"
                className="rounded-xl bg-blue-500 px-7 py-4 font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600"
              >
                Konsultasi Sekarang
              </a>

              <a
                href="#layanan"
                className="rounded-xl border border-white/15 px-7 py-4 font-bold text-slate-200 hover:border-blue-400 hover:text-blue-300"
              >
                Lihat Layanan
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
            <div className="flex aspect-square items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-blue-500/20 text-5xl">
                  ⚙️
                </div>
                <h3 className="text-3xl font-black">CNC Laser Precision</h3>
                <p className="mt-3 text-slate-400">
                  Potongan rapi, detail tajam, hasil profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-900/70 p-6">
            <p className="text-4xl font-black text-blue-400">0.1mm</p>
            <p className="mt-2 text-slate-400">Presisi potong laser</p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 p-6">
            <p className="text-4xl font-black text-blue-400">Custom</p>
            <p className="mt-2 text-slate-400">Desain sesuai kebutuhan</p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 p-6">
            <p className="text-4xl font-black text-blue-400">Tegal</p>
            <p className="mt-2 text-slate-400">Melayani area sekitar</p>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="font-bold text-blue-400">LAYANAN KAMI</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Solusi Akrilik untuk Bisnis & Kebutuhan Custom
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["Akrilik Lembaran", "Clear, warna, milk, mirror, dan berbagai ketebalan."],
            ["Laser Cutting", "Potong custom dengan mesin laser presisi tinggi."],
            ["Huruf Timbul", "Branding toko, kantor, cafe, dan perusahaan."],
            ["Box Mahar", "Produk dekorasi pernikahan elegan dan custom."],
            ["Plakat & Trophy", "Hadiah, penghargaan, dan souvenir premium."],
            ["Display Produk", "Rak, standing menu, nomor meja, dan display toko."],
            ["Neon Box", "Signage bisnis agar terlihat profesional."],
            ["Custom Project", "Pembuatan sesuai desain dan kebutuhan pelanggan."],
          ].map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl">
                ✦
              </div>
              <h3 className="text-xl font-black">{item[0]}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="bg-slate-950/80 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-bold text-blue-400">PRODUK UNGGULAN</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Cocok untuk Usaha, Event, dan Dekorasi
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Huruf Timbul Akrilik",
              "Plakat Akrilik",
              "Box Mahar",
              "Standing Menu",
              "Nomor Rumah",
              "Display Toko",
            ].map((title) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8"
              >
                <div className="mb-8 h-44 rounded-2xl border border-blue-400/20 bg-blue-500/10" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 text-slate-400">
                  Dibuat rapi, kuat, dan bisa disesuaikan dengan desain pelanggan.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-bold text-blue-400">GALERI</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Contoh Hasil Pengerjaan
            </h2>
          </div>
          <p className="max-w-md text-slate-400">
            Nantinya bagian ini bisa diganti dengan foto asli workshop dan hasil
            produk pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-3xl border border-white/10 bg-blue-500/10 ${
                i === 1 || i === 6 ? "row-span-2 min-h-80" : "min-h-40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-bold text-blue-400">TESTIMONI</p>
            <h2 className="mt-3 text-4xl font-black">
              Dipercaya Pelanggan Lokal
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-yellow-400">★★★★★</p>
              <p className="mt-5 text-lg text-slate-300">
                “Ramah banget, harga terjangkau, tempat nyaman sampai tidak
                ingin pulang.”
              </p>
              <p className="mt-6 font-bold">Ryan Satriawan</p>
              <p className="text-sm text-slate-500">Local Guide</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-yellow-400">★★★★★</p>
              <p className="mt-5 text-lg text-slate-300">
                “Servis yang baik dan bagus. Terima kasih atas servisnya.”
              </p>
              <p className="mt-6 font-bold">Zahwa Aqila</p>
              <p className="text-sm text-slate-500">Customer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
    <p className="font-bold text-blue-400">AREA LAYANAN</p>

    <h2 className="mt-3 text-4xl font-black">
      Jasa Akrilik dan Laser Cutting di Tegal
    </h2>

    <p className="mt-6 max-w-3xl leading-8 text-slate-300">
      Sinar Acrylic melayani pembuatan huruf timbul, laser cutting akrilik,
      plakat, neon box, box mahar, display produk, dan berbagai kebutuhan
      akrilik custom untuk wilayah Kabupaten Tegal, Kota Tegal, Slawi,
      Adiwerna, Talang, Dukuhturi, Kedungbanteng, Lebaksiu, Balapulang,
      Brebes, dan Pemalang.
    </p>
  </div>
</section>

      {/* KONTAK */}
      <section id="kontak" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-bold text-blue-400">KONTAK</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Konsultasikan Kebutuhan Akrilik Anda
            </h2>

            <div className="mt-10 space-y-6 text-slate-300">
              <p>
                <b className="text-white">Alamat:</b><br />
                Jalan Tonggara No.25 RT.14/RW.6, Kedungbanteng, Kabupaten Tegal.
              </p>
              <p>
                <b className="text-white">WhatsApp:</b><br />
                0815-4800-0082
              </p>
              <p>
                <b className="text-white">Jam Operasional:</b><br />
                08.00 - Selesai
              </p>
            </div>

            <a
              href="https://wa.me/6281548000082?text=Halo%20Sinar%20Acrylic,%20saya%20ingin%20bertanya%20tentang%20produk%20akrilik."
              target="_blank"
              className="mt-10 inline-block rounded-xl bg-blue-500 px-8 py-4 font-black hover:bg-blue-600"
            >
              Chat WhatsApp
            </a>
          </div>

          <a
            href="https://maps.google.com/?q=PT+ADE+SINAR+LESTARI+Kedungbanteng+Tegal"
            target="_blank"
            className="flex min-h-96 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center hover:border-blue-400/50"
          >
            <div>
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/20 text-4xl">
                📍
              </div>
              <h3 className="text-2xl font-black">Buka Google Maps</h3>
              <p className="mt-3 text-slate-400">
                Klik untuk melihat lokasi workshop.
              </p>
            </div>
          </a>
        </div>
      </section>
      

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-black">
              Sinar<span className="text-blue-400">Acrylic</span>
            </h2>
            <p className="text-sm text-slate-500">
              PT ADE SINAR LESTARI - Acrylic & Laser Cutting Tegal
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 PT ADE SINAR LESTARI. All rights reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a
        href="https://wa.me/6281548000082?text=Halo%20Sinar%20Acrylic,%20saya%20ingin%20konsultasi."
        target="_blank"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
      >
       <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  className="h-7 w-7 fill-white"
>
  <path d="M16.04 3C9.39 3 4 8.39 4 15.04c0 2.12.55 4.18 1.6 6L4 29l8.15-1.54a12 12 0 0 0 3.89.64C22.69 28.1 28.08 22.71 28.08 16.06S22.69 3 16.04 3Zm0 22.98c-1.24 0-2.46-.31-3.54-.91l-.25-.14-4.83.91.92-4.7-.16-.27a9.86 9.86 0 1 1 7.86 5.11Zm5.43-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
</svg>
      </a>
    </main>
  );
}