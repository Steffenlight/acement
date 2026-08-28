// Maps the nav and footer labels exported by Alloy onto the routes that
// actually exist in App.tsx. Labels with no counterpart return null so the
// link stays inert rather than sending people to an unrelated page.

const ROUTES: Record<string, string> = {
    // Shop
    'shop all': '/shop',
    'samples': '/shop',
    'accessories': '/shop',
    'topicals': '/shop',
    'mitopure gummies': '/shop',
    'mitopure powder': '/shop',
    'mitopure softgels': '/products/mitopure-softgels-vegan',

    // Science
    'science of mitopure®': '/science',
    'how mitopure® works': '/science',
    'benefits': '/science',
    'studies': '/science',
    'patents': '/science',

    // About
    'about us': '/about',
    'reviews': '/about',
    'testimonials': '/about',

    // Support
    'faqs': '/faq',
    'help center': '/contact',
}

export function routeForLabel(label: string): string | null {
    if (!label) return null
    return ROUTES[label.trim().toLowerCase()] ?? null
}
