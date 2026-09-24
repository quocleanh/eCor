<template>
  <main class="w-full bg-gradient-to-b from-surface to-[#edf2fb] min-h-screen"><div class="flex flex-col w-full">
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-xl md:py-space-2xl flex flex-col gap-space-2xl">
<div class="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(24,119,242,0.06)] p-space-lg md:p-space-2xl flex flex-col gap-space-lg">
<div class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
<div class="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
<nav class="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant flex-wrap">
<router-link :to="$localeRoute('home')" class="hover:text-primary transition-colors">{{ $t('policy.sla.t1') }}</router-link>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="hover:text-primary transition-colors">{{ $t('policy.sla.t2') }}</span>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-primary font-semibold">{{ $t('policy.sla.t3') }}</span>
</nav>
<div class="flex flex-col gap-space-sm max-w-4xl relative z-10">
<div class="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-container-high text-primary w-fit">
<span class="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-ping"></span>
<span class="font-label-md text-label-md tracking-wide">{{ $t('policy.sla.t4') }}</span>
</div>
<h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          {{ $t('policy.sla.t5') }}
        </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">
          {{ $t('policy.sla.t6') }}
        </p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md relative z-10 mt-space-sm">
<div class="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t7') }}</span>
<span class="material-symbols-outlined text-secondary text-[28px]" style="font-variation-settings: 'FILL' 1;">speed</span>
</div>
<div class="mt-space-md">
<span class="font-headline-lg text-headline-lg text-primary tracking-tight">{{ $t('policy.sla.t8') }}</span>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{{ $t('policy.sla.t9') }}</p>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t10') }}</span>
<span class="material-symbols-outlined text-tertiary-container text-[28px]" style="font-variation-settings: 'FILL' 1;">timer</span>
</div>
<div class="mt-space-md">
<span class="font-headline-lg text-headline-lg text-tertiary tracking-tight">{{ $t('policy.sla.t11') }}</span>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{{ $t('policy.sla.t12') }}</p>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t13') }}</span>
<span class="material-symbols-outlined text-primary text-[28px]" style="font-variation-settings: 'FILL' 1;">auto_mode</span>
</div>
<div class="mt-space-md">
<span class="font-headline-lg text-headline-lg text-on-surface tracking-tight">{{ $t('policy.sla.t14') }}</span>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{{ $t('policy.sla.t15') }}</p>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t16') }}</span>
<span class="material-symbols-outlined text-secondary text-[28px]" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<div class="mt-space-md">
<span class="font-headline-lg text-headline-lg text-secondary tracking-tight">{{ $t('policy.sla.t17') }}</span>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{{ $t('policy.sla.t18') }}</p>
</div>
</div>
</div>
</div>
<section class="flex flex-col gap-space-lg">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<div class="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-primary tracking-widest uppercase">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
            {{ $t('policy.sla.t19') }}
          </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-2xs">
            {{ $t('policy.sla.t20') }}
          </h2>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          {{ $t('policy.sla.t21') }}
        </p>
</div>
<div class="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left min-w-[800px]">
<thead>
<tr class="bg-surface-container-low">
<th class="p-space-md font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t22') }}</th>
<th class="p-space-md font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t23') }}</th>
<th class="p-space-md font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t24') }}</th>
<th class="p-space-md font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t25') }}</th>
<th class="p-space-md font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t26') }}</th>
</tr>
</thead>
<tbody class="divide-y-0">
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="p-space-md align-top">
<div class="flex items-center gap-space-xs">
<span class="px-space-sm py-space-2xs rounded-full bg-error-container text-error font-label-sm text-label-sm flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                      {{ $t('policy.sla.t27') }}
                    </span>
</div>
</td>
<td class="p-space-md align-top max-w-sm">
<p class="font-body-sm text-body-sm text-on-surface font-medium">{{ $t('policy.sla.t28') }}</p>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">{{ $t('policy.sla.t29') }}</p>
</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-tertiary font-bold">{{ $t('policy.sla.t30') }}</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface font-medium">{{ $t('policy.sla.t31') }}</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-primary font-bold">{{ $t('policy.sla.t32') }}</td>
</tr>
<tr class="hover:bg-surface-container-low/50 transition-colors bg-surface/30">
<td class="p-space-md align-top">
<div class="flex items-center gap-space-xs">
<span class="px-space-sm py-space-2xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                      {{ $t('policy.sla.t33') }}
                    </span>
