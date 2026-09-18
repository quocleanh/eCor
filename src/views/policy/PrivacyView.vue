<template>
  <main class="w-full bg-gradient-to-b from-surface to-[#edf2fb] min-h-screen">
    <div class="flex flex-col w-full">
      <!-- Top Decorative Ambient Glow -->
      <div class="relative w-full overflow-hidden">
        <div
          class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-r from-primary/10 via-secondary-container/20 to-primary-fixed-dim/20 blur-3xl pointer-events-none rounded-full">
        </div>
        <!-- Hero / Header Container -->
        <div class="w-full max-w-7xl mx-auto px-8 pt-space-xl pb-space-2xl relative z-10">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-md">
            <router-link to="/" class="hover:text-primary transition-colors">{{ $t('policy.privacy.t1') }}</router-link>
            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
            <span class="text-on-surface-variant">{{ $t('policy.privacy.t2') }}</span>
            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
            <span class="text-primary font-semibold">{{ $t('policy.privacy.t3') }}</span>
          </nav>
          <!-- Trust Badge & Regulatory Tag -->
          <div
            class="inline-flex flex-wrap items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low shadow-sm mb-space-lg">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
            <span class="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">{{ $t('policy.privacy.t4') }}</span>
            <span class="text-outline-variant">•</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px] text-primary">verified_user</span>
              {{ $t('policy.privacy.t5') }}
            </span>
          </div>
          <!-- Main Heading & Strategic Lead -->
          <div class="max-w-4xl">
            <h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-md">
              {{ $t('policy.privacy.t6') }}
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {{ $t('policy.privacy.t7') }}
            </p>
          </div>
          <!-- Quick Highlights Grid (4 Cards) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mt-space-2xl">
            <!-- Card 1 -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div
                class="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary mb-space-md">
                <span class="material-symbols-outlined text-[28px]">lock</span>
              </div>
              <div>
                <div class="font-headline-sm text-headline-sm text-on-surface mb-space-2xs">{{ $t('policy.privacy.t8') }}</div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  {{ $t('policy.privacy.t9') }}
                </p>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-1 text-primary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-[16px]">check_circle</span>
                <span>{{ $t('policy.privacy.t10') }}</span>
              </div>
            </div>
            <!-- Card 2 -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div
                class="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary mb-space-md">
                <span class="material-symbols-outlined text-[28px]">shield_person</span>
              </div>
              <div>
                <div class="font-headline-sm text-headline-sm text-on-surface mb-space-2xs">{{ $t('policy.privacy.t11') }}</div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  {{ $t('policy.privacy.t12') }}
                </p>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-[16px]">verified</span>
                <span>{{ $t('policy.privacy.t13') }}</span>
              </div>
            </div>
            <!-- Card 3 -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div
                class="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary-container mb-space-md">
                <span class="material-symbols-outlined text-[28px]">policy</span>
              </div>
              <div>
                <div class="font-headline-sm text-headline-sm text-on-surface mb-space-2xs">{{ $t('policy.privacy.t14') }}</div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  {{ $t('policy.privacy.t15') }}
                </p>
              </div>
              <div
                class="mt-space-md pt-space-xs flex items-center gap-1 text-primary-container font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-[16px]">gavel</span>
                <span>{{ $t('policy.privacy.t16') }}</span>
              </div>
            </div>
            <!-- Card 4 -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div
                class="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary font-bold mb-space-md">
                <span class="material-symbols-outlined text-[28px]">handshake</span>
              </div>
              <div>
                <div class="font-headline-sm text-headline-sm text-on-surface mb-space-2xs">{{ $t('policy.privacy.t17') }}</div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  {{ $t('policy.privacy.t18') }}
                </p>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-[16px]">task_alt</span>
                <span>{{ $t('policy.privacy.t19') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Main Document Body: Asymmetrical 2-Column Split -->
      <div class="w-full max-w-7xl mx-auto px-8 pb-space-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <!-- Left Column: Sticky Navigation & Data Protection Office (4 Columns) -->
          <aside class="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-space-lg">
            <!-- Table of Contents Card -->
            <div class="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
              <div class="flex items-center gap-space-xs mb-space-md pb-space-xs">
                <span class="material-symbols-outlined text-primary text-[20px]">list_alt</span>
                <h3 class="font-label-lg text-label-lg text-on-surface tracking-wide">{{ $t('policy.privacy.t20') }}</h3>
              </div>
              <nav class="flex flex-col gap-1 text-body-sm font-body-sm" id="policy-toc">
                <a class="px-space-sm py-space-xs rounded-lg text-primary bg-surface-container-low font-semibold transition-all flex items-center justify-between"
                  href="#muc-dich-thu-thap">
                  <span>{{ $t('policy.privacy.t21') }}</span>
                  <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
                <a class="px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-between"
                  href="#loai-du-lieu">
                  <span>{{ $t('policy.privacy.t22') }}</span>
                  <span
                    class="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_forward</span>
                </a>
                <a class="px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-between"
                  href="#cong-nghe-an-ninh">
                  <span>{{ $t('policy.privacy.t23') }}</span>
                  <span
                    class="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_forward</span>
                </a>
                <a class="px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-between"
                  href="#thoi-gian-luu-tru">
                  <span>{{ $t('policy.privacy.t24') }}</span>
                  <span
                    class="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_forward</span>
                </a>
                <a class="px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-between"
                  href="#quyen-khach-hang">
                  <span>{{ $t('policy.privacy.t25') }}</span>
                  <span
                    class="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_forward</span>
                </a>
                <a class="px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-between"
                  href="#chia-se-doi-tac">
                  <span>{{ $t('policy.privacy.t26') }}</span>
                  <span
                    class="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_forward</span>
                </a>
                <a class="px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-between"
                  href="#ung-pho-su-co">
                  <span>{{ $t('policy.privacy.t27') }}</span>
                  <span
                    class="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_forward</span>
                </a>
                <a class="px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-between"
                  href="#thong-tin-dpo">
                  <span>{{ $t('policy.privacy.t28') }}</span>
                  <span
                    class="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_forward</span>
                </a>
              </nav>
            </div>
            <!-- DPO & Security Contact Card -->
            <div class="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
              <div class="flex items-center gap-space-xs mb-space-sm">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                </div>
                <div>
                  <div class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.privacy.t29') }}</div>
                  <div class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.privacy.t30') }}</div>
                </div>
              </div>
              <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                {{ $t('policy.privacy.t31') }}
              </p>
              <div class="flex flex-col gap-space-xs font-body-sm text-body-sm">
                <div class="p-space-xs rounded-lg bg-surface-container-low flex items-center gap-space-xs">
                  <span class="material-symbols-outlined text-primary text-[18px]">email</span>
                  <span class="font-code-sm text-code-sm text-on-surface select-all">{{ $t('policy.privacy.t32') }}</span>
                </div>
                <div class="p-space-xs rounded-lg bg-surface-container-low flex items-center gap-space-xs">
                  <span class="material-symbols-outlined text-secondary text-[18px]">call</span>
                  <span class="font-code-sm text-code-sm text-on-surface select-all">{{ $t('policy.privacy.t33') }}</span>
                </div>
                <div class="p-space-xs rounded-lg bg-surface-container-low flex items-center gap-space-xs">
                  <span class="material-symbols-outlined text-primary text-[18px]">badge</span>
                  <span class="text-on-surface font-medium">{{ $t('policy.privacy.t34') }}</span>
                </div>
              </div>
              <div
                class="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant text-label-sm font-label-sm">
                <span>{{ $t('policy.privacy.t35') }}</span>
                <span class="text-primary font-bold">{{ $t('policy.privacy.t36') }}</span>
              </div>
            </div>
            <!-- Live Infrastructure Telemetry Pod -->
            <div class="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
              <div class="flex items-center justify-between mb-space-sm">
                <div class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                  {{ $t('policy.privacy.t37') }}</div>
                <span
                  class="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-fixed text-label-sm font-bold">
                  <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  {{ $t('policy.privacy.t38') }}
                </span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm mb-space-sm">
                <div class="p-space-xs rounded-xl bg-surface-container-low">
                  <div class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.privacy.t39') }}</div>
                  <div class="font-headline-sm text-headline-sm text-primary font-bold">{{ $t('policy.privacy.t40') }}</div>
                </div>
                <div class="p-space-xs rounded-xl bg-surface-container-low">
                  <div class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.privacy.t41') }}</div>
                  <div class="font-headline-sm text-headline-sm text-secondary font-bold">{{ $t('policy.privacy.t42') }}</div>
                </div>
              </div>
              <p class="font-body-sm text-body-sm text-outline">
                {{ $t('policy.privacy.t43') }}
              </p>
            </div>
          </aside>
          <!-- Right Column: Detailed Policy Sections (8 Columns) -->
          <main class="lg:col-span-8 flex flex-col gap-space-xl">
            <!-- Section 1 -->
            <section class="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm scroll-mt-28"
              id="muc-dich-thu-thap">
              <div
                class="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-2xs">
                <span>{{ $t('policy.privacy.t44') }}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
                {{ $t('policy.privacy.t45') }}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                {{ $t('policy.privacy.t46') }}
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-space-2xs">
                  <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span class="material-symbols-outlined text-[20px]">warehouse</span>
                    {{ $t('policy.privacy.t47') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t48') }}
                  </p>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-space-2xs">
                  <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span class="material-symbols-outlined text-[20px]">local_shipping</span>
                    {{ $t('policy.privacy.t49') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t50') }}
                  </p>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-space-2xs">
                  <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span class="material-symbols-outlined text-[20px]">receipt_long</span>
                    {{ $t('policy.privacy.t51') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t52') }}
                  </p>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-space-2xs">
                  <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span class="material-symbols-outlined text-[20px]">analytics</span>
                    {{ $t('policy.privacy.t53') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t54') }}
                  </p>
                </div>
              </div>
              <div class="mt-space-lg p-space-md rounded-2xl bg-primary/5 flex items-start gap-space-sm">
                <span class="material-symbols-outlined text-primary text-[22px] mt-0.5">verified_user</span>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  <strong>{{ $t('policy.privacy.t55') }}</strong> {{ $t('policy.privacy.t56') }}
                </p>
              </div>
            </section>
            <!-- Section 2 -->
            <section class="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm scroll-mt-28"
              id="loai-du-lieu">
              <div
                class="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-2xs">
                <span>{{ $t('policy.privacy.t57') }}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
                {{ $t('policy.privacy.t58') }}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                {{ $t('policy.privacy.t59') }}
              </p>
              <!-- Visual Illustration: Split Data Types -->
              <div class="space-y-space-md">
                <div
                  class="p-space-md rounded-2xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div class="flex items-start gap-space-sm">
                    <span class="material-symbols-outlined text-primary text-[24px]">corporate_fare</span>
                    <div>
                      <div class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.privacy.t60') }}</div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.privacy.t61') }}</div>
                    </div>
                  </div>
                  <span
                    class="shrink-0 px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">{{ $t('policy.privacy.t62') }}</span>
                </div>
                <div
                  class="p-space-md rounded-2xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div class="flex items-start gap-space-sm">
                    <span class="material-symbols-outlined text-secondary text-[24px]">inventory_2</span>
                    <div>
                      <div class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.privacy.t63') }}</div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.privacy.t64') }}</div>
                    </div>
                  </div>
                  <span
                    class="shrink-0 px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">{{ $t('policy.privacy.t65') }}</span>
                </div>
                <div
                  class="p-space-md rounded-2xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div class="flex items-start gap-space-sm">
                    <span class="material-symbols-outlined text-primary-container text-[24px]">group</span>
                    <div>
                      <div class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.privacy.t66') }}
                      </div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.privacy.t67') }}</div>
                    </div>
                  </div>
                  <span
                    class="shrink-0 px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">{{ $t('policy.privacy.t68') }}</span>
                </div>
              </div>
              <!-- Data Ownership Statement -->
              <div
                class="mt-space-lg p-space-lg rounded-2xl bg-gradient-to-r from-primary/10 via-surface-container-low to-secondary/10">
                <div class="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm mb-space-2xs">
                  <span class="material-symbols-outlined text-[24px]">shield</span>
                  {{ $t('policy.privacy.t69') }}
                </div>
                <p class="font-body-md text-body-md text-on-surface leading-relaxed">
                  {{ $t('policy.privacy.t70') }} <strong>{{ $t('policy.privacy.t71') }}</strong> {{ $t('policy.privacy.t72') }}
                </p>
              </div>
            </section>
            <!-- Section 3 -->
            <section class="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm scroll-mt-28"
              id="cong-nghe-an-ninh">
              <div
                class="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-2xs">
                <span>{{ $t('policy.privacy.t73') }}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
                {{ $t('policy.privacy.t74') }}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                {{ $t('policy.privacy.t75') }}
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col">
                  <div class="text-primary font-headline-md text-headline-md font-bold mb-1">{{ $t('policy.privacy.t76') }}</div>
                  <div class="font-label-lg text-label-lg text-on-surface mb-space-2xs">{{ $t('policy.privacy.t77') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t78') }}
                  </p>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col">
                  <div class="text-secondary font-headline-md text-headline-md font-bold mb-1">{{ $t('policy.privacy.t79') }}</div>
                  <div class="font-label-lg text-label-lg text-on-surface mb-space-2xs">{{ $t('policy.privacy.t80') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t81') }}
                  </p>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col">
                  <div class="text-primary-container font-headline-md text-headline-md font-bold mb-1">{{ $t('policy.privacy.t82') }}</div>
                  <div class="font-label-lg text-label-lg text-on-surface mb-space-2xs">{{ $t('policy.privacy.t83') }}</div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t84') }}
                  </p>
                </div>
              </div>
              <!-- Security Badges Ribbon -->
              <div
                class="p-space-md rounded-2xl bg-surface-container-low flex flex-wrap items-center justify-around gap-space-md text-center">
                <div class="flex flex-col items-center">
                  <span class="material-symbols-outlined text-primary text-[32px]">security</span>
                  <span class="font-label-md text-label-md text-on-surface mt-1">{{ $t('policy.privacy.t85') }}</span>
                  <span class="font-label-sm text-label-sm text-outline">{{ $t('policy.privacy.t86') }}</span>
                </div>
                <div class="flex flex-col items-center">
                  <span class="material-symbols-outlined text-secondary text-[32px]">cloud_sync</span>
                  <span class="font-label-md text-label-md text-on-surface mt-1">{{ $t('policy.privacy.t87') }}</span>
                  <span class="font-label-sm text-label-sm text-outline">{{ $t('policy.privacy.t88') }}</span>
                </div>
                <div class="flex flex-col items-center">
                  <span class="material-symbols-outlined text-primary text-[32px]">key</span>
                  <span class="font-label-md text-label-md text-on-surface mt-1">{{ $t('policy.privacy.t89') }}</span>
                  <span class="font-label-sm text-label-sm text-outline">{{ $t('policy.privacy.t90') }}</span>
                </div>
                <div class="flex flex-col items-center">
                  <span class="material-symbols-outlined text-secondary text-[32px]">bug_report</span>
                  <span class="font-label-md text-label-md text-on-surface mt-1">{{ $t('policy.privacy.t91') }}</span>
                  <span class="font-label-sm text-label-sm text-outline">{{ $t('policy.privacy.t92') }}</span>
                </div>
              </div>
            </section>
            <!-- Section 4 -->
            <section class="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm scroll-mt-28"
              id="thoi-gian-luu-tru">
              <div
                class="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-2xs">
                <span>{{ $t('policy.privacy.t93') }}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
                {{ $t('policy.privacy.t94') }}
              </h2>
              <div class="flex flex-col gap-space-md">
                <div class="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-md">
                  <div
                    class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span class="material-symbols-outlined text-[24px]">dns</span>
                  </div>
                  <div>
                    <div class="font-label-lg text-label-lg text-on-surface mb-1">{{ $t('policy.privacy.t95') }}</div>
                    <p class="font-body-md text-body-md text-on-surface-variant">
                      {{ $t('policy.privacy.t96') }}
                      <strong>{{ $t('policy.privacy.t97') }}</strong> {{ $t('policy.privacy.t98') }} <strong>{{ $t('policy.privacy.t99') }}</strong> {{ $t('policy.privacy.t100') }}
                    </p>
                  </div>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-md">
                  <div
                    class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <span class="material-symbols-outlined text-[24px]">schedule</span>
                  </div>
                  <div>
                    <div class="font-label-lg text-label-lg text-on-surface mb-1">{{ $t('policy.privacy.t101') }}</div>
                    <p class="font-body-md text-body-md text-on-surface-variant">
                      {{ $t('policy.privacy.t102') }}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <!-- Section 5 -->
            <section class="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm scroll-mt-28"
              id="quyen-khach-hang">
              <div
                class="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-2xs">
                <span>{{ $t('policy.privacy.t103') }}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
                {{ $t('policy.privacy.t104') }}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                {{ $t('policy.privacy.t105') }}
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-1">
                  <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span class="material-symbols-outlined text-[18px]">download</span>
                    {{ $t('policy.privacy.t106') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t107') }}
                  </p>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-1">
                  <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span class="material-symbols-outlined text-[18px]">delete_forever</span>
                    {{ $t('policy.privacy.t108') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t109') }}
                  </p>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-1">
                  <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span class="material-symbols-outlined text-[18px]">tune</span>
                    {{ $t('policy.privacy.t110') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t111') }}
                  </p>
                </div>
                <div class="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-1">
                  <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span class="material-symbols-outlined text-[18px]">history_edu</span>
                    {{ $t('policy.privacy.t112') }}
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    {{ $t('policy.privacy.t113') }}
                  </p>
                </div>
              </div>
            </section>
            <!-- Section 6 -->
            <section class="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm scroll-mt-28"
              id="chia-se-doi-tac">
              <div
                class="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-2xs">
                <span>{{ $t('policy.privacy.t114') }}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
                {{ $t('policy.privacy.t115') }}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                {{ $t('policy.privacy.t116') }}
              </p>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-body-sm text-body-sm">
                  <thead>
                    <tr class="bg-surface-container-low text-on-surface font-label-md text-label-md">
                      <th class="p-space-md rounded-l-xl">{{ $t('policy.privacy.t117') }}</th>
                      <th class="p-space-md">{{ $t('policy.privacy.t118') }}</th>
                      <th class="p-space-md">{{ $t('policy.privacy.t119') }}</th>
                      <th class="p-space-md rounded-r-xl">{{ $t('policy.privacy.t120') }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-transparent">
                    <tr class="hover:bg-surface-container-low/50 transition-colors">
                      <td class="p-space-md font-semibold text-on-surface flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-[18px]">local_shipping</span>
                        {{ $t('policy.privacy.t121') }}
                      </td>
                      <td class="p-space-md text-on-surface-variant">{{ $t('policy.privacy.t122') }}</td>
                      <td class="p-space-md text-on-surface-variant">{{ $t('policy.privacy.t123') }}</td>
                      <td class="p-space-md font-code-sm text-code-sm text-primary">{{ $t('policy.privacy.t124') }}</td>
                    </tr>
                    <tr class="hover:bg-surface-container-low/50 transition-colors">
                      <td class="p-space-md font-semibold text-on-surface flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary text-[18px]">storefront</span>
                        {{ $t('policy.privacy.t125') }}
                      </td>
                      <td class="p-space-md text-on-surface-variant">{{ $t('policy.privacy.t126') }}</td>
                      <td class="p-space-md text-on-surface-variant">{{ $t('policy.privacy.t127') }}</td>
                      <td class="p-space-md font-code-sm text-code-sm text-secondary">{{ $t('policy.privacy.t128') }}</td>
                    </tr>
                    <tr class="hover:bg-surface-container-low/50 transition-colors">
                      <td class="p-space-md font-semibold text-on-surface flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary-container text-[18px]">receipt</span>
                        {{ $t('policy.privacy.t129') }}
                      </td>
                      <td class="p-space-md text-on-surface-variant">{{ $t('policy.privacy.t130') }}</td>
                      <td class="p-space-md text-on-surface-variant">{{ $t('policy.privacy.t131') }}</td>
                      <td class="p-space-md font-code-sm text-code-sm text-primary-container">{{ $t('policy.privacy.t132') }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <!-- Section 7 -->
            <section class="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm scroll-mt-28"
              id="ung-pho-su-co">
              <div
                class="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-2xs">
                <span>{{ $t('policy.privacy.t133') }}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
                {{ $t('policy.privacy.t134') }}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                {{ $t('policy.privacy.t135') }}
              </p>
              <!-- Incident Timeline Steps -->
              <div
                class="relative pl-6 space-y-space-lg before:content-[''] before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-secondary">
                <div class="relative flex items-start gap-space-md">
                  <div
                    class="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary">
                    <span class="w-2 h-2 rounded-full bg-white"></span>
                  </div>
                  <div class="bg-surface-container-low p-space-md rounded-2xl w-full">
                    <div class="flex items-center justify-between mb-1">
                      <span class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.privacy.t136') }}</span>
                      <span
                        class="px-space-xs py-0.5 rounded-full bg-primary-fixed text-primary font-code-sm text-code-sm">{{ $t('policy.privacy.t137') }}</span>
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      {{ $t('policy.privacy.t138') }}
                    </p>
                  </div>
                </div>
                <div class="relative flex items-start gap-space-md">
                  <div
                    class="absolute -left-6 top-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-on-primary">
                    <span class="w-2 h-2 rounded-full bg-white"></span>
                  </div>
                  <div class="bg-surface-container-low p-space-md rounded-2xl w-full">
                    <div class="flex items-center justify-between mb-1">
                      <span class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.privacy.t139') }}</span>
                      <span
                        class="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-secondary font-code-sm text-code-sm">{{ $t('policy.privacy.t140') }}</span>
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      {{ $t('policy.privacy.t141') }}
                    </p>
                  </div>
                </div>
                <div class="relative flex items-start gap-space-md">
                  <div
                    class="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                    <span class="w-2 h-2 rounded-full bg-white"></span>
                  </div>
                  <div class="bg-surface-container-low p-space-md rounded-2xl w-full">
                    <div class="flex items-center justify-between mb-1">
                      <span class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.privacy.t142') }}</span>
                      <span
                        class="px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface font-code-sm text-code-sm">{{ $t('policy.privacy.t143') }}</span>
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      {{ $t('policy.privacy.t144') }}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <!-- Section 8 -->
            <section class="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm scroll-mt-28"
              id="thong-tin-dpo">
              <div
                class="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-2xs">
                <span>{{ $t('policy.privacy.t145') }}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
                {{ $t('policy.privacy.t146') }}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                {{ $t('policy.privacy.t147') }}
                <strong>{{ $t('policy.privacy.t148') }}</strong> {{ $t('policy.privacy.t149') }}
              </p>
              <div
                class="flex flex-wrap items-center justify-between p-space-md rounded-2xl bg-surface-container-low text-on-surface-variant text-body-sm font-body-sm gap-space-sm">
                <div>
                  <span class="font-semibold text-on-surface">{{ $t('policy.privacy.t150') }}</span> {{ $t('policy.privacy.t151') }}
                </div>
                
                <div>
                  <span class="font-semibold text-on-surface">{{ $t('policy.privacy.t152') }}</span> {{ $t('policy.privacy.t153') }}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <!-- Bottom CTA & Security Assurance Banner -->
      <section class="w-full max-w-7xl mx-auto px-8 pb-space-2xl">
        <div
          class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-space-xl text-on-primary shadow-xl">
          <!-- Background Abstract Circle Shapes -->
          <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div class="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none">
          </div>
          <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div class="max-w-2xl">
              <div
                class="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-white/20 backdrop-blur-md font-label-sm text-label-sm text-on-primary mb-space-md">
                <span class="material-symbols-outlined text-[16px]">verified</span>
                {{ $t('policy.privacy.t154') }}
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-primary tracking-tight mb-space-xs">
                {{ $t('policy.privacy.t155') }}
              </h2>
              <p class="font-body-md text-body-md text-on-primary/90 leading-relaxed">
                {{ $t('policy.privacy.t156') }}
              </p>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto shrink-0">
              <a class="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-xl font-label-md text-label-md text-primary bg-surface-container-lowest shadow-md hover:bg-surface transition-all"
                href="#">
                <span class="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                <span>{{ $t('policy.privacy.t157') }}</span>
              </a>
              <a class="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-xl font-label-md text-label-md text-on-primary bg-white/15 backdrop-blur-md hover:bg-white/25 transition-all"
                data-path="lien-he" href="#">
                <span class="material-symbols-outlined text-[20px]">support_agent</span>
                <span>{{ $t('policy.privacy.t158') }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- Interactive Client-side Script for Active TOC Highlighting -->

    </div>
  </main>
</template>

<script setup>

import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  // Give DOM a tick to render
  setTimeout(() => {
    const links = document.querySelectorAll('#policy-toc a');
    if (!links.length) return;

    const sections = Array.from(links).map(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        return document.getElementById(href.substring(1));
      }
      return null;
    }).filter(Boolean);

    function updateActiveToc() {
      let currentSectionId = '';
      const scrollPosition = window.scrollY + 160;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const targetId = href.substring(1);

        if (targetId === currentSectionId) {
          link.classList.add('text-primary', 'bg-surface-container-low', 'font-semibold');
          link.classList.remove('text-on-surface-variant');
        } else {
          link.classList.remove('text-primary', 'bg-surface-container-low', 'font-semibold');
          link.classList.add('text-on-surface-variant');
        }
      });
    }

    window.addEventListener('scroll', updateActiveToc);
    updateActiveToc();

    window._eCorTocListener = updateActiveToc;
  }, 100);
});

onUnmounted(() => {
  if (window._eCorTocListener) {
    window.removeEventListener('scroll', window._eCorTocListener);
    window._eCorTocListener = null;
  }
});

</script>

<style scoped></style>
