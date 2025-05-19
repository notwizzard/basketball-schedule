const Calendar = () => (
  <div className="flex flex-col items-center px-4 py-10 space-y-4">
    <iframe
      src="https://calendar.yandex.ru/embed/week?&layer_ids=33278217&tz_id=Asia/Omsk&layer_names=🏀 ЦУБ | Площадка у Космоса"
      frameBorder="0"
      className="w-full max-w-5xl rounded-xl border-[2px] border-gray-300 shadow-lg"
      style={{ height: '500px' }}
      title="Календарь"
    ></iframe>
    <div className="flex flex-col sm:flex-row gap-4">
      <a 
        href="https://calendar.yandex.ru/embed/week?&layer_ids=33278217&tz_id=Asia/Omsk&layer_names=🏀 ЦУБ | Площадка у Космоса"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg text-center"
      >
        Открыть расписание
      </a>
      <a 
        href="https://forms.yandex.ru/u/6824c7af50569025a2ddae91"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg text-center"
      >
        Провести мероприятие
      </a>
    </div>
  </div>
)

export default Calendar