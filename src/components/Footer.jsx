const Footer = () => (
  <footer className="bg-[#151515] py-8">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-12">
        <a 
          href="https://t.me/+KbCajEnXMa1kNzdi" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 border-b border-gray-600 hover:border-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Чат площадки
        </a>
        <a 
          href="https://t.me/r_winner_r" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 border-b border-gray-600 hover:border-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Представитель РФБ в Омске
        </a>
        <a 
          href="https://t.me/notwizzard" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 border-b border-gray-600 hover:border-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Админ чатика 😎
        </a>
      </div>
    </div>
  </footer>
)

export default Footer