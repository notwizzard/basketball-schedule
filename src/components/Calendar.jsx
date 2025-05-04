const Calendar = () => (
  <div className="flex justify-center px-4 py-10">
    <iframe
      src="https://calendar.yandex.ru/embed/week?&layer_ids=33278217&tz_id=Asia/Omsk&layer_names=🏀 ЦУБ | Площадка у Космоса"
      frameBorder="0"
      className="w-full max-w-5xl rounded-xl border-[2px] border-gray-300 shadow-lg"
      style={{ height: '500px' }}
      title="Календарь"
    ></iframe>
  </div>
)

export default Calendar