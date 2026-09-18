<template>
  <main class="w-full bg-gradient-to-b from-surface to-[#edf2fb] min-h-screen"><div class="flex flex-col w-full">
<!-- Subtle decorative ambient elements -->
<div class="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/60 to-surface pb-space-2xl">
<div class="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div class="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
<div class="w-full max-w-7xl mx-auto px-8 pt-space-xl">
<!-- Breadcrumb -->
<nav aria-label="Breadcrumb" class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-md">
<a class="hover:text-primary transition-colors flex items-center gap-1" data-path="trang-chu" href="#">
<span class="material-symbols-outlined text-[16px]">home</span>
<span>{{ $t('policy.terms.t1') }}</span>
</a>
<span class="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span class="text-on-surface-variant">{{ $t('policy.terms.t2') }}</span>
<span class="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span class="text-primary font-semibold">{{ $t('policy.terms.t3') }}</span>
</nav>
<!-- Header Hero -->
<div class="flex flex-col gap-space-md max-w-4xl">
<div class="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-surface-container-high/80 text-primary w-fit shadow-sm">
<span class="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="font-code-sm text-code-sm tracking-wide">{{ $t('policy.terms.t4') }}</span>
</div>
<h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
          {{ $t('policy.terms.t5') }}
        </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          {{ $t('policy.terms.t6') }}
        </p>
<div class="flex flex-wrap items-center gap-space-md pt-space-2xs">
<div class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span class="material-symbols-outlined text-[18px] text-secondary">verified</span>
<span>{{ $t('policy.terms.t7') }}</span>
</div>
<div class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span class="material-symbols-outlined text-[18px] text-secondary">security</span>
<span>{{ $t('policy.terms.t8') }}</span>
</div>
<div class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span class="material-symbols-outlined text-[18px] text-primary">history_edu</span>
<span>{{ $t('policy.terms.t9') }}</span>
</div>
</div>
</div>
<!-- Core Commitments 4 Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-2xl">
<!-- Card 1 -->
<div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm">
<div class="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[26px]">contract</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.terms.t10') }}</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.terms.t11') }}
          </p>
</div>
<!-- Card 2 -->
<div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm">
<div class="w-12 h-12 rounded-xl bg-surface-container-low text-secondary flex items-center justify-center">
<span class="material-symbols-outlined text-[26px]">shield_person</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.terms.t12') }}</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.terms.t13') }}
          </p>
</div>
<!-- Card 3 -->
<div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm">
<div class="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[26px]">support_agent</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.terms.t14') }}</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.terms.t15') }}
          </p>
</div>
<!-- Card 4 -->
<div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm">
<div class="w-12 h-12 rounded-xl bg-surface-container-low text-secondary flex items-center justify-center">
<span class="material-symbols-outlined text-[26px]">receipt_long</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.terms.t16') }}</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.terms.t17') }}
          </p>
