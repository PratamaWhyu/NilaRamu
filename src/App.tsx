import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { MenuSection } from './components/MenuSection';
import { SpicesSection } from './components/SpicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CookingGuide } from './components/CookingGuide';
import { OrderProcess } from './components/OrderProcess';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { SocialStrip } from './components/SocialStrip';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MenuItem } from './types';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedItemForOrder, setSelectedItemForOrder] = useState<MenuItem | null>(null);
  const [activeDetailItem, setActiveDetailItem] = useState<MenuItem | null>(null);

  const handleOpenOrderModal = (item?: MenuItem) => {
    setSelectedItemForOrder(item || null);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedItemForOrder(null);
  };

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] flex flex-col font-['Space_Grotesk'] antialiased selection:bg-[#22d3ee] selection:text-[#00363e]">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenOrderModal={() => handleOpenOrderModal()}
          onOpenImageModal={() => {}}
        />

        {/* Philosophy & Sealed Fresh Pack Split */}
        <Philosophy />

        {/* Menu Pilihan Ready-to-Cook */}
        <MenuSection
          onSelectItemForOrder={(item) => handleOpenOrderModal(item)}
          onOpenProductDetail={(item) => setActiveDetailItem(item)}
        />

        {/* Secret Spices Section */}
        <SpicesSection />

        {/* Quality Standards / Value Props */}
        <WhyChooseUs />

        {/* Cooking Guide with Interactive Kitchen Timer */}
        <CookingGuide />

        {/* Order Process Timeline */}
        <OrderProcess />

        {/* Customer Reviews & Live Feedback */}
        <Testimonials />

        {/* High-Converting Order Banner */}
        <CtaBanner onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* Social Media Strip */}
        <SocialStrip />
      </main>

      {/* Rich Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Order Customizer & WhatsApp Generator Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        preselectedItem={selectedItemForOrder}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        item={activeDetailItem}
        onClose={() => setActiveDetailItem(null)}
        onOrderNow={(item) => handleOpenOrderModal(item)}
      />
    </div>
  );
}
