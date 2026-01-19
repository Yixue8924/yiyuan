import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, GraduationCap, MapPin, MonitorPlay } from 'lucide-react';

const services = [
  {
    title: 'ESG 永續顧問諮詢',
    description: '協助企業導入 ESG 策略，包含碳盤查輔導、永續報告書撰寫及綠色供應鏈管理。',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1542601906-938b7d791c0e?auto=format&fit=crop&q=80',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: '環境教育課程開發',
    description: '客製化環教教案設計，結合地方特色與環境議題，打造互動式學習體驗。',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: '環教設施場所申辦',
    description: '提供專業的場所認證輔導，從文件撰寫到實地查核，協助取得官方環教認證。',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: '多媒體教具製作',
    description: '整合數位技術，製作導覽影片、互動網頁及 VR/AR 環境教學輔助工具。',
    icon: MonitorPlay,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    color: 'bg-purple-50 text-purple-600',
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            專業服務項目
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            邑沅致力於連結人與環境，提供多元化的永續發展解決方案。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container with Aspect Ratio to prevent Layout Shift */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-200 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  // Fixes PageSpeed "explicit width and height"
                  width="400"
                  height="300"
                  // Improve efficiency with lazy loading
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 p-2 rounded-lg ${service.color} shadow-lg backdrop-blur-sm`}>
                  <service.icon size={24} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-forest-green text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    了解更多 <span>→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;