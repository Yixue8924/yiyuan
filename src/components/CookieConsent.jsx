import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 檢查使用者是否已經同意過
    const consent = localStorage.getItem('yiyuan-cookie-consent')
    if (!consent) {
      // 如果沒同意過，延遲 2 秒顯示（避免一進場就干擾視覺）
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('yiyuan-cookie-consent', 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[150] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="bg-mint-green/30 p-3 rounded-full text-forest-green flex-shrink-0">
                <Cookie size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">我們重視您的隱私</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  本網站使用 Cookie 以提升您的瀏覽體驗並分析流量。繼續使用本網站即表示您同意我們使用 Cookie。您可以點擊「隱私政策」了解更多詳細資訊。
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none whitespace-nowrap bg-forest-green text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-forest-green/20"
              >
                接受所有 Cookie
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="關閉"
              >
                <X size={24} />
              </button>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}