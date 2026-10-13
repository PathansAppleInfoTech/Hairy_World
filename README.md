# Hairy World – Website

React + Vite + Tailwind CSS + react-helmet-async.

## Run
    npm install
    npm run dev        # development
    npm run build      # production build -> dist/

## Edit company details
All contact info, social links, products, stats and SEO defaults live in `src/data/companyData.js`.
Phone, WhatsApp number, email and street address are DEMO values – replace them before launch.
(`whatsappNumber` = country code + number, no "+" or spaces.)
Also replace `mapEmbed` with the exact embed URL from Google Maps -> Share -> Embed a map.

## Structure
- `src/components/` Header, Footer, Layout, BackToTop, SEO, WhatsAppFloat, Icons
- `src/pages/` Home, About, Products, CustomManufacturing, GlobalExport, WholesaleEnquiry, Contact, NotFound
- `public/logos/` logo, logo-transparent, logo-white (+ horizontal, emblem, favicon, og-image; SVG + PNG)
- `public/images/` photos cropped from the supplied creatives – swap in better product photos when available

## Deploy
Any static host. Single-page-app fallback is included for Netlify/Cloudflare (`public/_redirects`);
on Apache/Nginx route all paths to `index.html`.
