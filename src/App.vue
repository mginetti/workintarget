<template>
  <div>
    <!-- TopNavBar -->
    <nav
      class="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(27,28,28,0.06)]"
    >
      <div
        class="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 w-full max-w-[1920px] mx-auto"
      >
        <div
          class="text-2xl font-black tracking-tighter text-stone-900 dark:text-stone-50 font-headline"
        >
          Workintarget
        </div>
        <div class="hidden md:flex items-center space-gap-8 gap-8">
          <a
            v-for="link in [
              { id: 'solutions', text: 'Solutions' },
              { id: 'aboutus', text: 'Chi siamo' },
              { id: 'reviews', text: 'Cosa dicono di noi' },
              { id: 'contact', text: 'Contattaci' }
            ]"
            :key="link.id"
            :href="`#${link.id}`"
            :class="[
              'pb-1 font-body transition-colors duration-300',
              activeSection === link.id
                ? 'text-red-600 dark:text-red-500 font-bold border-b-2 border-red-600'
                : 'text-stone-600 dark:text-stone-400 font-medium hover:text-red-700 dark:hover:text-red-400'
            ]"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </nav>
    <main class="pt-24">
      <!-- Hero Section -->
      <section
        class="relative min-h-[870px] flex items-center overflow-hidden bg-surface"
      >
        <div
          class="max-w-[1920px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center"
        >
          <div class="z-10 order-2 md:order-1">
            <span
              class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full font-label"
              >BEYOND FITNESS</span
            >
            <h1
              class="text-5xl md:text-7xl font-black text-on-background font-headline leading-[1.1] mb-8 tracking-tighter"
            >
              Il mio obiettivo? <br /><span class="text-primary italic"
                >SENTIRMI IN FORMA</span
              >
            </h1>
            <p
              class="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed"
            >
              Un approccio d'élite per trasformare il tuo corpo e la tua mente.
              Strategia, nutrizione e performance senza compromessi.
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                class="px-8 py-4 editorial-gradient text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                href="#contact"
                >Inizia la Trasformazione</a
              >
            </div>
          </div>
          <div class="relative order-1 md:order-2">
            <div
              class="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative"
            >
              <img
                alt="Fitness Focus"
                class="w-full h-full object-cover"
                data-alt="Athletic woman in modern gym setting looking confident, soft dramatic side lighting, premium editorial fitness photography"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrUF2hXnOGSperCU29e0diGqDokMiNYOW_salqG54wH-aA2rc25T2zOO__uV_yurPzKxvU4-jewPE7Ro-CRF1zI8hbpwna67lEdtVl8k93zXsQo6MaQpvv0ke0hY2KngBOiFowU59aI7dv5KRwAq_8WjvX8W-Yg7hiI8o5AxXanKll-BtRH-bTTse44f99HTy0VCZugJUbo8J29lwskyXg0ToFtOJ1FniMoJPAc90pn5TnAPd48SqWrp2R8vBaWRG3_pq7GpeKJhk"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
              ></div>
            </div>
            <!-- Decorative Elements -->
            <div
              class="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl hidden lg:block"
            >
              <div class="flex items-center gap-4 mb-2">
                <span class="text-4xl font-black text-primary">500+</span>
                <div
                  class="text-xs font-bold uppercase tracking-wider text-stone-400"
                >
                  Transformazioni<br />Completate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Features/Highlights -->
      <section id="solutions" class="py-24 bg-surface-container-low">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
          <div class="grid md:grid-cols-3 gap-8">
            <div
              class="bg-surface-container-lowest p-10 rounded-[2rem] transition-all hover:-translate-y-2"
            >
              <div
                class="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary"
              >
                <span
                  class="material-symbols-outlined text-3xl"
                  data-weight="fill"
                  >fitness_center</span
                >
              </div>
              <h3 class="text-2xl font-bold font-headline mb-4 uppercase">
                CON IL MIO CORPO
              </h3>
              <p class="text-on-surface-variant leading-relaxed">
                Riconnettiti con la tua forza fisica attraverso programmi
                personalizzati basati sulla scienza.
              </p>
            </div>
            <div
              class="bg-surface-container-lowest p-10 rounded-[2rem] transition-all hover:-translate-y-2"
            >
              <div
                class="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center mb-6 text-secondary"
              >
                <span
                  class="material-symbols-outlined text-3xl"
                  data-weight="fill"
                  >bolt</span
                >
              </div>
              <h3 class="text-2xl font-bold font-headline mb-4 uppercase">
                CON ENERGIA
              </h3>
              <p class="text-on-surface-variant leading-relaxed">
                Massimizza la tua vitalità quotidiana con strategie nutrizionali
                che alimentano il tuo successo.
              </p>
            </div>
            <div
              class="bg-surface-container-lowest p-10 rounded-[2rem] transition-all hover:-translate-y-2"
            >
              <div
                class="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary"
              >
                <span
                  class="material-symbols-outlined text-3xl"
                  data-weight="fill"
                  >local_dining</span
                >
              </div>
              <h3 class="text-2xl font-bold font-headline mb-4 uppercase">
                SENZA TROPPE RINUNCE
              </h3>
              <p class="text-on-surface-variant leading-relaxed">
                Un equilibrio sostenibile tra performance d'élite e il piacere
                di vivere la propria vita.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Professional Profiles -->
      <section id="aboutus" class="py-32">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
          <div
            class="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
          >
            <div class="max-w-2xl">
              <h2
                class="text-4xl md:text-5xl font-black font-headline mb-6 tracking-tight"
              >
                Le Menti Dietro <span class="text-primary">Il Successo</span>
              </h2>
              <div class="h-1 w-24 bg-primary rounded-full"></div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-16">
            <!-- Profile 1 -->
            <div class="group">
              <div
                class="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] mb-8 bg-stone-200 dark:bg-stone-800"
              >
                <img
                  alt="Giulia Zantei"
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  src="/giulia.jpg"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"
                ></div>
                <div class="absolute bottom-8 left-8">
                  <h3 class="text-3xl font-black text-white font-headline">
                    GIULIA ZANTEI
                  </h3>
                </div>
              </div>
              <p class="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Specializzata nel condizionamento atletico d'élite e nella
                trasformazione corporea funzionale.
              </p>
              <a
                class="inline-flex items-center gap-4 text-primary font-bold group"
                href="https://shop.foreverliving.it/giulia-zantei-commercial-390300138740.html"
              >
                Visita Landing Page
                <span
                  class="material-symbols-outlined group-hover:translate-x-2 transition-transform"
                  >arrow_right_alt</span
                >
              </a>
            </div>
            <!-- Profile 2 -->
            <div class="group">
              <div
                class="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] mb-8 bg-stone-200 dark:bg-stone-800"
              >
                <img
                  alt="Cristina Rinaldi"
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  src="/Cristina.jpg"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"
                ></div>
                <div class="absolute bottom-8 left-8">
                  <h3 class="text-3xl font-black text-white font-headline">
                    CRISTINA RINALDI
                  </h3>
                </div>
              </div>
              <p class="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Esperta in bio-hacking nutrizionale e gestione del metabolismo
                per alte performance.
              </p>
              <a
                class="inline-flex items-center gap-4 text-primary font-bold group"
                href="https://shop.foreverliving.it/maria-cristina-rinaldi-commercial-390300096168.html"
              >
                Visita Landing Page
                <span
                  class="material-symbols-outlined group-hover:translate-x-2 transition-transform"
                  >arrow_right_alt</span
                >
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- CTA Boxes - Bento Style -->
      <section class="py-24 bg-surface-container-low">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
          <div class="grid md:grid-cols-12 gap-8">
            <div
              class="md:col-span-8 bg-surface-container-lowest p-12 rounded-[2rem] flex flex-col justify-between border-l-4 border-primary"
            >
              <div>
                <h4 class="text-3xl font-black font-headline mb-6 uppercase">
                  NON TI RITROVI PIÙ NEL TUO CORPO?
                </h4>
                <p class="text-xl text-on-surface-variant mb-8">
                  La discrepanza tra come ti senti e come ti vedi è il primo
                  ostacolo alla tua eccellenza. Riprendi il controllo.
                </p>
              </div>
            </div>
            <div
              class="md:col-span-4 bg-primary p-12 rounded-[2rem] text-white flex flex-col justify-between editorial-gradient"
            >
              <span class="material-symbols-outlined text-5xl mb-6"
                >health_and_beauty</span
              >
              <h4 class="text-2xl font-bold font-headline mb-4 uppercase">
                TI SENTI GONFIA E PESANTE?
              </h4>
              <p class="opacity-90 mb-8">
                Elimina le tossine e rigenera il tuo sistema digestivo con il
                nostro protocollo detox d'élite.
              </p>
            </div>
            <div
              class="md:col-span-12 bg-secondary p-12 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div class="max-w-xl">
                <h4 class="text-3xl font-black font-headline mb-4 uppercase">
                  VORRESTI UN RESET TOTALE?
                </h4>
                <p class="text-lg opacity-90">
                  Il nostro programma più esclusivo. 90 giorni per riscrivere
                  completamente i tuoi parametri biologici e mentali.
                </p>
              </div>
              <a
                class="whitespace-nowrap px-10 py-5 bg-white text-secondary rounded-full font-black text-lg shadow-xl"
                :href="calendlyLink"
                target="_blank"
              >
                PRENOTA ANALISI
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- Informational Section -->
      <section class="py-32 overflow-hidden">
        <div
          class="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center"
        >
          <div class="relative">
            <div
              class="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            ></div>
            <h2
              class="text-4xl md:text-5xl font-black font-headline mb-10 leading-tight"
            >
              Cosa apprenderai dalla <br /><span class="text-primary italic"
                >CHIAMATA STRATEGICA</span
              >
            </h2>
            <div class="space-y-8">
              <div class="flex gap-6 group">
                <div
                  class="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  1
                </div>
                <div>
                  <h5 class="text-xl font-bold mb-2">
                    Analisi del Profilo Biotipologico
                  </h5>
                  <p class="text-on-surface-variant">
                    Identifichiamo la tua struttura genetica per personalizzare
                    ogni macro-nutriente.
                  </p>
                </div>
              </div>
              <div class="flex gap-6 group">
                <div
                  class="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  2
                </div>
                <div>
                  <h5 class="text-xl font-bold mb-2">
                    Mappatura degli Obiettivi Temporali
                  </h5>
                  <p class="text-on-surface-variant">
                    Creiamo una timeline realistica e scientificamente provata
                    per i tuoi risultati.
                  </p>
                </div>
              </div>
              <div class="flex gap-6 group">
                <div
                  class="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  3
                </div>
                <div>
                  <h5 class="text-xl font-bold mb-2">
                    Strategia di Sostenibilità
                  </h5>
                  <p class="text-on-surface-variant">
                    Definiamo come integrare il percorso nella tua vita
                    professionale e privata senza stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="bg-surface-container-low rounded-[3rem] p-12 relative z-10 border border-white/50 shadow-2xl"
            >
              <div class="flex items-center gap-4 mb-8">
                <div
                  class="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg"
                >
                  <img
                    alt="Coach"
                    data-alt="Close up portrait of a coach smiling, friendly and professional lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwViJLRXdktOJes65S5K5zcoB1cwlwX3tPd4wSdsRUiiZdRUDbB0PQqcNfwL-9vzcnk_mOonw7Axa2Dj_E-ijhxouiGcVSOHjrJbi7W9sEcWAknLCacgdho2-SaXoyPUKqtuQtgVpBYnwB0KaygjrvwjmVx-0uKJi7rWhzlc6p6OOFInUcmgbS_20j7el3hGPcBi2Yjpc3KCY1Ey7qe5Jd_BFAu3CYAo368Oh6WdnWwDIBQfPj3XGs8QbJQOKPuB2SraAXysaHLTA"
                  />
                </div>
                <div>
                  <p class="font-black text-on-background">Prenota ora</p>
                  <p class="text-sm text-primary font-bold">Consulenza</p>
                </div>
              </div>
              <p class="text-lg italic text-on-surface mb-8">
                "La chiamata strategica non è una vendita, è il primo passo
                tecnico verso il tuo nuovo standard di eccellenza."
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Testimonials -->
      <section id="reviews" class="py-32 bg-stone-900 text-white">
        <div class="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <h2 class="text-4xl md:text-6xl font-black font-headline mb-6">
            COSA DICONO DI NOI
          </h2>
          <div class="flex justify-center gap-1 text-secondary">
            <span
              class="material-symbols-outlined"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >star</span
            >
            <span
              class="material-symbols-outlined"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >star</span
            >
            <span
              class="material-symbols-outlined"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >star</span
            >
            <span
              class="material-symbols-outlined"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >star</span
            >
            <span
              class="material-symbols-outlined"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >star</span
            >
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div
            class="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm"
          >
            <div class="flex gap-1 text-secondary mb-6">
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
            </div>
            <p class="text-lg italic opacity-80 mb-8">
              "Ho provato decine di programmi, ma nessuno ha capito la mia
              fisiologia come il team di ExecutiveElite. In 3 mesi ho perso 8kg
              di grasso guadagnando energia infinita."
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-stone-700"></div>
              <div>
                <p class="font-bold">Marco V.</p>
                <p class="text-xs uppercase tracking-widest opacity-50">
                  Imprenditore
                </p>
              </div>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div
            class="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm"
          >
            <div class="flex gap-1 text-secondary mb-6">
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
            </div>
            <p class="text-lg italic opacity-80 mb-8">
              "Finalmente non mi sento più gonfia dopo ogni pasto. La consulenza
              nutrizionale è stata rivoluzionaria per la mia produttività
              quotidiana."
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-stone-700"></div>
              <div>
                <p class="font-bold">Elena R.</p>
                <p class="text-xs uppercase tracking-widest opacity-50">
                  Manager
                </p>
              </div>
            </div>
          </div>
          <!-- Testimonial 3 -->
          <div
            class="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm"
          >
            <div class="flex gap-1 text-secondary mb-6">
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span
                class="material-symbols-outlined text-sm"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
            </div>
            <p class="text-lg italic opacity-80 mb-8">
              "Un approccio serio, scientifico e senza fronzoli. Il miglior
              investimento che potessi fare sulla mia salute a lungo termine."
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-stone-700"></div>
              <div>
                <p class="font-bold">Stefano B.</p>
                <p class="text-xs uppercase tracking-widest opacity-50">
                  Avvocato
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact Form Section -->
      <section class="py-32 relative" id="contact">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2
              class="text-4xl md:text-5xl font-black font-headline mb-4 uppercase"
            >
              INIZIA DA ORA
            </h2>
            <p class="text-xl text-on-surface-variant">
              Prendi un appuntamento per la tua prima analisi gratuita.
            </p>
          </div>
          <form
            class="bg-surface-container-low p-8 md:p-16 rounded-[3rem] shadow-xl space-y-8"
          >
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label
                  class="block text-xs font-bold uppercase tracking-widest text-stone-500 px-2"
                  >Nome</label
                >
                <input
                  class="w-full bg-surface-container-high border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  placeholder="Es. Marco"
                  type="text"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="block text-xs font-bold uppercase tracking-widest text-stone-500 px-2"
                  >Cognome</label
                >
                <input
                  class="w-full bg-surface-container-high border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  placeholder="Es. Rossi"
                  type="text"
                />
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label
                  class="block text-xs font-bold uppercase tracking-widest text-stone-500 px-2"
                  >Telefono</label
                >
                <input
                  class="w-full bg-surface-container-high border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  placeholder="+39 000 0000000"
                  type="tel"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="block text-xs font-bold uppercase tracking-widest text-stone-500 px-2"
                  >Email</label
                >
                <input
                  class="w-full bg-surface-container-high border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  placeholder="nome@email.com"
                  type="email"
                />
              </div>
            </div>
            <div class="pt-6">
              <button
                class="w-full editorial-gradient py-5 rounded-full text-white font-black text-xl shadow-2xl hover:scale-[1.01] transition-transform flex items-center justify-center gap-3"
                type="submit"
              >
                INVIA RICHIESTA
                <span class="material-symbols-outlined">send</span>
              </button>
            </div>
            <p class="text-center text-sm text-stone-400">
              Trattiamo i tuoi dati con la massima riservatezza secondo le
              normative GDPR.
            </p>
          </form>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer
      class="bg-stone-100 dark:bg-stone-950 w-full border-t border-stone-200/20"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-20 w-full max-w-[1920px] mx-auto"
      >
        <div class="space-y-6">
          <div
            class="text-xl font-bold text-stone-900 dark:text-stone-50 font-headline"
          >
            ExecutiveElite
          </div>
          <p class="text-stone-500 dark:text-stone-400 font-body">
            Elite Performance &amp; Nutritional Advisory Group. Eleviamo il
            potenziale umano attraverso la scienza e la strategia.
          </p>
        </div>
        <div class="space-y-6">
          <h4
            class="text-stone-900 dark:text-stone-50 font-black uppercase tracking-widest text-sm font-headline"
          >
            Services
          </h4>
          <nav class="flex flex-col gap-4">
            <a
              class="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all font-body"
              href="#"
              >Strategic Consulting</a
            >
            <a
              class="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all font-body"
              href="#"
              >Risk Management</a
            >
            <a
              class="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all font-body"
              href="#"
              >Talent Acquisition</a
            >
          </nav>
        </div>
        <div class="space-y-6">
          <h4
            class="text-stone-900 dark:text-stone-50 font-black uppercase tracking-widest text-sm font-headline"
          >
            Support
          </h4>
          <nav class="flex flex-col gap-4">
            <a
              class="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all font-body"
              href="#"
              >Privacy Policy</a
            >
            <a
              class="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all font-body"
              href="#"
              >Contact Support</a
            >
          </nav>
        </div>
        <div class="space-y-6">
          <h4
            class="text-stone-900 dark:text-stone-50 font-black uppercase tracking-widest text-sm font-headline"
          >
            Contact Info
          </h4>
          <div class="flex flex-col gap-4">
            <a
              class="flex items-center gap-3 text-red-600 font-semibold hover:underline"
              href="https://wa.me/..."
            >
              <span class="material-symbols-outlined text-xl">chat</span>
              WhatsApp Support
            </a>
            <div
              class="text-stone-500 dark:text-stone-400 flex items-center gap-3"
            >
              <span class="material-symbols-outlined text-xl">mail</span>
              info@workintarget.net
            </div>
            <div
              class="text-stone-500 dark:text-stone-400 flex items-center gap-3"
            >
              <span class="material-symbols-outlined text-xl">phone</span> +39
              012 345 6789
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-6 md:px-12 py-8 border-t border-stone-200/10 text-center md:text-left"
      >
        <p class="text-stone-400 text-sm font-body">
          © 2024 ExecutiveElite Advisory Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// calc current month and year
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
const calendlyLink =
  "https://calendly.com/workintarget22/fissa-la-tua-call-conoscitiva?month=" +
  currentYear +
  "-" +
  currentMonth;

const activeSection = ref('');

let observer;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, {
    rootMargin: '-40% 0px -40% 0px' 
  });

  const sections = document.querySelectorAll('section[id]');
  sections.forEach((section) => {
    observer.observe(section);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