</div>
</div>
</div>
</div>
<!-- Main Legal Container (2 Columns) -->
<div class="w-full max-w-7xl mx-auto px-8 py-space-xl">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
<!-- Sticky Sidebar Navigation (4 cols) -->
<div class="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-space-lg">
<!-- Table of Contents Card -->
<div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div class="flex items-center justify-between pb-space-xs">
<span class="font-label-lg text-label-lg text-on-surface flex items-center gap-space-xs">
<span class="material-symbols-outlined text-primary text-[20px]">list_alt</span>
<span>{{ $t('policy.terms.t18') }}</span>
</span>
<span class="px-space-xs py-space-2xs rounded-full bg-surface-container-low text-on-surface-variant font-code-sm text-code-sm">{{ $t('policy.terms.t19') }}</span>
</div>
<nav class="flex flex-col gap-space-2xs" id="legal-toc">
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-1">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t20') }}</span>
<span class="truncate">{{ $t('policy.terms.t21') }}</span>
</a>
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-2">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t22') }}</span>
<span class="truncate">{{ $t('policy.terms.t23') }}</span>
</a>
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-3">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t24') }}</span>
<span class="truncate">{{ $t('policy.terms.t25') }}</span>
</a>
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-4">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t26') }}</span>
<span class="truncate">{{ $t('policy.terms.t27') }}</span>
</a>
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-5">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t28') }}</span>
<span class="truncate">{{ $t('policy.terms.t29') }}</span>
</a>
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-6">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t30') }}</span>
<span class="truncate">{{ $t('policy.terms.t31') }}</span>
</a>
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-7">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t32') }}</span>
<span class="truncate">{{ $t('policy.terms.t33') }}</span>
</a>
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-8">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t34') }}</span>
<span class="truncate">{{ $t('policy.terms.t35') }}</span>
</a>
<a class="group flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="#dieu-9">
<span class="w-6 h-6 rounded-lg bg-surface-container-low group-hover:bg-primary-fixed text-primary flex items-center justify-center font-code-sm text-code-sm">{{ $t('policy.terms.t36') }}</span>
<span class="truncate">{{ $t('policy.terms.t37') }}</span>
</a>
</nav>
</div>
<!-- Download PDF Box -->
<div class="bg-gradient-to-br from-primary-fixed/60 via-surface-container-lowest to-surface-container-low rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div class="flex items-center gap-space-xs">
<div class="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm">
<span class="material-symbols-outlined text-[22px]">picture_as_pdf</span>
</div>
<div>
<div class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.terms.t38') }}</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.terms.t39') }}</div>
</div>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.terms.t40') }}
          </p>
<a class="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-primary bg-primary hover:bg-primary-container shadow-sm transition-all hover:-translate-y-[1px]" href="#">
<span class="material-symbols-outlined text-[18px]">download</span>
<span>{{ $t('policy.terms.t41') }}</span>
</a>
</div>
<!-- Operational Status Indicator -->
<div class="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="relative flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
</span>
<span class="font-label-sm text-label-sm text-on-surface font-semibold">{{ $t('policy.terms.t42') }}</span>
</div>
<span class="px-space-xs py-space-2xs rounded-full bg-surface-container-low text-secondary font-code-sm text-code-sm font-semibold">{{ $t('policy.terms.t43') }}</span>
</div>
</div>
<!-- Right Column: Detailed Legal Terms (8 cols) -->
<div class="lg:col-span-8 flex flex-col gap-space-xl">
<!-- Banner Alert Note -->
<div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex items-start gap-space-md">
<div class="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex-shrink-0 flex items-center justify-center">
<span class="material-symbols-outlined text-[24px]">policy</span>
</div>
<div class="flex flex-col gap-space-2xs">
<h3 class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.terms.t44') }}</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {{ $t('policy.terms.t45') }}
            </p>
</div>
</div>
<!-- SECTION 1 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-1">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t46') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t47') }}</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {{ $t('policy.terms.t48') }}
          </p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div class="bg-surface-container-low/70 rounded-xl p-space-md flex flex-col gap-space-2xs">
<span class="font-label-md text-label-md text-primary font-bold">{{ $t('policy.terms.t49') }}</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">
                {{ $t('policy.terms.t50') }}
              </p>
</div>
<div class="bg-surface-container-low/70 rounded-xl p-space-md flex flex-col gap-space-2xs">
<span class="font-label-md text-label-md text-primary font-bold">{{ $t('policy.terms.t51') }}</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">
                {{ $t('policy.terms.t52') }}
              </p>
</div>
<div class="bg-surface-container-low/70 rounded-xl p-space-md flex flex-col gap-space-2xs">
<span class="font-label-md text-label-md text-primary font-bold">{{ $t('policy.terms.t53') }}</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">
                {{ $t('policy.terms.t54') }}
              </p>
</div>
<div class="bg-surface-container-low/70 rounded-xl p-space-md flex flex-col gap-space-2xs">
<span class="font-label-md text-label-md text-primary font-bold">{{ $t('policy.terms.t55') }}</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">
                {{ $t('policy.terms.t56') }}
              </p>
