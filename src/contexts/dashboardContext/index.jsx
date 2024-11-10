import { createContext, useEffect, useState } from "react";
// import { api } from "../../services/api";

export const DashContext = createContext({})

export const DashProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [eventId, setEventId] = useState('');
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [classCode, setClassCode] = useState('');
    const [content, setContent] = useState('');
    const [obs, setObs] = useState('');
    const [contemplated, setContemplated] = useState('false');
    const [satisfactory, setSatisfactory] = useState('true');
    const [allowSatisfactory, setAllowSatisfactory] = useState(false);
    const [errors, setErrors] = useState({ 
          title: '', 
          date: '',
          classCode: '',
          content: '',
          obs
        });

    const handleAddClickOpen = (info) => {  
      if (!info.type){
        if (info.dateStr) {
          setDate(info.dateStr);
          setTitle('');
        }else if (info.event.startStr){
          setDate(info.event.startStr);
          setTitle(info.event.title);
          setEventId(info.event._def.publicId);
        }
      }else{
        setDate('');
        setTitle('');
      }
         
      setModalAddOpen(true);
      validateForm('openModal');
      
    };

    const handleEditClickOpen = (info) => {
      setDate(info.event.startStr);
      setTitle(info.event.title);
      setEventId(info.event._def.publicId);
      getEventInfo();           
    };

    const handleModalClose = () => {
      setModalAddOpen(false);
      setModalEditOpen(false);
    };

    const validateForm = (action='check') => {
        let isValid = true;
        if (action==='openModal') {
          setContent('')     
          setErrors({})    
          return      
        }
        const newErrors = { 
            title: '',
            date: '',
            classCode: '',
            content: ''
          };

        if (!title) {
            newErrors.title = "O Título é obrigatório.";
            isValid = false;
        }

        if (!date) {
            newErrors.date = "A Data é obrigatória.";
            isValid = false;
        }
        
        if (!classCode) {
            newErrors.classCode = "A Classe é obrigatória.";
            isValid = false;
        }
        
        if (!content) {
            newErrors.content = "O conteúdo planejado é obrigatória.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const checkContentLength = (value, area) => {
      const errorMsg = 'Infelizmente, apenas 255 caracteres são aceitos.';
      if (value.length > 255){
        
        area === 'content' ? setErrors({
          content: errorMsg
        })
        :
        setErrors({
          obs: errorMsg
        })
      }
      area === 'content' ? 
        setContent(value.slice(0, 255))
        :
        setObs(value.slice(0, 255))
    }

    const saveActivity = () => {
      const isValid = validateForm()
      console.log(title, date, classCode, content); 
      if (!isValid) return;
      // createEvent(title, date, classCode, content);
      
      setTitle('');     
      setDate('');     
      setClassCode('');     
      setContent('');   
      setModalAddOpen(false);
    }

    // const createEvent = (title, date, classCode, content) => {
      // setEvents([...events, { id: 2, title: title, date: date, startStr: date }])
    // }
    
    const editActivity = () => {
      const isValid = validateForm()
      console.log(title, date, classCode, content); 
      if (!isValid) return;
      // createEvent(title, date, classCode, content);
      
      setTitle('');     
      setDate('');     
      setClassCode('');     
      setContent('');   
      setModalAddOpen(false);
    }

    const checkRadios = (e) => {
      const contemplatedVal = e.target.value;
      setContemplated(contemplatedVal);     
      if (contemplatedVal === 'true'){
        setAllowSatisfactory(true);
      }else{
        setAllowSatisfactory(false);
      }
    }

    useEffect(() => {
      setEvents([{ id: 1, title: 'event 1', date: '2024-11-11', startStr: '2024-11-11' }])
    }, [])

    const getEventInfo = () => {
      setModalEditOpen(true);
      console.log(eventId);
      
    }

    // const [schedules, setSchedules] = useState([])

    // const getSchedules = async () => {
    //     const token = localStorage.getItem("@TOKEN__AGENDA__ESCOLAR")
        
    //     if (token) {
    //         try{
    //             const response = await api.get("/dates", {
    //                 headers: {
    //                     authorization: `Bearer ${token}`,
    //                 },
    //             });

    //             if(response.status === 200) {
    //                 setSchedules(response.data)
    //             }

    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    // }
  
    return (
      <DashContext.Provider value={{
          events,
          modalAddOpen, 
          modalEditOpen,
          handleAddClickOpen, 
          handleEditClickOpen,
          handleModalClose,
          title,
          setTitle,
          date,
          setDate,
          setClassCode,
          content,
          contemplated,
          satisfactory,
          setSatisfactory,
          showSatisfactory: allowSatisfactory,
          validateForm,
          checkContentLength,
          errors,
          saveActivity,
          editActivity,
          checkRadios
        }}>
        {children}
      </DashContext.Provider>
    );
  };