</div>
</td>
<td class="p-space-md align-top max-w-sm">
<p class="font-body-sm text-body-sm text-on-surface font-medium">{{ $t('policy.sla.t34') }}</p>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">{{ $t('policy.sla.t35') }}</p>
</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface-variant">{{ $t('policy.sla.t36') }}</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface font-medium">{{ $t('policy.sla.t37') }}</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-primary font-medium">{{ $t('policy.sla.t38') }}</td>
</tr>
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="p-space-md align-top">
<div class="flex items-center gap-space-xs">
<span class="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
                      {{ $t('policy.sla.t39') }}
                    </span>
</div>
</td>
<td class="p-space-md align-top max-w-sm">
<p class="font-body-sm text-body-sm text-on-surface font-medium">{{ $t('policy.sla.t40') }}</p>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">{{ $t('policy.sla.t41') }}</p>
</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface-variant">{{ $t('policy.sla.t42') }}</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface-variant">{{ $t('policy.sla.t43') }}</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface-variant">{{ $t('policy.sla.t44') }}</td>
</tr>
<tr class="hover:bg-surface-container-low/50 transition-colors bg-surface/30">
<td class="p-space-md align-top">
<div class="flex items-center gap-space-xs">
<span class="px-space-sm py-space-2xs rounded-full bg-surface-container-low text-outline font-label-sm text-label-sm">
                      {{ $t('policy.sla.t45') }}
                    </span>
</div>
</td>
<td class="p-space-md align-top max-w-sm">
<p class="font-body-sm text-body-sm text-on-surface font-medium">{{ $t('policy.sla.t46') }}</p>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">{{ $t('policy.sla.t47') }}</p>
</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface-variant">{{ $t('policy.sla.t48') }}</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface-variant">{{ $t('policy.sla.t49') }}</td>
<td class="p-space-md align-top font-code-sm text-code-sm text-on-surface-variant">{{ $t('policy.sla.t50') }}</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<span class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.sla.t51') }}</span>
<span class="font-code-sm text-code-sm text-secondary font-medium">{{ $t('policy.sla.t52') }}</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
<div class="flex flex-col gap-space-2xs bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div class="flex items-center justify-between text-secondary">
<span class="font-label-sm text-label-sm font-bold uppercase">{{ $t('policy.sla.t53') }}</span>
<span class="material-symbols-outlined text-[18px]">crisis_alert</span>
</div>
<p class="font-label-md text-label-md text-on-surface">{{ $t('policy.sla.t54') }}</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t55') }}</p>
<span class="font-code-sm text-code-sm text-primary mt-space-2xs">{{ $t('policy.sla.t56') }}</span>
</div>
<div class="flex flex-col gap-space-2xs bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div class="flex items-center justify-between text-primary">
<span class="font-label-sm text-label-sm font-bold uppercase">{{ $t('policy.sla.t57') }}</span>
<span class="material-symbols-outlined text-[18px]">groups</span>
</div>
<p class="font-label-md text-label-md text-on-surface">{{ $t('policy.sla.t58') }}</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t59') }}</p>
<span class="font-code-sm text-code-sm text-primary mt-space-2xs">{{ $t('policy.sla.t60') }}</span>
</div>
<div class="flex flex-col gap-space-2xs bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div class="flex items-center justify-between text-tertiary">
<span class="font-label-sm text-label-sm font-bold uppercase">{{ $t('policy.sla.t61') }}</span>
<span class="material-symbols-outlined text-[18px]">healing</span>
</div>
<p class="font-label-md text-label-md text-on-surface">{{ $t('policy.sla.t62') }}</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t63') }}</p>
<span class="font-code-sm text-code-sm text-primary mt-space-2xs">{{ $t('policy.sla.t64') }}</span>
</div>
<div class="flex flex-col gap-space-2xs bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div class="flex items-center justify-between text-secondary">
<span class="font-label-sm text-label-sm font-bold uppercase">{{ $t('policy.sla.t65') }}</span>
<span class="material-symbols-outlined text-[18px]">task_alt</span>
</div>
<p class="font-label-md text-label-md text-on-surface">{{ $t('policy.sla.t66') }}</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t67') }}</p>
<span class="font-code-sm text-code-sm text-primary mt-space-2xs">{{ $t('policy.sla.t68') }}</span>
</div>
</div>
</div>
</section>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
<div class="lg:col-span-7 flex flex-col gap-space-lg">
<div>
<div class="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-secondary tracking-widest uppercase">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            {{ $t('policy.sla.t69') }}
          </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-2xs">
            {{ $t('policy.sla.t70') }}
          </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            {{ $t('policy.sla.t71') }}
          </p>
