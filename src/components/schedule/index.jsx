import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

export default function Schedule() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, bootstrap5Plugin ]}
      initialView="dayGridMonth"
      themeSystem='bootstrap5'
      height={500}      
      locale={'pt-br'}
      editable='true'
      events={[
        { id: 1, title: 'event 1', date: '2024-11-11' },
      ]}
    />
  )
}