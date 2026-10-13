import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const CustomManufacturing = lazy(() => import('./pages/CustomManufacturing'));
const GlobalExport = lazy(() => import('./pages/GlobalExport'));
const WholesaleEnquiry = lazy(() => import('./pages/WholesaleEnquiry'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="custom-manufacturing" element={<CustomManufacturing />} />
          <Route path="global-export" element={<GlobalExport />} />
          <Route path="wholesale-enquiry" element={<WholesaleEnquiry />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