</div>
<div class="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] overflow-hidden">
<table class="w-full text-left">
<thead>
<tr class="bg-surface-container-low">
<th class="p-space-md font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t72') }}</th>
<th class="p-space-md font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t73') }}</th>
<th class="p-space-md font-label-md text-label-md text-on-surface-variant">{{ $t('policy.sla.t74') }}</th>
</tr>
</thead>
<tbody class="divide-y-0">
<tr class="hover:bg-surface-container-low/50">
<td class="p-space-md">
<div class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="font-body-md text-body-md text-on-surface font-semibold">{{ $t('policy.sla.t75') }}</span>
</div>
</td>
<td class="p-space-md font-label-lg text-label-lg text-primary">{{ $t('policy.sla.t76') }}</td>
<td class="p-space-md font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t77') }}</td>
</tr>
<tr class="hover:bg-surface-container-low/50 bg-surface/30">
<td class="p-space-md">
<div class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span class="font-body-md text-body-md text-on-surface font-semibold">{{ $t('policy.sla.t78') }}</span>
</div>
</td>
<td class="p-space-md font-label-lg text-label-lg text-tertiary">{{ $t('policy.sla.t79') }}</td>
<td class="p-space-md font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t80') }}</td>
</tr>
<tr class="hover:bg-surface-container-low/50">
<td class="p-space-md">
<div class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-error"></span>
<span class="font-body-md text-body-md text-on-surface font-semibold">{{ $t('policy.sla.t81') }}</span>
</div>
</td>
<td class="p-space-md font-label-lg text-label-lg text-error">{{ $t('policy.sla.t82') }}</td>
<td class="p-space-md font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t83') }}</td>
</tr>
</tbody>
</table>
</div>
<div class="p-space-md bg-secondary-fixed/30 rounded-xl flex items-start gap-space-sm text-on-secondary-fixed">
<span class="material-symbols-outlined text-secondary text-[24px]">info</span>
<p class="font-body-sm text-body-sm">
<strong>{{ $t('policy.sla.t84') }}</strong> {{ $t('policy.sla.t85') }}
          </p>