</div>
</div>
<div class="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-high/40 text-on-surface">
<span class="material-symbols-outlined text-secondary text-[24px]">verified_user</span>
<div class="font-body-sm text-body-sm">
<strong class="font-semibold">{{ $t('policy.terms.t57') }}</strong> {{ $t('policy.terms.t58') }} <strong>{{ $t('policy.terms.t59') }}</strong> {{ $t('policy.terms.t60') }}
            </div>
</div>
</section>
<!-- SECTION 2 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-2">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t61') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t62') }}</h2>
</div>
<div class="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t63') }}</strong> {{ $t('policy.terms.t64') }}
            </p>
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t65') }}</strong> {{ $t('policy.terms.t66') }}
            </p>
<div class="grid grid-cols-1 md:grid-cols-3 gap-space-sm my-space-sm">
<div class="p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-1">
<span class="font-label-md text-label-md text-primary font-bold">{{ $t('policy.terms.t67') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t68') }}</span>
</div>
<div class="p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-1">
<span class="font-label-md text-label-md text-secondary font-bold">{{ $t('policy.terms.t69') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t70') }}</span>
</div>
<div class="p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-1">
<span class="font-label-md text-label-md text-on-surface font-bold">{{ $t('policy.terms.t71') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t72') }}</span>
</div>
</div>
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t73') }}</strong> {{ $t('policy.terms.t74') }}
            </p>
</div>
<!-- Alert callout -->
<div class="flex items-start gap-space-sm p-space-md rounded-xl bg-error-container/40 text-on-error-container">
<span class="material-symbols-outlined text-error text-[24px]">gpp_maybe</span>
<div class="font-body-sm text-body-sm">
<strong>{{ $t('policy.terms.t75') }}</strong> {{ $t('policy.terms.t76') }}
            </div>
</div>
</section>
<!-- SECTION 3 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-3">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t77') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t78') }}</h2>
</div>
<!-- Split graphic / Visual concept -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div class="bg-surface-container-low rounded-2xl p-space-lg flex flex-col gap-space-sm">
<div class="flex items-center justify-between">
<span class="font-label-lg text-label-lg text-primary font-bold">{{ $t('policy.terms.t79') }}</span>
<span class="material-symbols-outlined text-primary text-[22px]">copyright</span>
</div>
<ul class="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant list-disc pl-space-md">
<li>{{ $t('policy.terms.t80') }}</li>
<li>{{ $t('policy.terms.t81') }}</li>
<li>{{ $t('policy.terms.t82') }}</li>
</ul>
</div>
<div class="bg-surface-container-low rounded-2xl p-space-lg flex flex-col gap-space-sm">
<div class="flex items-center justify-between">
<span class="font-label-lg text-label-lg text-secondary font-bold">{{ $t('policy.terms.t83') }}</span>
<span class="material-symbols-outlined text-secondary text-[22px]">database</span>
</div>
<ul class="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant list-disc pl-space-md">
<li>{{ $t('policy.terms.t84') }}</li>
<li>{{ $t('policy.terms.t85') }}</li>
<li>{{ $t('policy.terms.t86') }}</li>
</ul>
</div>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {{ $t('policy.terms.t87') }}
          </p>
</section>
<!-- SECTION 4 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-4">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t88') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t89') }}</h2>
</div>
<div class="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t90') }}</strong> {{ $t('policy.terms.t91') }}
            </p>
<!-- Table simulation using compliant classes -->
<div class="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
<div class="grid grid-cols-12 bg-surface-container-high/60 p-space-sm font-label-sm text-label-sm text-on-surface font-bold">
<div class="col-span-4">{{ $t('policy.terms.t92') }}</div>
<div class="col-span-4">{{ $t('policy.terms.t93') }}</div>
<div class="col-span-4">{{ $t('policy.terms.t94') }}</div>
</div>
<div class="grid grid-cols-12 p-space-sm font-body-sm text-body-sm text-on-surface-variant border-b border-surface-container">
<div class="col-span-4 font-semibold text-on-surface">{{ $t('policy.terms.t95') }}</div>
<div class="col-span-4">{{ $t('policy.terms.t96') }}</div>
<div class="col-span-4">{{ $t('policy.terms.t97') }}</div>
</div>
<div class="grid grid-cols-12 p-space-sm font-body-sm text-body-sm text-on-surface-variant border-b border-surface-container">
<div class="col-span-4 font-semibold text-on-surface">{{ $t('policy.terms.t98') }}</div>
<div class="col-span-4">{{ $t('policy.terms.t99') }}</div>
<div class="col-span-4">{{ $t('policy.terms.t100') }}</div>
</div>
<div class="grid grid-cols-12 p-space-sm font-body-sm text-body-sm text-on-surface-variant">
<div class="col-span-4 font-semibold text-on-surface">{{ $t('policy.terms.t101') }}</div>
<div class="col-span-4">{{ $t('policy.terms.t102') }}</div>
<div class="col-span-4">{{ $t('policy.terms.t103') }}</div>
</div>
</div>
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t104') }}</strong> {{ $t('policy.terms.t105') }}
            </p>
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t106') }}</strong> {{ $t('policy.terms.t107') }} <strong>{{ $t('policy.terms.t108') }}</strong> {{ $t('policy.terms.t109') }}
            </p>
</div>
</section>
<!-- SECTION 5 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-5">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t110') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t111') }}</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {{ $t('policy.terms.t112') }}
          </p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div class="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-xs">
<span class="material-symbols-outlined text-error text-[20px] mt-0.5">block</span>
<div class="flex flex-col gap-1">
<span class="font-label-md text-label-md text-on-surface font-semibold">{{ $t('policy.terms.t113') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t114') }}</span>
</div>
</div>
<div class="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-xs">
<span class="material-symbols-outlined text-error text-[20px] mt-0.5">block</span>
<div class="flex flex-col gap-1">
<span class="font-label-md text-label-md text-on-surface font-semibold">{{ $t('policy.terms.t115') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t116') }}</span>
</div>
</div>
<div class="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-xs">
<span class="material-symbols-outlined text-error text-[20px] mt-0.5">block</span>
<div class="flex flex-col gap-1">
<span class="font-label-md text-label-md text-on-surface font-semibold">{{ $t('policy.terms.t117') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t118') }}</span>
</div>
</div>
<div class="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-xs">
<span class="material-symbols-outlined text-error text-[20px] mt-0.5">block</span>
<div class="flex flex-col gap-1">
<span class="font-label-md text-label-md text-on-surface font-semibold">{{ $t('policy.terms.t119') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t120') }}</span>
</div>
</div>
</div>
</section>
<!-- SECTION 6 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-6">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t121') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t122') }}</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {{ $t('policy.terms.t123') }}
          </p>
<!-- Stepper timeline component -->
<div class="relative flex flex-col gap-space-md pl-space-lg">
<div class="absolute left-3 top-2 bottom-2 w-0.5 bg-surface-container-highest"></div>
<div class="relative flex items-start gap-space-md">
<div class="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold -ml-6 z-10">{{ $t('policy.terms.t124') }}</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface font-bold">{{ $t('policy.terms.t125') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t126') }}</span>
</div>
</div>
<div class="relative flex items-start gap-space-md">
<div class="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-code-sm text-code-sm font-bold -ml-6 z-10">{{ $t('policy.terms.t127') }}</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface font-bold">{{ $t('policy.terms.t128') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t129') }}</span>
</div>
</div>
<div class="relative flex items-start gap-space-md">
<div class="w-6 h-6 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-code-sm text-code-sm font-bold -ml-6 z-10">{{ $t('policy.terms.t130') }}</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface font-bold">{{ $t('policy.terms.t131') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t132') }}</span>
</div>
</div>
</div>
</section>
<!-- SECTION 7 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-7">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t133') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t134') }}</h2>
</div>
<div class="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t135') }}</strong> {{ $t('policy.terms.t136') }} <strong>{{ $t('policy.terms.t137') }}</strong> {{ $t('policy.terms.t138') }}
            </p>
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t139') }}</strong> {{ $t('policy.terms.t140') }}
            </p>
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t141') }}</strong> {{ $t('policy.terms.t142') }}
            </p>
</div>
</section>
<!-- SECTION 8 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-8">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t143') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t144') }}</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {{ $t('policy.terms.t145') }}
          </p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div class="p-space-md bg-surface-container-low rounded-xl flex items-center gap-space-sm">
<span class="material-symbols-outlined text-secondary text-[28px]">lock_clock</span>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface font-semibold">{{ $t('policy.terms.t146') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t147') }}</span>
</div>
</div>
<div class="p-space-md bg-surface-container-low rounded-xl flex items-center gap-space-sm">
<span class="material-symbols-outlined text-secondary text-[28px]">verified</span>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface font-semibold">{{ $t('policy.terms.t148') }}</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.terms.t149') }}</span>
</div>
</div>
</div>
</section>
<!-- SECTION 9 -->
<section class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col gap-space-lg scroll-mt-28" id="dieu-9">
<div class="flex items-center gap-space-sm">
<span class="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-code-sm text-code-sm font-bold">{{ $t('policy.terms.t150') }}</span>
<h2 class="font-headline-md text-headline-md text-on-surface">{{ $t('policy.terms.t151') }}</h2>
</div>
<div class="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t152') }}</strong> {{ $t('policy.terms.t153') }}
            </p>
<p>
<strong class="text-on-surface font-semibold">{{ $t('policy.terms.t154') }}</strong> {{ $t('policy.terms.t155') }}
            </p>
<p>
              {{ $t('policy.terms.t156') }} <strong>{{ $t('policy.terms.t157') }}</strong> {{ $t('policy.terms.t158') }}
            </p>
</div>
<!-- Signature Signoff note -->
<div class="p-space-lg bg-surface-container-low/80 rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md mt-space-sm">
<div class="flex flex-col gap-1 text-center md:text-left">
<span class="font-label-lg text-label-lg text-on-surface font-bold">{{ $t('policy.terms.t159') }}</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.terms.t160') }}</span>
</div>
<div class="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-lowest rounded-xl shadow-sm text-secondary font-code-sm text-code-sm font-semibold">
<span class="material-symbols-outlined text-[18px]">verified</span>
<span>{{ $t('policy.terms.t161') }}</span>
</div>
</div>
</section>
</div>
</div>
</div>
<!-- Contact & Legal Consultation Banner -->
<div class="w-full bg-surface-container-low py-space-2xl mt-space-xl">
<div class="w-full max-w-7xl mx-auto px-8">
<div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-space-xl text-on-primary shadow-xl relative overflow-hidden">
<div class="absolute -right-10 -bottom-10 w-80 h-80 bg-surface-container-lowest/10 rounded-full blur-2xl pointer-events-none"></div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
<div class="lg:col-span-8 flex flex-col gap-space-sm">
<span class="font-code-sm text-code-sm tracking-wider uppercase opacity-80">{{ $t('policy.terms.t162') }}</span>
<h2 class="font-headline-lg text-headline-lg font-bold leading-tight">
              {{ $t('policy.terms.t163') }}
            </h2>
<p class="font-body-md text-body-md opacity-90 max-w-2xl leading-relaxed">
              {{ $t('policy.terms.t164') }}
            </p>
</div>
<div class="lg:col-span-4 flex flex-col gap-space-sm items-stretch sm:items-start lg:items-end">
<div class="flex flex-col gap-space-2xs bg-surface-container-lowest/15 backdrop-blur-md p-space-md rounded-2xl w-full text-on-primary">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-[20px]">mail</span>
<span class="font-label-md text-label-md">{{ $t('policy.terms.t165') }}</span>
</div>
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-[20px]">call</span>
<span class="font-label-md text-label-md font-bold">{{ $t('policy.terms.t166') }}</span>
</div>
</div>
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-xl font-label-md text-label-md text-on-surface bg-surface-container-lowest hover:bg-surface-bright shadow-md transition-all hover:-translate-y-[1px]" data-path="lien-he" href="#">
<span class="material-symbols-outlined text-[18px] text-primary">edit_document</span>
<span>{{ $t('policy.terms.t167') }}</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div></main>
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

<style scoped>
</style>