</div>
</div>
<div class="lg:col-span-5 bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] p-space-lg flex flex-col gap-space-md">
<div class="flex items-center justify-between pb-space-xs">
<div>
<span class="font-label-sm text-label-sm text-outline uppercase tracking-wider">{{ $t('policy.sla.t86') }}</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.sla.t87') }}</h3>
</div>
<div class="flex items-center gap-1">
<span class="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<span class="font-code-sm text-code-sm text-secondary font-bold">{{ $t('policy.sla.t88') }}</span>
</div>
</div>
<div class="flex flex-col gap-space-xs">
<div class="flex justify-between items-center font-body-sm text-body-sm">
<span class="text-on-surface-variant">{{ $t('policy.sla.t89') }}</span>
<span class="font-code-sm text-code-sm text-secondary font-semibold">{{ $t('policy.sla.t90') }}</span>
</div>
<div class="w-full bg-surface-container-low h-3 rounded-full overflow-hidden flex gap-0.5 p-0.5">
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
</div>
</div>
<div class="flex flex-col gap-space-xs">
<div class="flex justify-between items-center font-body-sm text-body-sm">
<span class="text-on-surface-variant">{{ $t('policy.sla.t91') }}</span>
<span class="font-code-sm text-code-sm text-secondary font-semibold">{{ $t('policy.sla.t92') }}</span>
</div>
<div class="w-full bg-surface-container-low h-3 rounded-full overflow-hidden flex gap-0.5 p-0.5">
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
</div>
</div>
<div class="flex flex-col gap-space-xs">
<div class="flex justify-between items-center font-body-sm text-body-sm">
<span class="text-on-surface-variant">{{ $t('policy.sla.t93') }}</span>
<span class="font-code-sm text-code-sm text-secondary font-semibold">{{ $t('policy.sla.t94') }}</span>
</div>
<div class="w-full bg-surface-container-low h-3 rounded-full overflow-hidden flex gap-0.5 p-0.5">
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
<div class="h-full bg-secondary-fixed-dim rounded-full flex-1"></div>
</div>
</div>
<div class="mt-space-sm p-space-md bg-surface-container-low rounded-xl flex items-center justify-between">
<div class="flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.sla.t95') }}</span>
<span class="font-code-sm text-code-sm text-primary font-bold">{{ $t('policy.sla.t96') }}</span>
</div>
<router-link class="px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-primary bg-primary hover:bg-primary-container transition-colors inline-flex items-center gap-1" to="/contact">
<span>{{ $t('policy.sla.t97') }}</span>
<span class="material-symbols-outlined text-[16px]">open_in_new</span>
</router-link>
</div>
</div>
</div>
<section class="flex flex-col gap-space-lg">
<div>
<div class="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-primary tracking-widest uppercase">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
          {{ $t('policy.sla.t98') }}
        </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-2xs">
          {{ $t('policy.sla.t99') }}
        </h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
<div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] flex flex-col justify-between">
<div class="flex flex-col gap-space-sm">
<div class="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[28px]">security_update_good</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.sla.t100') }}</h3>
<ul class="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t101') }}</span>
</li>
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t102') }}</span>
</li>
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t103') }}</span>
</li>
</ul>
</div>
<div class="mt-space-lg pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<span class="font-label-sm text-label-sm text-primary font-semibold">{{ $t('policy.sla.t104') }}</span>
</div>
</div>
<div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] flex flex-col justify-between">
<div class="flex flex-col gap-space-sm">
<div class="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[28px]">print</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.sla.t105') }}</h3>
<ul class="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t106') }}</span>
</li>
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t107') }}</span>
</li>
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t108') }}</span>
</li>
</ul>
</div>
<div class="mt-space-lg pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<span class="font-label-sm text-label-sm text-secondary font-semibold">{{ $t('policy.sla.t109') }}</span>
</div>
</div>
<div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] flex flex-col justify-between">
<div class="flex flex-col gap-space-sm">
<div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
<span class="material-symbols-outlined text-[28px]">schedule</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.sla.t110') }}</h3>
<ul class="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t111') }}</span>
</li>
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t112') }}</span>
</li>
<li class="flex items-start gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>{{ $t('policy.sla.t113') }}</span>
</li>
</ul>
</div>
<div class="mt-space-lg pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<span class="font-label-sm text-label-sm text-on-surface font-semibold">{{ $t('policy.sla.t114') }}</span>
</div>
</div>
</div>
</section>
<section class="flex flex-col gap-space-lg">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<div class="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-primary tracking-widest uppercase">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
            {{ $t('policy.sla.t115') }}
          </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-2xs">
            {{ $t('policy.sla.t116') }}
          </h2>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          {{ $t('policy.sla.t117') }}
        </p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
<div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] flex flex-col gap-space-md transition-transform hover:-translate-y-1">
<div class="w-12 h-12 rounded-xl bg-error-container text-error flex items-center justify-center">
<span class="material-symbols-outlined text-[28px]">phone_in_talk</span>
</div>
<div>
<span class="font-label-sm text-label-sm text-outline uppercase">{{ $t('policy.sla.t118') }}</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.sla.t119') }}</h4>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.sla.t120') }}
          </p>
<div class="mt-auto pt-space-md">
<a class="font-headline-sm text-headline-sm text-primary font-bold hover:underline block" href="tel:19006868">{{ $t('policy.sla.t121') }}</a>
<span class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.sla.t122') }}</span>
</div>
</div>
<div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] flex flex-col gap-space-md transition-transform hover:-translate-y-1">
<div class="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[28px]">confirmation_number</span>
</div>
<div>
<span class="font-label-sm text-label-sm text-outline uppercase">{{ $t('policy.sla.t123') }}</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.sla.t124') }}</h4>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.sla.t125') }}
          </p>
<div class="mt-auto pt-space-md">
<router-link class="font-label-md text-label-md text-primary font-semibold flex items-center gap-1 hover:underline" to="/contact">
              {{ $t('policy.sla.t126') }}
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</router-link>
<span class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.sla.t127') }}</span>
</div>
</div>
<div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] flex flex-col gap-space-md transition-transform hover:-translate-y-1">
<div class="w-12 h-12 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center">
<span class="material-symbols-outlined text-[28px]">forum</span>
</div>
<div>
<span class="font-label-sm text-label-sm text-outline uppercase">{{ $t('policy.sla.t128') }}</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.sla.t129') }}</h4>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.sla.t130') }}
          </p>
<div class="mt-auto pt-space-md">
<span class="font-label-md text-label-md text-secondary font-semibold block">{{ $t('policy.sla.t131') }}</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.sla.t132') }}</span>
</div>
</div>
<div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] flex flex-col gap-space-md transition-transform hover:-translate-y-1">
<div class="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center">
<span class="material-symbols-outlined text-[28px]">engineering</span>
</div>
<div>
<span class="font-label-sm text-label-sm text-outline uppercase">{{ $t('policy.sla.t133') }}</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface">{{ $t('policy.sla.t134') }}</h4>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            {{ $t('policy.sla.t135') }}
          </p>
<div class="mt-auto pt-space-md">
<span class="font-label-md text-label-md text-on-surface font-semibold block">{{ $t('policy.sla.t136') }}</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">{{ $t('policy.sla.t137') }}</span>
</div>
</div>
</div>
</section>
<div class="bg-gradient-to-r from-primary to-secondary rounded-xl p-space-lg md:p-space-2xl text-on-primary shadow-[0_10px_25px_-5px_rgba(24,119,242,0.25)] flex flex-col lg:flex-row items-center justify-between gap-space-xl">
<div class="flex flex-col gap-space-xs max-w-2xl text-center lg:text-left">
<span class="font-label-sm text-label-sm tracking-widest uppercase opacity-90">{{ $t('policy.sla.t138') }}</span>
<h3 class="font-headline-lg text-headline-lg">{{ $t('policy.sla.t139') }}</h3>
<p class="font-body-md text-body-md opacity-90">
          {{ $t('policy.sla.t140') }}
        </p>
</div>
<div class="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto">
<router-link class="w-full sm:w-auto px-space-lg py-space-sm bg-surface-container-lowest text-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-space-xs hover:bg-surface-bright transition-colors shadow-sm" to="/contact">
<span class="material-symbols-outlined text-[20px]">monitor_heart</span>
<span>{{ $t('policy.sla.t141') }}</span>
</router-link>
<router-link class="w-full sm:w-auto px-space-lg py-space-sm bg-primary-fixed/20 text-on-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-space-xs hover:bg-primary-fixed/30 transition-colors" to="/contact">
<span class="material-symbols-outlined text-[20px]">support_agent</span>
<span>{{ $t('policy.sla.t142') }}</span>
</router-link>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary flex-shrink-0">
<span class="material-symbols-outlined text-[20px]">shield_lock</span>
</div>
<div>
<h5 class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.sla.t143') }}</h5>
<p class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t144') }}</p>
</div>
</div>
<div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
<span class="material-symbols-outlined text-[20px]">contract</span>
</div>
<div>
<h5 class="font-label-lg text-label-lg text-on-surface">{{ $t('policy.sla.t145') }}</h5>
<p class="font-body-sm text-body-sm text-on-surface-variant">{{ $t('policy.sla.t146') }}</p>
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
